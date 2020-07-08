import React, {Component} from "react";
import AreaComponent from "./AreaComponent";
import {setTitle} from "../helpers";
import { Scrollbars } from "react-custom-scrollbars";

class RouteContent extends Component {
  componentDidMount(){
    setTitle(this.props.title);
  }
  render(){
    console.log(this.props);
    return (
    <Scrollbars
      style={{zIndex: 99999}}
      // autoHide
      // autoHideTimeout={500}
      // autoHideDuration={200}
    >

    <div className="route-content">{
      this.props.areas.map(area => <AreaComponent
          {...area}
          page={this.props.id}
          model={this.props.model}
          key={'appArea_' + area.id}/>)
    }</div>
    </Scrollbars>
    )
  }
}

export default RouteContent