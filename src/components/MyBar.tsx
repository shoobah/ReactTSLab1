import * as React from 'react';
import AppBar from 'material-ui/AppBar';

interface MyBarProps {
  title: string;
}

const MyBar: React.SFC<MyBarProps> = props => {
  return <AppBar title={props.title} iconClassNameRight="muidocs-icon-navigation-expand-more" />;
};

export default MyBar;
