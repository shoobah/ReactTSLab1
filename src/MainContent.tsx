import * as React from 'react';
import Paper from 'material-ui/Paper';

interface MainContentProps {}

const MainContent: React.SFC<MainContentProps> = props => {
  return (
    <Paper zDepth={2} style={{ minHeight: '200px' }}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam vitae numquam perspiciatis eius magni
        molestiae natus voluptate amet qui. Quam, consectetur voluptatum aut dolore distinctio iste voluptatibus
        dolorum. Ipsa.
      </div>
    </Paper>
  );
};

export default MainContent;
