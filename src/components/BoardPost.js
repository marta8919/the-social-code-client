import { React, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Link} from 'react-router-dom'
import {
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import Fade from "react-reveal/Fade";

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
<<<<<<< HEAD
      <Card className="my-card">
        <CardContent className="post-container">
          <img
            src={post.userId.picture}
            alt="Profile"
            className="profile-pic"
          />
          <div className="post-text">
            <Typography variant="h5" component="h2" className="text-dark">
              <Link to={`user/${post.userId._id}`}>@{post.userId.username}</Link>
            </Typography>
            <Typography variant="body2" component="p" className="text-dark">
              {post.description}
            </Typography>
            <Typography variant="body2" component="p" className="text-dark">
              {post.dateString}
            </Typography>
            <CardActions disableSpacing>
              {handleCheck()}
              {/* 
              <Checkbox
                icon={<SmsOutlinedIcon />}
                checkedIcon={<SmsIcon />}
                inputProps={{ "aria-label": "Like" }}
              /> */}
            </CardActions>
          </div>
        </CardContent>
      </Card>
=======
        <Card className="my-card">
          <CardContent className="post-container">
            <img
              src={post.userId.picture}
              alt="Profile"
              className="profile-pic"
            />
            <div className="post-text">
              <Typography variant="h5" component="h2" className="text-dark">
                @{post.userId.username}
              </Typography>
              <Typography variant="body2" component="p" className="text-dark">
                {post.description}
              </Typography>
              <Typography variant="body2" component="p" className="text-dark">
                {post.dateString}
              </Typography>
              <CardActions disableSpacing>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checked={checkedLike}
                  checkedIcon={<Favorite/>}
                  inputProps={{ "aria-label": "Like" }}
                  onClick={handleFunction}
                />
              </CardActions>
            </div>
          </CardContent>
        </Card>
>>>>>>> origin/sofia
      </Fade>
    </StylesProvider>
  );
}

export default BoardPost;
