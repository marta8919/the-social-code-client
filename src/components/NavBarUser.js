import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });

export default function NavBarUser() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link to="/board"><BottomNavigationAction label="Board" value="board" icon={<DashboardIcon />} /></Link>
        <Link to="/profile/messages"><BottomNavigationAction label="Messages" value="message" icon={<EmailIcon />} /></Link>
        <Link to="/new-post"><BottomNavigationAction label="Write a post" value="post" icon={<KeyboardIcon />} /></Link>
        <Link to="/profile"><BottomNavigationAction label="Profile" value="profile" icon={<EmojiPeopleIcon />} /></Link>
      </BottomNavigation>
    );
}
