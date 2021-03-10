import { React, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Fade from "react-reveal/Fade";

//Components from Material UI
import { StylesProvider } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button, TextField } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

//Internal files
import BoardPost from "../components/BoardPost";
import BoardEvent from "../components/BoardEvent";
import axios from "axios";
import config from "../config.js";
import { Style } from "@material-ui/icons";


export default function Board(props) {  
  const { user , handleUnsubscribe, handleRegister , checkedRegister} = props;
  const [error, setError] = useState(null)
  const [allPost, setPost] = useState([])
  const [filteredPosts, setFilterPosts] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [filteredEvents, setFilterEvents] = useState([])
  const [publishedVisible, setVisible] = useState("posts");

  useEffect(() => {
    getBoardPost();
    getBoardEvent();
  }, []);

  const getBoardPost = () => {
    axios
      .get(`${config.API_URL}/board/posts`, { withCredentials: true })
      .then((response) => {
        setPost(response.data);
        setFilterPosts(response.data);
      })
      .catch((err) => setError(err));
  };

  const getBoardEvent = () => {
    axios
      .get(`${config.API_URL}/board/events`, { withCredentials: true })
      .then((response) => {
        setAllEvents(response.data);
        setFilterEvents(response.data);
      })
      .catch((err) => setError(err));
  };

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleEvents = () => {
    setVisible("events");
  };

  const handleSearchPosts = (event) => {
    let filteredPostsResult = allPost.filter((post) => {
      return post.tags.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilterPosts(filteredPostsResult);
  };

  const handleSearchEvents = (event) => {
    let filteredEventsResult = allEvents.filter((e) => {
      return e.tags.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilterEvents(filteredEventsResult);
  };

  if (!user) {
    return <LinearProgress />;
  } else if (user === "NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  return (
    
    <div className="container">
    <StylesProvider>
      <Fade bottom>
        <Link to="/about">
          <img className="logo" src="./images/logo.png" alt="Main_Logo" />
        </Link>

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
          <div>
            <div className="form-center">
              <span className="line-center">
                <SearchIcon />
                <TextField
                  id="outlined-basic"
                  placeholder="Search: react, python, ..."
                  variant="outlined"
                  type="text"
                  onChange={handleSearchPosts}
                  className="my-inputfield"
                />
              </span>
            </div>
            {filteredPosts.length === 0 ? (
              <Fade bottom>
                <div className="container">
                  <img
                    className="myError-img"
                    src="./images/searchError.svg"
                    alt="not_found_search"
                  />
                  <h3>Sorry! Try with a new search!</h3>
                </div>
              </Fade>
            ) : (
              filteredPosts.map((singlePost) => {
                return (
                  <BoardPost
                    key={singlePost._id}
                    post={singlePost}
                    user={user}
                  />
                );
              })
            )}
          </div>
        ) : (
          <div>
            <div className="form-center">
              <span className="line-center">
                <SearchIcon />
                <TextField
                  id="outlined-basic"
                  placeholder="Search: react, python, ..."
                  variant="outlined"
                  type="text"
                  onChange={handleSearchEvents}
                />
              </span>
            </div>
            {filteredEvents.length === 0 ? (
              <Fade bottom>
                <div className="container">
                  <img
                    className="myError-img"
                    src="./images/searchError.svg"
                    alt="not_found_search"
                  />
                  <h3>Sorry! Try with a new search!</h3>
                </div>
              </Fade>
            ) : (
              filteredEvents.map((singleEvent) => {
                const {dateString} = singleEvent
                let dateArr = dateString.split('/')
                let dateToday = new Date()
                let day = Number(dateToday.getDate())
                let month = Number(dateToday.getMonth() + 1)
                let year = Number(dateToday.getFullYear())
                return Number(dateArr[0]) >= day && Number(dateArr[1]) >= month && Number(dateArr[2]) >= year ? (
                  <BoardEvent
                    key={singleEvent._id}
                    event={singleEvent}
                    user={user}
                    handleRegister= {handleRegister}
                    handleUnsubscribe= {handleUnsubscribe}
                    checkedRegister={checkedRegister}
                  />
                ): ""
              })
            )}
          </div>
        )}
      </Fade>
      </StylesProvider>
    </div>
  );
}
