import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import appStore from "../store/store"

class ElementWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentModel: appStore.getState().currentModel,
      formsStore: appStore.getState().formsStore,
    };
    appStore.subscribe(this.updateStore)
  }

  /**
   * Отлавливаем ошибки
   * @param error
   * @param errorInfo
   */
  componentDidCatch(error, errorInfo) {
    this.setState(state=>({
      ...state,
      error: error,
      errorInfo: errorInfo
    }));
  }

  /**
   * Подписываемся на обновление store редакса
   * (обновляем, только если currentModel изменилась)
   */
  updateStore = () => {
    if(this.state.currentModel !== appStore.getState().currentModel){
      this.setState(state => ({...state, currentModel: appStore.getState().currentModel}));
    }

    if((this.props.element.getName() === 'input') && this.state.formsStore !== appStore.getState().formsStore){
      // console.log(this.state.formsStore);
      // console.log(appStore.getState().formsStore);
      this.setState(state => ({...state, formsStore: appStore.getState().formsStore}));
    }
  };

  render() {
    const { 
      hide_on_wide_screen,
      hide_on_desktop,
      hide_on_laptop,
      hide_on_tablet,
      hide_on_big_phone,
      hide_on_small_phone 
    } = this.props.element.settings;

    let classes = `altrp-element altrp-element${this.props.element.getId()} altrp-element_${this.props.element.getType()}`;
    classes += this.props.element.getPrefixClasses() + " ";
    if(this.props.element.getType() === 'widget'){
      classes += ` altrp-widget_${this.props.element.getName()}`;
    }
    if (hide_on_wide_screen) {
      classes += ' hide_on_wide_screen';
    }
    if (hide_on_desktop) {
      classes += ' hide_on_desktop';
    }
    if (hide_on_laptop) {
      classes += ' hide_on_laptop';
    }
    if (hide_on_tablet) {
      classes += ' hide_on_tablet';
    }
    if (hide_on_big_phone) {
      classes += ' hide_on_big_phone';
    }
    if (hide_on_small_phone) {
      classes += ' hide_on_small_phone';
    }
    if(this.state.errorInfo){
      return  <div className="altrp-error">
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    }
    return <div className={classes}>
      {
        React.createElement(this.props.component, {
          element: this.props.element,
          children: this.props.element.getChildren(),
          match: this.props.match,
          currentModel: this.state.currentModel,
          formsStore: this.state.formsStore,
          appStore
        })
      }
    </div>
  }
}

export default withRouter(ElementWrapper);
