import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import ControllerHistory from "../classes/ControllerHistory";

class HistoryPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "actions"
    };
  }

  setActiveTab(activeTab) {
    return () => {
      this.setState(state => ({
        ...state,
        activeTab
      }));
    };
  }

  renderTabContent() {
    switch (this.state.activeTab) {
      case "actions":
        return <ActionsTabContent />;
      case "revision":
        return <RevisionTabContent />;
      default:
        return "";
    }
  }

  render() {
    let actionsTabClasses =
      "history-panel__tab " +
      (this.state.activeTab === "actions" ? "history-panel__tab--active" : "");
    let revisionTabClasses =
      "history-panel__tab " +
      (this.state.activeTab === "revision" ? "history-panel__tab--active" : "");

    return (
      <div className="history-panel">
        <div className="history-panel__tabs">
          <button
            onClick={this.setActiveTab("actions")}
            className={actionsTabClasses}
          >
            <span>ACTIONS</span>
          </button>
          <button
            onClick={this.setActiveTab("revision")}
            className={revisionTabClasses}
          >
            <span>REVISION</span>
          </button>
        </div>
        <div className="history-panel__tab-content">
          {this.renderTabContent()}
        </div>
      </div>
    );
  }
}

const ActionsTabContent = () => {
  const controllerHistory = new ControllerHistory();
  const historyStore = useSelector(state => state.historyStore.history);

  const deleteHistoryItems = index => {
    for (let i = 0; i < historyStore.length - index; i++) {
      controllerHistory.restore();
    }
  };

  return (
    <div className="history-panel__actions-tab-content">
      {historyStore.map((item, index) => {
        let title = "";
        if (item.data) {
          title = item.data.element.getTitle();
        }

        let type = "";
        switch (item.type) {
          case "ADD":
            type = "Added";
            break;
          case "EDIT":
            type = "Edited";
            break;
          case "DELETE":
            type = "Removed";
            break;
        }

        return (
          <div
            key={index}
            className="history-panel__restore-item"
            onClick={() => deleteHistoryItems(index)}
          >
            <span className="history-panel__restore-item-title">{title}</span>
            <span className="history-panel__restore-item-type">{type}</span>
          </div>
        );
      })}
      <div className="history-panel__actions-tab-subscribe">Switch to Revisions tab for older version</div>
    </div>
  );
};

const RevisionTabContent = () => {
  return <div>RevisionTabContent</div>;
};

export default HistoryPanel;
