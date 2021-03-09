import { React, useState, useEffect } from "react";
import axios from "axios";

import config from "../config";

import { StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
// import SmsIcon from "@material-ui/icons/Sms";
// import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";

function BoardPost(props) {
  const { post, user } = props;
  const [checkedLike, setCheck] = useState(null);

  useEffect(() => {
    if (post.userLikes.includes(user._id)) {
        setCheck(true)
    }
    else {
        setCheck(false)
    }
  }, []);

  const handleFunction = () => {
    if (post.userLikes.includes(user._id)) {
      handleUnlike(post._id);
      
    } else {
      handleLike(post._id);
      
    }
  };

  const handleCheck = () => {
    if (checkedLike) {
      return (
        <Checkbox
          icon={<Favorite />}
        //   checkedIcon={<FavoriteBorder />}
          inputProps={{ "aria-label": "Like" }}
          onClick={handleFunction}
        />
      );
    } else {
      return (
        <Checkbox
          icon={<FavoriteBorder />}
        //   checkedIcon={<Favorite />}
          inputProps={{ "aria-label": "Like" }}
          onClick={handleFunction}
        />
      );
    }
  };
  const handleLike = (postId) => {
    console.log("like yeeeey");
    axios.defaults.withCredentials = true;
    axios
      .post(`${config.API_URL}/post/like/${postId}`, { withCredentials: true })
      .then()
      .catch((err) => console.log(err));
    setCheck(true);
  };

  const handleUnlike = (postId) => {
    console.log("unlike no fun");
    axios.defaults.withCredentials = true;
    axios
      .post(`${config.API_URL}/post/unlike/${postId}`, {
        withCredentials: true,
      })
      .then()
      .catch((err) => console.log(err));
    setCheck(false);
  };

  return (
    <StylesProvider>
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
    </StylesProvider>
  );
}

export default BoardPost;
