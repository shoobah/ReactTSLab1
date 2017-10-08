import * as React from 'react';
import Paper from 'material-ui/Paper';
import MyChart from './MyChart';
import RandomData from '../helpers/RandomData';

interface MainContentProps {}
interface MainContentState {
  chartData: {};
}

class MainContent extends React.Component<MainContentProps, MainContentState> {
  state = {
    chartData: {}
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Paper zDepth={2} style={{ minHeight: '200px' }}>
        <div>
          <button onClick={this.getData}>"Randomize data"</button>
          <MyChart data={this.state.chartData} />
        </div>
      </Paper>
    );
  }

  private getData = () => {
    const rnd = new RandomData();
    let d = [];
    for (let i = 0; i < 5; i++) {
      d.push(rnd.getRandomData());
    }
    this.setState({
      chartData: {
        columns: d,
        type: 'spline',
        unload: true
      }
    });
  };
}

export default MainContent;
