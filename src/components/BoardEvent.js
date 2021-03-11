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

function BoardEvent(props) {
  const { event, user , handleRegister, handleUnsubscribe, checkedRegister} = props;
  const [register, setCheck]= useState(false)

  useEffect(() => {
    let presentUsers = event.registeredUsers.filter(u => u._id === user._id)
    if (presentUsers.length > 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);

  const handleFunction = () => {
    if (checkedRegister) {
      handleUnsubscribe(event._id);
      setCheck(false)
    } else {
      handleRegister(event._id);
      setCheck(true)
    }
  };

  return (
    <div className="container">
      <Fade bottom>
        <Card className="my-card">
          <CardContent>
            <Typography variant="h5" component="h2" className="text-dark">
              {event.title}
            </Typography>
            <Typography variant="body2" component="p" className="text-dark">
              {event.description}
            </Typography>
            <Typography variant="body2" component="p" className="text-dark">
              Date: {event.dateString}, at {event.hours}:{event.minutes}
            </Typography>
            <CardActions>
              <a href="{event.link}">Link to the event</a>
              <span>
                <Typography variant="body2" component="p" className="text-dark">
                  Check to register!
                </Typography>
                <Checkbox
                  checked={register}
                  inputProps={{ "aria-label": "Like" }}
                  onClick={handleFunction}
                />
              </span>
            </CardActions>
            {event.tags ? (
                <Typography variant="body2" component="p" className="my-tags text-dark">
                  #{event.tags}
                </Typography> 
            ) : (
              ""
            )}

          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

export default BoardEvent;
