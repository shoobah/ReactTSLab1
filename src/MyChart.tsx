import * as React from 'react';
import Paper from 'material-ui/Paper';
import * as C3 from 'c3';

interface MyChartProps {
  data: C3.Data;
}

interface MyChartState {}

class MyChart extends React.Component<MyChartProps, MyChartState> {
  chart: C3.ChartAPI;

  componentDidMount() {
    this.chart = C3.generate({
      bindto: '#chart',
      data: this.props.data
    });
  }

  render() {
    return (
      <Paper>
        <div id="chart" />
      </Paper>
    );
  }
}

export default MyChart;
