import * as React from 'react';
import { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconAlarm from 'material-ui/svg-icons/action/alarm';
import IconBackup from 'material-ui/svg-icons/action/backup';

const recentsIcon = <IconAlarm />;
const favoritesIcon = <IconBackup />;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0
  };

  select = (index: number) => this.setState({ selectedIndex: index });

  render() {
    return (
      <Paper zDepth={2}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem label="Ole" icon={recentsIcon} onClick={() => this.select(0)} />
          <BottomNavigationItem label="Dole" icon={favoritesIcon} onClick={() => this.select(1)} />
          <BottomNavigationItem label="Doff" icon={nearbyIcon} onClick={() => this.select(2)} />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
