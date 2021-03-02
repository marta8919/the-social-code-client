import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

  export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link to="/"><BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} /></Link>
        <Link to="/about"><BottomNavigationAction label="About" value="nearby" icon={<InfoIcon />} /></Link>
        <Link to="/login"><BottomNavigationAction label="Log In" value="folder" icon={<VpnKeyIcon />} /></Link>
      </BottomNavigation>
    );
  }