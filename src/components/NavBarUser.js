import React, { useState } from "react";

//Material UI
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EventIcon from "@material-ui/icons/Event";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StylesProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";

export default function NavBarUser(props) {
  const [value, setValue] = useState("recents");
  const { user } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StylesProvider>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className="my-nav"
      >
        <BottomNavigationAction
          label="Board"
          value="board"
          icon={<DashboardIcon />}
          href="/board"
          className="my-navbar-icon first-icon"
        />
        <BottomNavigationAction
          label="Events"
          value="event"
          icon={<EventIcon />}
          href="/new-event"
          className="my-navbar-icon"
        />
        <BottomNavigationAction
          label="Write a post"
          value="post"
          icon={<KeyboardIcon />}
          href="/new-post"
          className="my-navbar-icon"
        />
        {user ? (
          <a
            className="MuiButtonBase-root MuiBottomNavigationAction-root my-navbar-icon MuiBottomNavigationAction-iconOnly"
            href="/profile"
          >
            <span className=".MuiBottomNavigationAction-root MuiBottomNavigationAction-wrapper">
              <img
                src={user.picture}
                alt="userIcon"
                className="profile-pic navBar-pic"
              />
              <span className="MuiBottomNavigationAction-label MuiBottomNavigationAction-iconOnly"></span>
            </span>
          </a>
        ) : (
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<CircularProgress />}
            href="/profile"
            className="my-navbar-icon-profile"
          />
        )}
      </BottomNavigation>
    </StylesProvider>
  );
}
