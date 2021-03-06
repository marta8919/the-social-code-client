import { React, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import Card from "@material-ui/core/Card";
import {
  CardActions,
  CardContent,
  Typography,
  Checkbox,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { StylesProvider } from "@material-ui/core/styles";

function BoardEvent(props) {
  const {
    event,
    user,
    handleRegister,
    handleUnsubscribe,
  } = props;
  const [register, setCheckRegister] = useState(false);

  useEffect(() => {
    let presentUsers = event.registeredUsers.filter((u) => u._id === user._id);
    if (presentUsers.length > 0) {
      setCheckRegister(true);
    } else {
      setCheckRegister(false);
    }
  }, []);


  // useEffect(() => {
  //   console.log(register)
  //   if (register) {
  //     handleUnsubscribe(event._id);
  //   } 
  //   else {
  //     handleRegister(event._id);
  //   }
  // }, [register])

  const handleFunction = () => {
    if (register) {
      setCheckRegister(false);
      handleUnsubscribe(event._id);
    } 
    else {
      setCheckRegister(true);
      handleRegister(event._id);
    }
  };

  return (
    <StylesProvider>
      <div className="container">
        <Fade bottom>
          <Card className="board-event-card">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>
              Date: {event.dateString}, at {event.hours}:{event.minutes}
            </p>

            <div className="board-event-bottom">
              <a href={event.link}>Link</a>

              {event.tags ? (
                <div className="article-code">
                  <Typography
                    variant="body2"
                    component="p"
                    className="my-tags  text-dark"
                  >
                    # {event.tags}
                  </Typography>
                </div>
              ) : (
                ""
              )}
              <span>
                Check to register!
                <Checkbox
                  checked={register}
                  inputProps={{ "aria-label": "Like" }}
                  onClick={handleFunction}
                />
              </span>
            </div>
          </Card>
        </Fade>
      </div>
    </StylesProvider>
  );
}

export default BoardEvent;
