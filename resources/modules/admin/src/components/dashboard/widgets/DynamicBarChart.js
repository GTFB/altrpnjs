import React, { useState, useEffect, useCallback } from "react";
import {
  BarChart,
  BarSeries,
  Bar,
  Gradient,
  GradientStop,
  DiscreteLegend,
  DiscreteLegendEntry,
} from "reaviz";

import Spinner from "./Spinner";
import EmptyWidget from "./EmptyWidget";

import { getWidgetData } from "../services/getWidgetData";
import { customStyle } from "../widgetTypes";

const DynamicBarChart = ({ widget, width = 300, height = 300, dataSource = [] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    setIsLoading(true);
    if (dataSource.length == 0) {
      const charts = await getWidgetData(widget.source, widget.filter);
      if (charts.status === 200) {
        setData(charts.data.data || []);
        setIsLoading(false);
      }
    }
    else {
      setData(dataSource || []);
      setIsLoading(false);
    }
  }, [widget]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) return <Spinner />;

  if (data.length === 0) return <EmptyWidget />;

  // Формируем легенду
  const entries = data.map((item, i) => {
    return (
      <DiscreteLegendEntry
        key={i}
        className="discrete__legend-item"
        label={`${item.key} (${item.data})`}
        color={customStyle[i] || "#606060"}
      />
    );
  });

  return (
    <>
      <BarChart
        height={height}
        // width={width}
        data={data}
        series={
          <BarSeries
            colorScheme={
              widget.options.colorScheme === "Custom" ? customStyle : widget.options.colorScheme
            }
            bar={<Bar gradient={<Gradient stops={[<GradientStop stopOpacity={1} />]} />} />}
            animated={widget.options.animated}
          />
        }
      />
      {widget.options?.legend && (
        <DiscreteLegend
          className="discrete__legend"
          orientation={widget.options.legend}
          entries={entries}
        />
      )}
    </>
  );
};

export default DynamicBarChart;
