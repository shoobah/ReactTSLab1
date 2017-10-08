import * as React from 'react';
import './App.css';
import '../node_modules/c3/c3.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyBar from './components/MyBar';
import BottomNavigationExampleSimple from './components/BottomNav';
import MainContent from './components/MainContent';

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
