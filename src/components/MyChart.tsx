import * as React from 'react';
import Paper from 'material-ui/Paper';
import * as C3 from 'c3';

interface MyChartProps {
  data: {};
}

interface MyChartState {}

class MyChart extends React.Component<MyChartProps, MyChartState> {
  chart: C3.ChartAPI;

  componentDidMount() {
    if (Object.keys(this.props.data).length === 0 && this.props.data.constructor === Object) {
      return;
    }
    this.generate(this.props.data);
  }

  componentWillReceiveProps(nextProps: MyChartProps) {
    if (nextProps.data !== this.props.data) {
      if (!this.chart) {
        this.generate(nextProps.data);
      }
      this.chart.load(nextProps.data);
    }
  }

  render() {
    return (
      <Paper>
        <div id="chart" />
      </Paper>
    );
  }

  private generate(data: {}) {
    this.chart = C3.generate({
      bindto: '#chart',
      data: data
    });
  }
}

export default MyChart;
