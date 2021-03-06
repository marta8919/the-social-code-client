import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EventIcon from '@material-ui/icons/Event';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import DashboardIcon from '@material-ui/icons/Dashboard';


export default function NavBarUser() {
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className="my-nav">
        <BottomNavigationAction label="Board" value="board" icon={<DashboardIcon />} href="/board" className="my-navbar-icon"/>
        <BottomNavigationAction label="Events" value="event" icon={<EventIcon />} href="/new-event" />
        <BottomNavigationAction label="Write a post" value="post" icon={<KeyboardIcon />} href="/new-post" />
        <BottomNavigationAction label="Profile" value="profile" icon={<EmojiPeopleIcon />} href="/profile" className="my-navbar-icon-profile"/>
      </BottomNavigation>
    );
}
