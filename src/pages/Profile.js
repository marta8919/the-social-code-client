import { React, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import axios from "axios";
import config from "../config";

import { LinearProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Fade from "react-reveal/Fade";
import EventDetails from "../components/EventDetails";

function Profile(props) {
  const [userPost, setUserPost] = useState([]);
  const [userEvent, setUserEvent] = useState([]);
  const [publishedVisible, setVisible] = useState("posts");

  useEffect(() => {
    axios
      .get(`${config.API_URL}/getpost`, { withCredentials: true })
      .then((response) => {
        setUserPost(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${config.API_URL}/getevent`, { withCredentials: true })
      .then((response) => {
        setUserEvent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeletePost = (postId) => {
    axios
      .delete(`${config.API_URL}/delete/${postId}`)
      .then(() => {
        let filteredPosts = userPost.filter((e) => e._id !== postId);
        //update hook allPost
        setUserPost(filteredPosts);

        //send the user back to the main board
        props.history.push("/board");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteEvent = (eventId) => {
    axios
      .delete(`${config.API_URL}/event/delete/${eventId}`)
      .then(() => {
        let filteredEvents = userEvent.filter((e) => e._id !== eventId);
        //update hook allPost
        setUserEvent(filteredEvents);

        //send the user back to the main board
        props.history.push("/board");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { user, onLogout } = props;

  if (!user) {
    return <LinearProgress />;
  } else if (user === "NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleEvents = () => {
    setVisible("events");
  };

  return (
    <StylesProvider>
    
    <div className="container">
      <Fade bottom>
        <Link to="/about">
          <img className="logo" src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png" alt="Main_Logo"/>
        </Link>
        <div className="header">
          <h1>Hey @{user.username} !</h1>
          <h3>Welcome to your profile </h3>
        </div>
        <Card className="profile-card">
          <div className="image-btn">
            <img src={user.picture} alt="user" className="profile-pic"></img>
            <Link to="/profile/editPic">Edit picture</Link>
          </div>

          <div className="text-card">
            <p>
              <strong>City: </strong> {user.city}
            </p>
            <p>
              <strong>Country: </strong> {user.country}
            </p>
            <p>
              <strong>Hobbies: </strong> {user.hobbies}
            </p>
            <p>
              <strong>Intro: </strong> {user.intro}
            </p>
            <p><strong>Part of TSC since {user.dateString}</strong></p>
          </div>

          <div className="control-btns">
            <Link to="/profile/edit" className="my-link">
              <EditIcon className="my-icon" />
            </Link>
            
            <button className="transparent" onClick={onLogout}>
              <ExitToAppIcon />
            </button>
          </div>
        </Card>
      </Fade>

     
        <h3 className="header">Upcoming events</h3>
        {/* <p>{user.registeredEvents[0].title}</p> */}
        {
          user.registeredEvents.map((singleEvent)=>{
            return (
              <p>{singleEvent.title}</p>
            )
          })
        }

        
      <Fade bottom>
        <div className="group-btn">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button className="my-btn" onClick={handlePosts}>Posts</Button>
            <Button className="my-btn" onClick={handleEvents}>Events</Button>
          </ButtonGroup>
        </div>
      </Fade>

      {publishedVisible === "posts"
        ? userPost.map((singlePost) => {
            return (
              <Fade bottom>
              <Card className="my-card" key={singlePost._id}>
                <CardContent className="post-container">
                  <div>
                  <Typography variant="body2" component="p" className="text-dark">
                    {singlePost.description}
                    <br />
                  </Typography>
                  <Typography variant="body2" component="p" className="text-dark">
                    {singlePost.dateString}
                    <br />
                  </Typography>
                  </div>
                <CardActions disableSpacing>
                  <Button
                    onClick={() => {
                      handleDeletePost(singlePost._id);
                    }}
                    size="small"
                  >
                    pop()
                  </Button>
                </CardActions>
                </CardContent>
              </Card>
              </Fade>
            );
          })
        : userEvent.map((singleEvent) => {
            return (
              <>
              <Card className="my-card" key={singleEvent._id}>
                <CardContent className="post-container">
                  <div className="text-card">
                  {/* <EventDetails popEvent={singleEvent}/> */}
                  <h3>{singleEvent.title}</h3>
                  <Typography variant="body2" component="p">
                    {singleEvent.dateString}, at {singleEvent.hours}:
                    {singleEvent.minutes}
                  </Typography>
                  </div>
                <CardActions className="btn-list-event">
                  <Button
                    onClick={() => {
                      handleDeleteEvent(singleEvent._id);
                    }}
                    size="small"
                  >
                    pop()
                  </Button>
                  <Link
                    to={`event/${singleEvent._id}/edit`}
                    className="my-link"
                  >
                    Edit
                  </Link>
                </CardActions>
                </CardContent>
              </Card>
              </>
            );
          })}
    </div>
    </StylesProvider>
  );
}

export default Profile;
