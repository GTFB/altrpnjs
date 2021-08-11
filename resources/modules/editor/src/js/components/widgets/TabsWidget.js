const {
  TemplateLoader,
  renderAssetIcon,
} = window.altrpHelpers;
const {Tab, Tabs} = window.altrpLibs.Blueprint;
(window.globalDefaults = window.globalDefaults || []).push(`

.altrp-tab-btn-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.altrp-tab-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.altrp-tab-btn p {
  margin: 0;
  white-space: nowrap;
}

.altrp-tab-btn-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.altrp-tabs-left {
  display: flex;
  flex-direction: row;
}

.altrp-tabs-left .altrp-tab-btn-container {
  display: flex;
  flex-direction: column;
}

.altrp-tabs-right {
  display: flex;
  flex-direction: row;
}

.altrp-tabs-right .altrp-tab-btn-container {
  margin-left: auto;
  display: flex;
  flex-direction: column;
}

.altrp-tab-btn-column:last-child {
  margin-right: 0px !important;
}

.altrp-tab-btn-row:last-child {
  margin-bottom: 0px !important;
}

  .bp3-tab-indicator-wrapper {
    z-index: 9999
  }

  .altrp-tab-vertical p {
   margin: 0;
  }

  .altrp-tab-vertical.altrp-tab-btn.altrp-tab-btn.altrp-tab-btn:last-child {
   margin-bottom: 0;
  }

  .altrp-tab-horizontal.altrp-tab-btn.altrp-tab-btn.altrp-tab-btn:last-child {
   margin-right: 0;
  }

  .altrp-tab {
    width: 100%;
    display: block;
  }
`)

class TabsWidget extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.showTab = this.showTab.bind(this);
    this.blueprintShow = this.blueprintShow.bind(this);
    this.state = {
      settings: props.element.getSettings(),
      selected: "tab-1"
    };
    props.element.component = this;
    if (window.elementDecorator) {
      window.elementDecorator(this);
    }
    if (props.baseRender) {
      this.render = props.baseRender(this);
    }
  }

  show(e) {
    let button = e.currentTarget;
    let collectionTabs = button.parentNode.parentNode.getElementsByClassName(
      "altrp-tab-content"
    )[0];
    let currentTab = collectionTabs.children[button.dataset.key];

    for (let i = 0; i < collectionTabs.children.length; i++) {
      collectionTabs.children[i].classList.remove("altrp-tab-show");
      e.currentTarget.parentNode.children[i].classList.remove("active");
    }
    currentTab.classList.add("altrp-tab-show");
    // e.currentTarget.classList.add("active");
    this.setState(state => ({
      ...state,
      activeTab: Number(button.dataset.key) || 0
    }));
  }

  blueprintShow(selected) {
    this.setState(s => ({
      ...s,
      selected
    }))
  }

  showTab(tabKey) {
    const dataKey = tabKey;
    const button = document.querySelector(
      "[data-key=" + "'" + dataKey + "'" + "]"
    );
    let collectionTabs = button.parentNode.parentNode.getElementsByClassName(
      "altrp-tab-content"
    )[0];
    let currentTab = collectionTabs.children[button.dataset.key];

    for (let i = 0; i < collectionTabs.children.length; i++) {
      collectionTabs.children[i].classList.remove("altrp-tab-show");
      button.parentNode.children[i].classList.remove("active");
    }
    currentTab.classList.add("altrp-tab-show");
    this.setState(state => ({
      ...state,
      activeTab: Number(button.dataset.key) || 0
    }));
  }

  fireAction(action) {
    const regexp = /\(\s*([^)]+?)\s*\)/;
    let parameter = regexp.exec(action);
    let currentParameter = null;
    if (parameter) {
      currentParameter = parameter[1];
      action = action.replace(regexp, "");
    }

    if (typeof this[action] !== "undefined") {
      if (currentParameter !== null) {
        this[action](currentParameter);
      } else {
        this[action]();
      }
    } else {
      alert("ERROR, NOT FOUND ACTION");
    }
  }

  render() {
    let buttonClasses = "";

    const vertical = this.props.element.getResponsiveSetting("vertical", "", false);
    const animate = this.props.element.getResponsiveSetting("animate");

    let tabs = <div></div>;
    if (this.state.settings.items_tabs) {
      tabs = this.state.settings.items_tabs?.map((tab, idx) => {
        let iconStyles = {};

        if (this.state.settings.alignment_icon_style === "left") {
          iconStyles = {
            paddingRight:
              this.state.settings.spacing_icon_style?.size +
              this.state.settings.spacing_icon_style?.unit
          };
        } else {
          iconStyles = {
            paddingLeft:
              this.state.settings.spacing_icon_style?.size +
              this.state.settings.spacing_icon_style?.unit
          };
        }

        let icon = null;

        if (tab.icon_items) {
          if(!Array.isArray(tab.icon_items)) {
            if(tab.icon_items.url) {
              icon = (
                <div className="altrp-tab-btn-icon" style={iconStyles}>
                  {renderAssetIcon(tab.icon_items, {})}
                </div>
              );
            }
          }
        }
        return (
          <Tab
            id={`tab-${idx + 1}`}
            className={
              "altrp-tab-btn" +
              buttonClasses +
              (this.state.selected === `tab-${idx + 1}` ? " active" : "") +
              (vertical ? " altrp-tab-vertical" : " altrp-tab-horizontal") +
              (this.state.activeTab === idx ? " active" : "")
            }
            panel={(
              <div className={"altrp-tab" + (this.state.selected === `tab-${idx + 1}` ? " active" : "")}>
                {tab.card_template ? (
                  <TemplateLoader templateId={tab.card_template} />
                ) : (
                  tab.wysiwyg_items
                )}
              </div>
            )}
            key={idx + 1}
          >
            {this.state.settings.alignment_icon_style == "left" ? icon : null}
            <p>{tab.title_and_content_items}</p>
            {this.state.settings.alignment_icon_style == "right"
              ? icon
              : null}
          </Tab>
        );
      });
    }
    return <Tabs
      onChange={this.blueprintShow}
      className={"altrp-tabs" +
      (vertical ? " altrp-tabs-vertical" : " altrp-tabs-horizontal") +
      (animate ? "" : " altrp-tabs-without-animation")
      }
      animate={animate}
      renderActiveTabPanelOnly={true}
      selectedTabId={this.state.selected}
      defaultSelectedTabId="tab-1"
      vertical={vertical}
    >
      {
        tabs
      }
    </Tabs>
  }
}

export default TabsWidget;
