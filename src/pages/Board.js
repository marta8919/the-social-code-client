import { React, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//Components from Material UI
import { StylesProvider } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

//Internal files
import BoardPost from "../components/BoardPost";
import BoardEvent from "../components/BoardEvent";
import axios from 'axios'
import config from '../config.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    padding: 10,
    maxWidth: 500,
    display: "flex",
  },
});

export default function Board(props) {  
  const classes = useStyles();
  const { user } = props;

  const [error, setError] = useState(null)
  const [allPost, setPost] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [publishedVisible, setVisible] = useState("posts");

  useEffect(()=>{
      getBoardPost();
      getBoardEvent();
  }, []);

  const getBoardPost = ()=>{
    axios.get(`${config.API_URL}/board/posts`, {withCredentials:true})
    .then((response)=>{
      setPost(response.data)
    })
    .catch((err) => setError(err.response.data))
  }

  const getBoardEvent = ()=>{
    axios.get(`${config.API_URL}/board/events`, {withCredentials:true})
    .then((response)=>{
      setAllEvents(response.data)
    })
    .catch((err) => setError(err.response.data))
  }

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleEvents = () => {
    setVisible("events");
  };

  if (!user) {
    return <LinearProgress />;
  } else if (user === "NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  return (
    <StylesProvider>
      <div classes="container">
        <h1 className="header">Board</h1>
        <div className="group-btn">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={handlePosts}>Posts</Button>
            <Button onClick={handleEvents}>Events</Button>
          </ButtonGroup>
        </div>
        {publishedVisible === "posts" ? (
          allPost.map((singlePost) => {
            return (
              <BoardPost
                key={singlePost._id}
                user={singlePost.userId}
                description={singlePost.description}
              />
            );
          })
        ) : (
          allEvents.map((singleEvent) => {
            return (
              <BoardEvent
                key={singleEvent._id}
                event={singleEvent}
              />
            );
          })
        )}
      </div>
    </StylesProvider>
  );
}
