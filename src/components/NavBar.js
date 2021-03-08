import React from 'react'
import {Link} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className="my-nav">
    <BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} href="/"/>
    <BottomNavigationAction label="About" value="nearby" icon={<InfoIcon />} href="/about" />
    <BottomNavigationAction label="Log In" value="folder" icon={<VpnKeyIcon />} href="/login" />
    </BottomNavigation>

  );
}