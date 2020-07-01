import Resource from "./Resource";

/**
 * Класс имитирующий поведение формы (собирает данные с виджетов полей и отправляет их на сервер)
 */
class AltrpForm {
  constructor(formId, route, method = 'POST'){
    this.formId = formId;
    this.fields = [];
    this.method = method;
    this.route = route;
    this.resource = new Resource({route})
  }

  /**
   * Устанавливает список полей (в случае, если егистрация после добавления какой либо формы)
   * @param {FrontElement[]}fields
   */
  setFields(fields){
    this.fields = fields;
  }

  /**
   * Добавлйет поле
   * @param {FrontElement} field
   */
  addField(field){
    this.fields.push(field);
    return true;
  }

  /**
   * Проверка полей перед отправкой
   * @return {boolean}
   */
  async submit(){
    let success = true;
    this.fields.forEach(field=>{
      if(! field.fieldValidate()){
        success = false;
      }
    });
    if(success){
      switch (this.method){
        case 'POST':{
          return await this.resource.post(this.getData());
        }
        case 'PUT':{
          return await this.resource.put(this.getData());
        }
      }
    } else {
      return await alert('Валидация не прошла');
    }
  }

  /**
   * Собирает данные с полей для отправки
   * @return {object}
   */
  getData(){
    let data = {};
    this.fields.forEach(field=>{
      if(field.getValue()){
        data[field.getSettings('field_id')] = field.getValue();
      }
    });
    return data;
  }
}

export default AltrpForm