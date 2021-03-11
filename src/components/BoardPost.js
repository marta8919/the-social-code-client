import { React, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import {
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import Fade from "react-reveal/Fade";
import { Popover } from "@varld/popover";

function BoardPost(props) {
  const { post, user } = props;
  const [checkedLike, setCheck] = useState(false);

  useEffect(() => {
    if (post.userLikes.includes(user._id)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);

  const handleFunction = () => {
    if (checkedLike) {
      handleUnlike(post._id);
    } else {
      handleLike(post._id);
    }
  };

  const handleLike = (postId) => {
    axios.defaults.withCredentials = true;
    axios
      .post(`${config.API_URL}/post/like/${postId}`, { withCredentials: true })
      .then(() => {
        setCheck(true);
      })
      .catch((err) => console.log(err));
  };

  const handleUnlike = (postId) => {
    axios.defaults.withCredentials = true;
    axios
      .post(`${config.API_URL}/post/unlike/${postId}`, {
        withCredentials: true,
      })
      .then(() => {
        setCheck(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StylesProvider>
      <Fade bottom>
        <Card className="board-card">
            <div className="pic-name-board">
            <a href={`user/${post.userId._id}`} className="board-pic-post">
              <img
                src={post.userId.picture}
                alt="Profile"
                className="board-pic"
              />
              </a>
              <a href={`user/${post.userId._id}`} className="small-link">
                @{post.userId.username}
              </a>
            </div>
            <div className="post-text">
              <Typography variant="body2" component="p" className="text-dark">
                {post.description}
              </Typography>
              <div className="post-screenshot">
              {post.picture != "" ? (
                <Popover
                  popover={({ visible, open, close }) => {
                    return (
                      <img
                        className="post-picture-details"
                        src={post.picture}
                        alt="Post_pic"
                      />
                      
                    );
                  }}
                >
                  <img
                    className="post-picture"
                    src={post.picture}
                    alt="Post_pic"
                  />
                </Popover>
              ) : (
                ""
              )}
              </div>
              </div>
              <div className="board-vote-date">
              <Typography variant="body2" component="p" className="my-tags text-dark">
                {post.tags}
              </Typography>
              <Typography variant="body2" component="p" className="text-dark">
                {post.dateString}
              </Typography>
              <CardActions disableSpacing>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checked={checkedLike}
                  checkedIcon={<Favorite />}
                  inputProps={{ "aria-label": "Like" }}
                  onClick={handleFunction}
                />
              </CardActions>
              </div>
            
          
        </Card>
      </Fade>
    </StylesProvider>
  );
}

export default BoardPost;
