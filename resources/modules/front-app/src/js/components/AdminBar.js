import React from "react";
import { getDataByPath } from "./../helpers";

class AdminBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePopupTemplate: false,
      valueInput: "",
      contentResult: <div/>,
      visibleContentResult: false,
      isHttps: false
    };
    this.popupTemplateRef = React.createRef();
    this.searchContentResult = React.createRef();
    this.toggleVisiblePopupTemplate = this.toggleVisiblePopupTemplate.bind(
      this
    );
    this.handleInput = this.handleInput.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.openPageSettings = this.openPageSettings.bind(this);
    this.handleClickCopy = this.handleClickCopy.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleDoubleClickSearch = this.handleDoubleClickSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener("click", this.handleOutsideClick);

    let protocol = location.href.split("://")[0];
    if(protocol === "https")
      this.setState(state => ({
        ...state,
        isHttps: true
      }));
  }

  toggleVisiblePopupTemplate() {
    this.setState(state => ({
      ...state,
      visiblePopupTemplate: !state.visiblePopupTemplate
    }));
  }

  openTemplate(id) {
    return () => window.open(`/admin/editor?template_id=${id}`, "_blank");
  }

  openPageSettings() {
    window.open(`/admin/pages/edit/${this.props.idPage}`);
  }

  openPageAdmin() {
    window.open("/admin/dashboard");
  } 

  handleInput(event) {
    let value = event.target.value;
    this.setState(state => ({
      ...state,
      valueInput: value
    }));
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.handleClickSearch();
    }
    if (event.key === "Escape") {
      this.setState(state => ({
        ...state,
        visibleContentResult: false
    }));
  }
  }

  renderResultSearch(resultSearch = null) {
    return JSON.stringify(getDataByPath(this.state.valueInput), null, "\t");
  }

  handleOutsideClick(event) {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(this.popupTemplateRef.current)) {
      this.setState(state => ({
        ...state,
        visiblePopupTemplate: false
      }));
    }
    if (!path.includes(this.searchContentResult.current)) {
      this.setState(state => ({
        ...state,
        visibleContentResult: false
      }));
    }
  }

  handleClickCopy() {
    JSON.stringify(getDataByPath(this.state.valueInput), null, "\t").select();
    document.execCommand("copy");
  }

  handleClickSearch() {
    this.setState(state => ({
      // ...state, contentResult: this.renderResultSearch(getDataByPath(this.state.valueInput)), visibleContentResult: true
      ...state,
      contentResult: this.renderResultSearch(getDataByPath()),
      visibleContentResult: true
    }));
  }

  handleDoubleClickSearch() {
    this.setState(state => ({
      ...state, 
      visibleContentResult: false
    }))
  }

  render() {
    return (
      <div className="admin-bar">
        <div className="admin-bar__tools">
          <div className="admin-bar__link" onClick={this.openPageAdmin}>
            Admin
          </div>
          <div className="admin-bar__tool">
            <span onClick={this.toggleVisiblePopupTemplate}>
              {iconsManager.renderIcon("admin-bar1", {
                className: "admin-bar__tool-svg"
              })}{" "}
              Edit-Template
            </span>
            
            {this.state.visiblePopupTemplate && (
              <div
                className="admin-bar__popup-template"
                ref={this.popupTemplateRef}
              >
                {this.props.areas.map((item, index) => {
                  if(item.id === "popups") 
                    return (
                      <div
                        className="admin-bar__popup-template-item admin-bar__popup-popups"
                        key={`template-${index}`}
                      >
                        popup:{" "}
                        {iconsManager.renderIcon("chevron-admin-bar", {
                          className: "admin-bar__popup-template-chevron"
                        })}
                        <div className="admin-bar__popup-popups-items">
                          {item.templates.map((item, index) => (
                            <div
                              className="admin-bar__popup-popups-item"
                              onClick={this.openTemplate(item.id)}
                              key={`popup-${index}`}
                            >
                              {item.name}
                            </div>  
                          ))}
                        </div>
                      </div>
                    );
                  else {
                    if(item.template.name)
                      return (
                        <div
                          className="admin-bar__popup-template-item"
                          key={`template-${index}`}
                          onClick={this.openTemplate(item.template.id)}
                        >
                          {item.template.name}
                        </div>
                      );
                  }
                })}
              </div>
            )}
          </div>
          <div className="admin-bar__tool" onClick={this.openPageSettings}>
            {iconsManager.renderIcon("admin-bar2", {
              className: "admin-bar__tool-svg"
            })}{" "}
            Page-Settings
          </div>
          {/*<div className="admin-bar__tool">*/}
            {/*{iconsManager.renderIcon('admin-bar3', {className: "admin-bar__tool-svg"})} Clear Cache*/}
          {/*</div>*/}
          <div className="admin-bar__search-bar" ref={this.searchContentResult}>
            {this.state.visibleContentResult && (
              <div className="admin-bar__search-result">
                <div
                  className="admin-bar__search-content"
                  style={this.state.isHttps ? { paddingBottom: "22px" } : {}}
                >
                  {this.state.contentResult}
                </div>
                { this.state.isHttps && (
                  <div
                    className="admin-bar__search-button"
                    onClick={this.handleClickCopy}
                  >
                    copy result {iconsManager.renderIcon("copy-icon")}
                  </div>
                )}
              </div> 
            )}
            <input 
              className="admin-bar__search"
              value={this.state.valueInput}
              onChange={this.handleInput}
              onKeyDown={this.handleKeyDown}
              placeholder="source"
            />
            <button
              className="admin-bar__button"
              onClick={this.handleClickSearch}
              onDoubleClick={this.handleDoubleClickSearch}
            >
              test
            </button>
          </div>
        </div>
        <div className="admin-bar__profile">
          Hello, 
          {this.props.data.name ? this.props.data.name : this.props.data.email} 
          {iconsManager.renderIcon("admin-bar4", {
            className: "admin-bar__profile-svg"
          })}
        </div>
      </div>
    );
  }
}

export default AdminBar;