import {controllerMapStateToProps} from "../../decorators/controller";
import React, { Component } from "react";
import { connect } from "react-redux";
import DynamicIcon from '../../../svgs/dynamic.svg'
import controllerDecorate from '../../decorators/controller'
import { iconsManager } from "../../../../../admin/src/js/helpers";
import { mountListenerHistory, unmountListenerHistory } from '../../helpers';


class TextareaController extends Component {
  constructor(props) {
    super(props);
    controllerDecorate(this);
    this.changeValue = this.changeValue.bind(this);
    let value = this.getSettings(this.props.controlId);
    if (value === null && this.props.default) {
      value = this.props.default;
    }
    value = value || '';
    this.state = {
      value,
      show: true,
      dynamicValue: value.dynamic ? value : null,
    };
    this.dynamicButton = React.createRef();
  }
  /**
   * Потеря фокуса обновляет элемент
   * @param e
   */
  onBlur = e =>{
    mountListenerHistory();
    this._changeValue(e.target.value)
  };
  onFocus = () =>{
    unmountListenerHistory();
  }
  /**
   * Изменение больше не обновляет элемент
   * @param e
   */
  changeValue(e) {
    this._changeValue(e.target.value, false);
  }
  getDefaultValue() {
    return '';
  }
  render() {
    if (this.state.show === false) {
      return '';
    }
    // let value = this.getSettings(this.props.controlId) || this.getDefaultValue(); todo: удалить если будет работать
    let value = this.state.value || this.getDefaultValue();
    return <div className="controller-container controller-container_textarea">
      <div className="controller-container__label">
        {this.props.label}
      </div>

      {
        (this.props.dynamic !== false) && (this.state.dynamicValue ? '' : <div className="controller-container__dynamic" ref={this.dynamicButton} onClick={this.openDynamicContent}>
          Convert Data
            <DynamicIcon />
        </div>)
      }
      {this.state.dynamicValue ? <div className="dynamic-placeholder control-field">
        <div className="dynamic-placeholder__text">
          {
            `${this.state.dynamicValue.modelTitle} ${this.state.dynamicValue.fieldTitle}`
          }
        </div>

        <div className="dynamic-placeholder__remove" onClick={this.removeDynamicSettings}>
          {
            iconsManager().renderIcon('times')
          }
        </div>
      </div> : <textarea className="controller-container__textarea"
                         onBlur={this.onBlur}
                         onFocus={this.onFocus}
                         onChange={this.changeValue} value={value} />
      }
      {this.props.description
          ? <div className="controller-container__description"
                 dangerouslySetInnerHTML={{__html:this.props.description}}/> : ''}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    currentElement: state.currentElement.currentElement,
    currentState: state.currentState,
    currentScreen: state.currentScreen
  };
}
export default connect(controllerMapStateToProps)(TextareaController);
