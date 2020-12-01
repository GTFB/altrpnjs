import React, { useState, useEffect, useCallback } from "react";

import Spinner from "./Spinner";
import EmptyWidget from "./EmptyWidget";

import { ResponsiveBar } from "@nivo/bar";

import { getWidgetData } from "../services/getWidgetData";

const DynamicBarChart = ({
  widget,
  width = 300,
  height = 450,
  dataSource = [],
  groupMode = "stacked",
  layout = "vertical",
  colorScheme = "red_grey",
  reverse = false,
  enableLabel = false,
  padding = 0.1,
  innerPadding = 0,
  borderRadius = 0,
  borderWidth = 0
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    setIsLoading(true);
    if (dataSource.length == 0) {
      const charts = await getWidgetData(widget.source, widget.filter);
      if (charts.status === 200) {
        let data = charts.data.data;
        switch (Number(widget.options.sort)) {
          case 0:
            data = charts.data.data;
            break;
          case 1:
            data = _.sortBy(data, "key");
            break;
          case 2:
            data = _.sortBy(data, "data");
            break;
          default:
            data = charts.data.data;
            break;
        }
        setData(data || []);
        setIsLoading(false);
      }
    } else {
      setData(dataSource || []);
      setIsLoading(false);
    }
  }, [widget]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) return <Spinner />;

  if (data.length === 0) return <EmptyWidget />;

  return (
    <>
      <div style={{ height: `${height}px` }}>
        <ResponsiveBar
          data={data}
          margin={{ top: 50, right: 180, bottom: 50, left: 60 }}
          indexBy="key"
          colors={{ scheme: colorScheme.toString() }}
          colorBy="index"
          layout={layout}
          enableLabel={enableLabel}
          reverse={reverse}
          groupMode={groupMode}
          padding={padding}
          innerPadding={innerPadding}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "key",
            legendOffset: 32
          }}
        />
      </div>
    </>
  );
};

export default DynamicBarChart;
