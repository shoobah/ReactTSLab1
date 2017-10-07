import * as React from 'react';
import Paper from 'material-ui/Paper';
import MyChart from './MyChart';
import RandomData from './RandomData';

interface MainContentProps {}
const rnd = new RandomData();
const getData = () => {
  let d = [];
  for (let i = 0; i < 5; i++) {
    d.push(rnd.getRandomData());
  }
  return { columns: d };
};

const MainContent: React.SFC<MainContentProps> = props => {
  return (
    <Paper zDepth={2} style={{ minHeight: '200px' }}>
      <div>
        <MyChart data={getData()} />
      </div>
    </Paper>
  );
};

export default MainContent;
