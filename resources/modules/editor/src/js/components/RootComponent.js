import React, { Component,  } from "react";

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      settings: props.element.getSettings()
    };
    props.element.component = this;
    if (window.elementDecorator) {
      window.elementDecorator(this);
    }
    if(props.baseRender){
      this.render = props.baseRender(this);
    }
  }

  async _componentDidMount() {
    let hiddenElementsTriggers = this.state.settings.hidden_elements_triggers;
    // if (hiddenElementsTriggers && _.isString(hiddenElementsTriggers)) {
    //   hiddenElementsTriggers = hiddenElementsTriggers
    //     .split(",")
    //     .map(item => item.trim());
    //   this.props.setDefaultTriggers(hiddenElementsTriggers);
    // }

    const actionsManager = (
        await import(
            "../../../../front-app/src/js/classes/modules/ActionsManager.js"
            )
    ).default;
    await actionsManager.callAllWidgetActions(
        this.props.element.getIdForAction(),
        'load',
        this.props.element.getResponsiveSetting("page_load_actions", []),
        this.props.element
    );
  }

  render() {
    let classes = `sections-wrapper ${this.props.element
      .getSelector()
      .replace(".", "")} ${this.props.element.hasCardModel() ? 'sections-wrapper_card' : ''}`;
    let ElementWrapper = this.props.ElementWrapper || window.ElementWrapper;
    return (
      <div className={classes}>
        {this.state.children.map(section => {
          return(
            <ElementWrapper
              ElementWrapper={ElementWrapper}
              rootElement={this.props.element}
              key={section.getIdForAction()}
              component={section.componentClass}
              baseRender={this.props.baseRender}
              element={section}
            />
          )})
        }
      </div>
    );
  }
}

export default RootComponent;
