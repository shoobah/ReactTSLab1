import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyBar from './MyBar';
import BottomNavigationExampleSimple from './BottomNav';
import MainContent from './MainContent';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MyBar title="Rubrikrad" />
          <MainContent />
          <BottomNavigationExampleSimple />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
