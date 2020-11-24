import React, { Component } from "react";
import {
  BarChart,
  BarSeries,
  Bar,
  Gradient,
  GradientStop,
  DiscreteLegend,
  DiscreteLegendEntry
} from "reaviz";
import { customStyle } from "../../widgetTypes";
import { connect } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import DataAdapter from "./DataAdapter";

const mapStateToProps = state => {
  return { formsStore: state.formsStore };
};
class BarDataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: props.sources,
      legend: props.element.settings.legend,
      color: props.element.settings.color,
      params: props.element.settings.params,
      countRequest: 0,
      isMultiple: false,
      data: []
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.source, this.props.source)) {
      this.setState(state => ({ ...state, source: this.props.source }));
    }
    if (!_.isEqual(prevProps.element, this.props.element)) {
      this.setState(state => ({
        ...state,
        legend: this.props.element.settings.legend,
        color: this.props.element.settings.color,
        params: this.props.element.settings.params
      }));
      await this.getData();
    }
    if (
      JSON.stringify(prevState.params) !==
      JSON.stringify(this.props.element.settings.params)
    ) {
      this.setState(state => ({
        ...state,
        params: this.props.element.settings.params
      }));
      await this.getData();
    }
    if (
      !_.isEqual(
        prevProps.formsStore.form_data,
        this.props.formsStore.form_data
      )
    ) {
      this.setState(state => ({
        ...state,
        countRequest: 0
      }));
      await this.getData();
    }
  }

  async componentWillMount() {
    await this.getData();
  }

  async getData() {
    const {
      data,
      isMultiple,
      isDate,
      needCallAgain
    } = await new DataAdapter().parseData(
      this.props.element.settings.sources,
      this.props.formsStore.form_data,
      this.state.params,
      this.state.countRequest
    );
    if (needCallAgain) {
      setTimeout(() => {
        this.getData();
        let count = this.state.countRequest;
        count += 1;
        this.setState(s => ({ ...s, countRequest: count }));
      }, 3500);
    }
    this.setState(s => ({
      ...s,
      data: data,
      isMultiple: isMultiple,
      isDate: isDate
    }));
  }

  formattingDate(data) {
    return new Date(data).toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  renderLegend(data) {
    const customColors = _.keys(this.state.color).length > 0;
    let legend = data.map((item, key) => {
      return (
        <DiscreteLegendEntry
          key={key}
          className="discrete__legend-item"
          label={`${item.key}`}
          color={customStyle[key % customStyle.length] || "#606060"}
        />
      );
    });
    if (customColors) {
      legend = data.map((item, key) => {
        return (
          <DiscreteLegendEntry
            key={key}
            className="discrete__legend-item"
            label={`${item.key} (${item.data})`}
            color={this.state.color[key] || "#606060"}
          />
        );
      });
    }

    return legend;
  }

  render() {
    if (
      this.state.source === null &&
      Object.keys(this.state.sources).length === 0
    ) {
      return <div>Нет данных</div>;
    }
    if (this.state.isMultiple) {
      return <div>Укажите только один источник данных</div>;
    } else {
      if (this.state.data.length > 101) {
        return (
          <div>
            Для стабильной работы виджета, ограничьте диапозон данных и выберите
            источник данных заново
          </div>
        );
      }
    }

    if (typeof this.state.data !== "undefined" && this.state.data.length > 0) {
      const customColors = _.keys(this.state.color).length > 0;
      return (
        <>
          <div className="chart-content-container">
            <ErrorBoundary>
              <BarChart
                data={this.state.data}
                series={
                  <BarSeries
                    colorScheme={
                      customColors
                        ? (_data, index) => {
                            return (
                              this.state.color[_data.key] ||
                              customStyle[index % customStyle.length]
                            );
                          }
                        : customStyle
                    }
                    bar={
                      <Bar
                        gradient={
                          <Gradient
                            stops={[<GradientStop stopOpacity={1} />]}
                          />
                        }
                      />
                    }
                  />
                }
              />
            </ErrorBoundary>
          </div>
          {this.state.legend.enabled && (
            <DiscreteLegend
              className={`discrete__legend  ${this.props.element.settings.legend
                .side || ""}`}
              orientation={this.state.legend.side}
              entries={this.renderLegend(this.state.data)}
            />
          )}
        </>
      );
    }

    if (this.state.countRequest < 5) {
      return <div>Загрузка...</div>;
    }
    return <div>Нет данных</div>;
  }
}

export default connect(mapStateToProps)(BarDataSource);
