import axios from "axios";
import config from "../config";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";

import { Popover } from "@varld/popover";

export default function EventDetails(props) {
  const { popEvent } = props;
  const [singleEvent, setEvent] = useState({});

  useEffect(() => {
    setEvent(popEvent);
  }, []);

  return (
    <Popover
      popover={({ visible, open, close }) => {
        return (
          <div className="container">
            <Link to="/about">
              <img className="logo" src="../images/logo.png" />
            </Link>
            <div className="header">
              <h1>Hello</h1>
              <h3>Event Details </h3>
              {!singleEvent ? (
                <LinearProgress />
              ) : (
                <div>
                  <label>Title</label>
                  <TextField
                    className="my-inputfield text-black"
                    name="title"
                    type="text"
                    variant="filled"
                    value={singleEvent.title}
                  />

                  <label>Description</label>
                  <TextField
                    className="my-inputfield"
                    name="description"
                    type="text"
                    variant="filled"
                    value={singleEvent.description}
                  />

                  <label>Tags</label>
                  <TextField
                    className="my-inputfield"
                    name="description"
                    type="text"
                    variant="filled"
                    value={singleEvent.description}
                  />
                  <label>Link</label>
                  <TextField
                    className="my-inputfield"
                    name="link"
                    type="text"
                    variant="filled"
                    value={singleEvent.link}
                  />

                  <label>Registered Users</label>
                  {/* {singleEvent.registeredUsers.map(user => {
                    return (<TextField
                    className="my-inputfield"
                    name="link"
                    type="text"
                    variant="filled"
                    value={user.username}
                  />)
                  })} */}
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="my-btn"
                    onClick={() => close()}
                  >
                    Back to your profile
                  </Button>
                </div>
              )}
            </div>
          </div>
        );
      }}
    >
      <Link>See registered users</Link>
    </Popover>
  );
}
