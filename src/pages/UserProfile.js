import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Fade from "react-reveal/Fade";
import CardActions from "@material-ui/core/CardActions";
import { StylesProvider } from "@material-ui/core/styles";
import { Popover } from "@varld/popover";

export default function UserProfile(props) {
  const [singleUser, setUser] = useState({});
  const [publishedVisible, setVisible] = useState("posts");
  const [userPost, setUserPost] = useState([]);
  const [userEvent, setUserEvent] = useState([]);

  useEffect(() => {
    let userId = props.match.params.userId;

    axios
      .get(`${config.API_URL}/user/${userId}`, { withCredentials: true })
      .then((response) => setUser(response.data))
      .catch((err) => console.log("not working"));

    axios
      .get(`${config.API_URL}/user/getpost/${userId}`, {
        withCredentials: true,
      })
      .then((response) => setUserPost(response.data))
      .catch(() => console.log("get user post not working"));

    axios
      .get(`${config.API_URL}/user/getevent/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserEvent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleEvents = () => {
    setVisible("events");
  };

  return (
    <StylesProvider>
      <div className="container">
        <Link to="/about">
          <img
            className="logo"
            src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png"
          />
        </Link>
        <h1 className="header">User profile</h1>
        <Card className="profile-card">
          <img
            src={singleUser.picture}
            alt="user"
            className="profile-pic"
          ></img>
          <div className="text-card">
            <p>
              <strong>@{singleUser.username}</strong>
            </p>
            <p>
              <strong>City: </strong> {singleUser.city}
            </p>
            <p>
              <strong>Country: </strong> {singleUser.country}
            </p>
            <p>
              <strong>Hobbies: </strong> {singleUser.hobbies}
            </p>
            <p>
              <strong>Intro: </strong> {singleUser.intro}
            </p>
            {/* <p>
                    <strong>Part of TSC since {singleUser.dateRegistered}</strong></p> */}
          </div>
        </Card>

        <div className="group-btn">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button className="my-btn" onClick={handlePosts}>
              Posts
            </Button>
            <Button className="my-btn" onClick={handleEvents}>
              Events
            </Button>
          </ButtonGroup>
        </div>

        {publishedVisible === "posts"
          ? userPost.map((singlePost) => {
              return (
                <Fade bottom>
                  <div className="container">
                    <Card className="board-event-card" key={singlePost._id}>
                      <div className="post-text">
                        <Typography
                          variant="body2"
                          component="p"
                          className="text-dark"
                        >
                          {singlePost.description}
                          <br />
                        </Typography>
                        <div className="post-screenshot">
                          {singlePost.picture != "" ? (
                            <Popover
                              popover={({ visible, open, close }) => {
                                return (
                                  <img
                                    className="post-picture-details"
                                    src={singlePost.picture}
                                    alt="Post_pic"
                                  />
                                );
                              }}
                            >
                              <img
                                className="post-picture"
                                src={singlePost.picture}
                                alt="Post_pic"
                              />
                            </Popover>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="board-vote-date">
                        <Typography
                          variant="body2"
                          component="p"
                          className="my-tags text-dark"
                        >
                          #{singlePost.tags}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className="text-dark"
                        >
                          {singlePost.dateString}
                        </Typography>
                      </div>
                    </Card>
                  </div>
                </Fade>
              );
            })
          : userEvent.map((singleEvent) => {
              return (
                <div className="container" key={singleEvent._id}>
                  <Card className="board-event-card">
                    <h4>{singleEvent.title}</h4>
                    <p>{singleEvent.description}</p>
                    <p>
                      {singleEvent.dateString}, at {singleEvent.hours}:
                      {singleEvent.minutes}
                    </p>
                    <div className="board-event-bottom">
                      <a href={singleEvent.link}>Link</a>

                      {singleEvent.tags ? (
                        <div className="article-code">
                          <Typography
                            variant="body2"
                            component="p"
                            className="my-tags  text-dark"
                          >
                            # {singleEvent.tags}
                          </Typography>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Card>
                </div>
              );
            })}
      </div>
    </StylesProvider>
  );
}
