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
  const { event, user } = props;
  const [checkedRegister, setCheck] = useState(false);
  const [countUsers, setCount] = useState(event.registeredUsers.length);

  useEffect(() => {
    if (event.registeredUsers.includes(user._id)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
    setCount(event.registeredUsers.length)
  }, []);

  const handleFunction = () => {
    if (checkedRegister) {
      handleUnsubscribe(event._id);
    } else {
      handleRegister(event._id);
    }
  };

  const handleRegister = (eventId) => {
    console.log("like yeeeey");
    axios.defaults.withCredentials = true;
    axios
      .post(`${config.API_URL}/event/register/${eventId}`, {
        withCredentials: true,
      })
      .then(() => {
        setCheck(true);
        setCount(event.registeredUsers.length);
      })
      .catch((err) => console.log(err));
  };

  const handleUnsubscribe = (eventId) => {
    console.log("unlike no fun");
    axios.defaults.withCredentials = true;
    axios
      .post(`${config.API_URL}/event/unsubscribe/${eventId}`, {
        withCredentials: true,
      })
      .then(() => {
        setCheck(false);
        setCount(event.registeredUsers.length);
      })
      .catch((err) => console.log(err));
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
                  checked={checkedRegister}
                  inputProps={{ "aria-label": "Like" }}
                  onClick={handleFunction}
                />
              </span>
            </CardActions>
            {event.tags ? (
              <div className="article-code">
                <Typography variant="body2" component="p" className="text-dark">
                  Tags: #{event.tags}
                </Typography>
              </div>
            ) : (
              ""
            )}

            {/* <div className="article-code">
              <Typography variant="body2" component="p" className="text-dark">
                {countUsers} registered users to this tech event
              </Typography>
            </div> */}
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

export default BoardEvent;
