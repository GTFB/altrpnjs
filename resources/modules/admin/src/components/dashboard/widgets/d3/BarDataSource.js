import {
      BarChart,
      BarSeries,
      Bar,
      Gradient,
      GradientStop,
      DiscreteLegend,
      DiscreteLegendEntry,
      LinearXAxis,
      LinearYAxis,
      LinearYAxisTickSeries

} from "reaviz";

class BarDataSource extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  data: props.data
            };
      }


      render() {
            return (
                  <BarChart
                        data={this.state.data}
                  />
            );
      }
}

export default BarDataSource;