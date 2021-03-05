import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EventIcon from '@material-ui/icons/Event';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import DashboardIcon from '@material-ui/icons/Dashboard';


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
        <BottomNavigationAction label="Board" value="board" icon={<DashboardIcon />} href="/board" />
        <BottomNavigationAction label="Events" value="event" icon={<EventIcon />} href="/new-event" />
        <BottomNavigationAction label="Write a post" value="post" icon={<KeyboardIcon />} href="/new-post" />
        <BottomNavigationAction label="Profile" value="profile" icon={<EmojiPeopleIcon />} href="/profile" />
      </BottomNavigation>
    );
}
