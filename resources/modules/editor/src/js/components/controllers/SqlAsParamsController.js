import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import axios from "axios";

const SqlAsParamsController = ({ controller, controlId, label }) => {
  const currentElement = useSelector((state) => state.currentElement.currentElement);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState(currentElement.getSettings(controlId));

  const getOptions = useCallback(async () => {
    setIsLoading(true);
    try {
      const req = await axios("/admin/ajax/sql_editors/list");
      if (req.status === 200) {
        setOptions(
          req.data.map((item) => {
            //console.log(item);
            return {
              value: item.name,
              label: item.title,
              model: item.model,
            };
          })
        );
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  const handleSelected = (opts) => {
    setSettings(opts);
  };

  //Изменяем настройки
  useEffect(() => {
    controller.changeValue(settings);
  }, [settings]);

  // Подгружаем sql запросы
  useEffect(() => {
    options.length === 0 && getOptions();
  }, [options.length]);

  if (!controller.isShow()) {
    return "";
  }

  return (
    <div className="controller-container controller-container_query">
      <div className="controller-field-group flex-wrap">
        <div className="controller-container__label">Choose SQL queries for filter params</div>
        <div className="control-container_select-wrapper w-100">
          <Select
            isMulti
            isClearable
            isSearchable
            defaultValue={settings}
            isLoading={isLoading}
            onChange={handleSelected}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default SqlAsParamsController;