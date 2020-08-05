<?php

namespace App\Observers;

use App\Altrp\Column;
use App\Altrp\Controller;
use App\Altrp\Generators\ControllerGenerator;
use App\Altrp\Generators\ModelGenerator;
use App\Altrp\Migration;
use App\Altrp\Model;
use App\Altrp\Table;
use App\Exceptions\CommandFailedException;
use App\Exceptions\Controller\ControllerFileException;
use App\Exceptions\ControllerNotWrittenException;
use App\Exceptions\ModelNotWrittenException;
use App\Exceptions\RouteGenerateFailedException;
use Carbon\Carbon;

class AltrpModelObserver
{
    private $oldModel;

    /**
     * Вызываем перед созданием модели
     * @param Model $model
     * @throws CommandFailedException
     * @throws \Exception
     */
    public function creating(Model $model)
    {
        $table = Table::find($model->table_id);
        if (! $table) {
            $table = new Table();
            $table->name = strtolower(\Str::plural($model->name));
            $table->title = ucfirst(\Str::plural($model->name));
            $table->user_id = auth()->user()->id;
            $table->save();

        }
        $model->table_id = $table->id;

        $generator = new ModelGenerator($model);
        $result = $generator->createModelFile();
        if (! $result) {
            throw new CommandFailedException('Failed to create model file', 500);
        }
    }

    /**
     * Вызываем после создания модели
     * @param Model $model
     * @throws ControllerFileException
     */
    public function created(Model $model)
    {
        $controller = new Controller();
        $controller->model_id = $model->id;
        if (! $controller->save()) {
            throw new ControllerFileException('Failed to create controller');
        }
    }

    /**
     * Вызываем перед обновлением модели
     * @param Model $model
     * @throws CommandFailedException
     */
    public function updating(Model $model)
    {
        $oldModel = Model::find($model->id);

        $generator = new ModelGenerator($model);
        $result = $generator->updateModelFile();
        if (! $result) {
            throw new CommandFailedException('Failed to update model file', 500);
        }
    }

    /**
     * Вызываем после обновления модели
     * @param Model $model
     * @throws CommandFailedException
     * @throws ControllerNotWrittenException
     * @throws ModelNotWrittenException
     * @throws RouteGenerateFailedException
     */
    public function updated(Model $model)
    {
        /**
         * @var Controller $controller
         */
        $controller = $model->altrp_controller;
        $desc = $model->name . ' ' . $model->title . ' '
            . $model->description . ' ' . $model->time_stamps . ' ' . $model->soft_deletes;
        Controller::withoutEvents(function () use ($controller, $desc) {
            if (! $controller->update(['description' => $desc])) {
                throw new ControllerFileException('Failed to update controller',  500);
            }
        });
        $generator = new ControllerGenerator($controller, ['old_model_name' => $model->getOriginal('name')]);
        if (! $generator->generateRequests()) {
            throw new ControllerNotWrittenException('Failed to generate requests', 500);
        }
        if (! $generator->updateControllerFile()) {
            throw new CommandFailedException('Failed to update controller file', 500);
        }
        if ($generator->getSourceActions()->isEmpty()) {
            if (! $generator->writeSourceActions()) {
                throw new ModelNotWrittenException('Failed to write source action to the database', 500);
            }
        }
        if (! $generator->writeSourceRoles()) {
            throw new ModelNotWrittenException('Failed to write source roles to the database', 500);
        }
        if (! $generator->writeSourcePermissions()) {
            throw new ModelNotWrittenException('Failed to write source permissions to the database', 500);
        }
        if (! $generator->generateRoutes()) {
            throw new RouteGenerateFailedException('Failed to generate routes', 500);
        }
    }

    /**
     * Вызываем перед удалением модели
     * @param Model $model
     * @throws CommandFailedException
     * @throws ControllerFileException
     */
    public function deleting(Model $model)
    {
        $table = Table::find($model->table_id);
        \DB::table($table->name)->delete();
        $migration = $table->actual_migration();
        Column::where('altrp_migration_id', $migration->id)->delete();
        $migration->delete();
        $generator = new ModelGenerator($model);
        $result = $generator->deleteModelFile();
        if (! $result) {
            throw new CommandFailedException('Failed to delete model file', 500);
        }
        $controller = $model->altrp_controller;
        if (! $controller->delete()) {
            throw new ControllerFileException('Failed to delete controller',  500);
        }
        $table->delete();
    }

    public function deleted(Model $model)
    {

    }
}