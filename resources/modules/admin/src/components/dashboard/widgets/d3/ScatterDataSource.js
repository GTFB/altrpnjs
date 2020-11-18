import React, { Component } from "react";
import { customStyle } from "../../widgetTypes";
import format from "date-fns/format";
import {
  ScatterPlot,
  ChartZoomPan,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  DiscreteLegend,
  DiscreteLegendEntry,
  TooltipArea
} from "reaviz";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import ru from "date-fns/locale/ru";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import DataAdapter from "../../../../../../editor/src/js/components/altrp-dashboards/helpers/DataAdapter";

const mapStateToProps = state => {
  return { formsStore: state.formsStore };
};

class ScatterDataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      legend: props.element.settings.legend,
      color: props.element.settings.color,
      params: props.element.settings.params,
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
      await this.getData();
    }
  }

  async componentWillMount() {
    await this.getData();
  }

  async getData() {
    let globalParams = _.cloneDeep(this.props.formsStore.form_data, []);
    let globalParamsArray = _.keys(globalParams).map(param => {
      return { [param]: globalParams[param] };
    });
    let localParams = _.cloneDeep(this.state.params, []);
    let paramsResult = localParams.concat(globalParamsArray);
    if (typeof this.props.element.settings.source.path !== "undefined") {
      let data = await new DataAdapter().adaptDataByPath(
        this.state.source.path,
        this.state.source.key,
        this.state.source.data
      );
      if (_.keys(this.state.params).length > 0) {
        data = await new DataAdapter().adaptDataByPath(
          this.state.source.path,
          this.state.source.key,
          this.state.source.data,
          paramsResult
        );
      }
      this.setState(s => ({ ...s, data: data }));
    }
  }

  formattingDate(data) {
    //  Первая дата
    const firstDate = data.slice().shift();
    // Последняя дата
    const lastDate = data.slice().pop();
    // Разница между датами в месяцах
    const diff = parseInt(
      formatDistanceStrict(firstDate.key, lastDate.key, {
        unit: "month"
      })
    );

    if (diff >= 0 && diff <= 12) {
      return format(data, "d MMM", { locale: ru });
    } else {
      return format(data, "d MMM yy", { locale: ru });
    }
  }

  renderLegend(data) {
    let customColors = _.keys(this.state.color).length > 0;
    let legend = data.map((item, key) => {
      return (
        <DiscreteLegendEntry
          key={key}
          className="discrete__legend-item"
          label={`${item.key} (${item.data})`}
          color={customStyle[item.key % customStyle.length] || "#606060"}
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
            color={this.state.color[item.key] || "#606060"}
          />
        );
      });
    }

    return legend;
  }

  render() {
    if (Object.keys(this.state.source).length === 0) {
      return <div>Нет данных </div>;
    }

    if (
      typeof this.state.data !== "undefined" &&
      this.state.data.length === 0
    ) {
      return <div>Нет данных</div>;
    }

    return (
      <>
        <ScatterPlot data={this.state.data}></ScatterPlot>

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
}

export default connect(mapStateToProps)(ScatterDataSource);