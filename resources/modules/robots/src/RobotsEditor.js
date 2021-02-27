import React, { Component } from "react";
import ReactFlow, {
  MiniMap,
  ReactFlowProvider,
  Controls,
  removeElements,
  addEdge,
  updateEdge,
  isNode,
  isEdge
} from "react-flow-renderer";
import { connect } from "react-redux";
import _ from "lodash";
import "./sass/styles.scss";
import Resource from "../../editor/src/js/classes/Resource";
import { hot } from "react-hot-loader";
import store from "./js/store/store";
import {
  setUpdatedNode,
  setRobotSettingsData
} from "./js/store/robot-settings/actions";
import { setCurrentRobot } from "./js/store/current-robot/actions";
import Sidebar from "./js/components/sidebar/Sidebar";
import Condition from "./js/components/sidebar/nodes/Condition";
import Begin from "./js/components/sidebar/nodes/Begin";
import Action from "./js/components/sidebar/nodes/Action";
import Robot from "./js/components/sidebar/nodes/Robot";
import End from "./js/components/sidebar/nodes/End";
import CustomEdge from "./js/components/sidebar/nodes/CustomEdge";
import ConnectionLine from './js/components/sidebar/nodes/ConnectionLine';

const mapStateToProps = state => {
  return {
    elements: _.cloneDeep(state.robotSettingsData),
    robot: _.cloneDeep(state.currentRobot),
  };
};

class RobotsEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: props.elements || [],
      robot: props.robot || [],
      reactFlowInstance: null,
      selected: false,
      selectEdge: false,
      activePanel: "widgets"
    };
    this.changeTab = this.changeTab.bind(this);
    this.resource = new Resource({ route: "/admin/ajax/robots" });
    this.reactFlowRef = React.createRef();
  }

  // Записьв store в state
  updateRobotState() {
    const elements = store.getState()?.robotSettingsData;
    const robot = store.getState()?.currentRobot;
    console.log(elements);
    console.log(robot);
    this.setState(s => ({ ...s, elements, robot }));
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(!_.isEqual(prevProps.elements, this.props.elements)){
  //     this.setState(s=> ({...s, elements: this.props.elements}));
  //   }
  // }

  async componentDidMount() {
    store.subscribe(this.updateRobotState.bind(this));

    const robotId = new URL(window.location).searchParams.get("robot_id");
    const robot = await this.resource.get(robotId);
    console.log(robot);
    store.dispatch(setCurrentRobot(robot));
    if(!robot.chart) return;
    const data = JSON.parse(robot.chart) ?? [];
    store.dispatch(setRobotSettingsData(data));
  }

  // Удаление ноды
  onElementsRemove = elementsToRemove => {
    const robotStore = store.getState()?.robotSettingsData;
    const selected = this.state.selected;
    const newStore = removeElements(elementsToRemove, robotStore);
    if(_.isArray(elementsToRemove)){
      elementsToRemove.map(item =>{
        if(item.id == selected?.id) this.setState(s => ({ ...s, selected: {} }));
      })
    }
    console.log(elementsToRemove);
    store.dispatch(setRobotSettingsData(newStore));
  }

  // Добавление связи между нодами
  onConnect = params => {
    console.log(params);
    const robotStore = store.getState()?.robotSettingsData;
    const newStore = addEdge(params, robotStore);
    store.dispatch(setRobotSettingsData(newStore));
  }

  // Добавление новой ноды
  onDrop = event => {
    event.preventDefault();
    const reactFlowBounds = this.reactFlowRef.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("reactflow-type");
    const props = this.getNodeData(type);
    const position = this.state.reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });
    const newNode = {
      id: `${this.getId()}`,
      type,
      position,
      data: { type: "node",
              label: `${type}`,
              props
            }
    };

    const robotStore = store.getState()?.robotSettingsData;
    const newStore = robotStore.concat(newNode);
    store.dispatch(setRobotSettingsData(newStore));
  }

  // Получение id нового элемента (ноды)
  getId() {
    const time = new Date().getTime();
    return time;
  }

  // Получение data нового элемента (ноды)
  getNodeData(type) {
    let data = { type };

    switch (type){
      case "action":
        data = {
          "type": "action",
          "nodeData": {}
        };
        break;
      case "condition":
        data = {  
          "type": "condition",
          "nodeData": {
              "type": "none",
              "operator": "",
              "body": []
          }
        };
        break;
      case "robot":
        data = {  
          "type": "robot",
          "nodeData": {
              "id": "",
          }
        };
        break;
    }
    return data;
  }

  onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  onLoad = _reactFlowInstance => {
    this.setState(s => ({ ...s, reactFlowInstance: _reactFlowInstance }));
  }

  onNodeDragStop(event, node) {
    store.dispatch(setUpdatedNode(node));
  }

  onEdgeUpdate = (oldEdge, newConnection) => {

    const robotStore = store.getState()?.robotSettingsData;
    const newStore = updateEdge(oldEdge, newConnection, robotStore);
    store.dispatch(setRobotSettingsData(newStore));
  }

  // Запись активного элемента в state
  onElementClick = (event, element) => {
    if(isNode(element)) this.setState(s => ({ ...s, selected: element, selectEdge: false }));
    if(isEdge(element)) this.setState(s => ({ ...s, selectEdge: element, selected: false }));
    store.dispatch(setUpdatedNode(element));
    this.setState(s => ({ ...s, activePanel: "settings" }));
  }

  changeTab(index) {
    this.setState(s => ({ ...s, activePanel: index }));
  }


  render() {
    console.log(this.state.selected);
    console.log(this.state.selectEdge);
    return (
      <div className="page__content">
        <ReactFlowProvider>
          <Sidebar changeTab={this.changeTab}
                  activePanel={ this.state.activePanel }
                  robot={ this.state.robot }
                  elements={ this.state.elements }
                  selected={ this.state.selected }
                  selectEdge={ this.state.selectEdge }
                  onLoad={ this.onLoad }
          />
          <div className="content" ref={this.reactFlowRef }>
            <ReactFlow
              elements={ this.state.elements }
              onConnect={ this.onConnect }
              onElementsRemove={ this.onElementsRemove }
              onElementClick={ this.onElementClick }
              onLoad={ this.onLoad }
              onDrop={ this.onDrop }
              onNodeDragStart={ this.onNodeDragStart }
              onNodeDragStop={ this.onNodeDragStop }
              onDragOver={ this.onDragOver }
              nodeTypes={{
                begin: Begin,
                condition: Condition,
                action: Action,
                robot: Robot,
                end: End,
              }}
              onEdgeUpdate={this.onEdgeUpdate}
              edgeTypes={{
                default: CustomEdge,
                custom: CustomEdge,
              }}
              connectionLineComponent={ConnectionLine}
            >
              <Controls />
              <MiniMap
                nodeColor={node => {
                  switch (node.type) {
                    case 'begin': return 'green';
                    case 'condition': return 'red';
                    case 'action': return 'blue';
                    default: return '#999';
                  }
                }}
                nodeClassName={node => {
                  switch (node.type) {
                    case 'begin': return 'flow-node';
                    case 'condition': return 'condition-romb';
                    // case 'action': return 'blue';
                    default: return 'flow-node';
                  }
                }}
              />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    );
  }
}

/**
 * Если разработка то включается HMR <br/>
 * По умолчанию просто компонент
 * @member _export
 */
let _export;
process.env.NODE_ENV === "production"
  ? (_export = RobotsEditor)
  : (_export = hot(module)(RobotsEditor));

export default connect(mapStateToProps)(_export);