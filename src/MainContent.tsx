import * as React from 'react';
import Paper from 'material-ui/Paper';
import MyChart from './MyChart';

interface MainContentProps {}

const MainContent: React.SFC<MainContentProps> = props => {
  return (
    <Paper zDepth={2} style={{ minHeight: '200px' }}>
      <div>
        <MyChart
          data={{
            columns: [['data1', 30, 200, 10, 400, 150, 250], ['data2', 50, 20, 250, 40, 15, 25]]
          }}
        />
      </div>
    </Paper>
  );
};

export default MainContent;
