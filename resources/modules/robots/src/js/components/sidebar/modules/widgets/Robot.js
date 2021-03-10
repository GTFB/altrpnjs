import * as React from "react";
import { Handle } from "react-flow-renderer";

export default class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  redirectTo(item) {
    if (!item) {
      alert('Куда перейти? Робот не указан!');
    }
    else {
      if (confirm('Перейти без сохранения?')) return window.location.href = `robots-editor?robot_id=${item}`;
    }
  }

  render() {
    let nodeClasses = "circle";
    if (this.props.selected) nodeClasses += " selected";

    return (
      <div className={nodeClasses} onDoubleClick={() => this.redirectTo(this.props?.data?.props?.nodeData?.id ?? false)}>
        <Handle type="target" position="top" />
        <div className="wrapper">
          <div></div>
          <div className="robot-text">{this.props?.data?.label}</div>
          <div className="robot-type">{this.props?.type}</div>
        </div>
        <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
      </div>
    );
  }
}
