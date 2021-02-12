import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import Chevron from "../../../../../editor/src/svgs/chevron.svg";
import Send from "./data/Send"
import Condition from "./data/Condition"
import Crud from "./data/Crud"
import store from "../../store/store"
import {setUpdatedNode} from "../../store/robot-settings/actions"
import AltrpSelect from "../../../../../admin/src/components/altrp-select/AltrpSelect";
import Resource from "../../../../../editor/src/js/classes/Resource";

export default class SelectedPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    }
    this.resource = new Resource({ route: "/admin/ajax/robots_options" });
  }

  async componentDidMount() {
    const robots = await this.resource.getAll();
    this.setState(s =>({...s, robots }));
}

  changeInput(e){
    let node = this.props.selected;
    node.data.label = e.target.value;
    store.dispatch(setUpdatedNode(node));
  }

  changeSelect = (e, type = false) =>{
    let node = this.props.selected;
    if(type === "robot"){
      node.data.props.nodeData.id = e.value;
    } else {
      switch(e.value){
        case "crud":
          node.data.props.nodeData = {
            "type": "crud",
            "data": {
                "method": "",
                "body": {},
                "record_id": null,
                "model_id": ""
            }
          };
          break;
        case "send_mail":
          node.data.props.nodeData = {
            "type": "send_mail",
            "data": {
                "entities": "",
                "subject": "",
                "message": ""
            }
          };
          break;
        case "send_notification":
          node.data.props.nodeData = {
            "type": "send_notification",
            "data": {
                "entities": "",
                "channels": [
                    "broadcast",
                    "telegram",
                    "mail"
                ],
                "message": ""
            }
          };
          break;
      }
    }

    store.dispatch(setUpdatedNode(node));
  }
  
  render() {
    const actionTypeOptions = [
      {label:'Send Mail', value: 'send_mail'},
      {label:'Send Notification', value: 'send_notification'},
      {label:'CRUD', value: 'crud'}
    ];
    const conditionTypeOptions = [];
    const robotOptions = this.state.robots ?? [];
    const typeData = this.props.selected.data?.props?.nodeData?.type ?? '';
    const robot = this.props.selected.data?.props?.nodeData?.id ?? '';
    // console.log(this.props.selected);
    return (
      <div className="panel settings-panel d-flex">
        <div className="settings-controllers">
          <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
            <div id="settingsControllers">
              <div className="settings-section open">
                <div className="settings-section__title d-flex">
                  <div className="settings-section__icon d-flex">
                    <Chevron />
                  </div>
                  <div className="settings-section__label">Настройки</div>
                </div>
                {this.props.selected?.id ? (
                  <div className="controllers-wrapper">
                    <div className="controller-container controller-container_textarea">
                      <div className="controller-container__label">Text</div>
                      <input
                        type="text"
                        onChange={(e) => { this.changeInput(e) }}
                        value={ this.props.selected.data?.label }
                      ></input>
                    </div>
                    {(this.props.selected?.type === "action") && <div>
                      <div className="controller-container controller-container_textarea">
                          <div className="controller-container__label">Method</div>
                          <AltrpSelect id="type-action"
                              value={_.filter(actionTypeOptions, item => typeData === item.value)}
                              onChange={e => {this.changeSelect(e)}}
                              options={actionTypeOptions} />
                      </div>
                        <Send selected={this.props.selected || []}/>
                        {(this.props.selected?.data?.props?.nodeData?.type === "crud") && <Crud selected={this.props.selected || []}/>}
                      </div>}
                    {(this.props.selected?.type === "condition") && <div>
                      <div className="controller-container controller-container_textarea">
                          <div className="controller-container__label">Type</div>
                          <AltrpSelect id="type-condition"
                              value={_.filter(conditionTypeOptions, item => typeData === item.value)}
                              onChange={e => {this.changeSelect(e)}}
                              options={conditionTypeOptions} />
                      </div>
                        <Condition selectNode={this.props.selected || []}/>
                      </div>}
                    {(this.props.selected?.type === "robot") && 
                      <div className="controller-container controller-container_textarea">
                          <div className="controller-container__label">Robot</div>
                          <AltrpSelect id="type-robot"
                              value={_.filter(robotOptions, item => robot === item.value)}
                              onChange={e => {this.changeSelect(e, "robot")}}
                              options={robotOptions} />
                      </div>}
                  </div>
                ) : (
                  "Select a node or edge to edit"
                )}
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}
