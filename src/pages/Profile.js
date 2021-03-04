import { React, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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

function Profile(props) {
  const classes = useStyles();
  const [userPost, setUserPost] = useState([]);
  const [publishedVisible, setVisible] = useState("posts");

  useEffect(() => {
    axios
      .get(`${config.API_URL}/getpost`, { withCredentials: true })
      .then((response) => {
        setUserPost(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { user } = props;

  if (!user) {
    return <LinearProgress />;
  } else if (user == "NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleArticles = () => {
    setVisible("articles");
  };

  return (
    <div>
      <h1>Hey @{user.username} !</h1>
      <h3>Welcome to your profile </h3>
      <Card className={classes.card}>
        <img src={user.picture} alt="user image" className="profile-pic"></img>

        <div className="text-card">
          <p>
            <strong>Intro: </strong> {user.intro}
          </p>
          <p>
            <strong>City: </strong> {user.city}
          </p>
          <p>
            <strong>Country: </strong> {user.country}
          </p>
          <p>
            <strong>Hobbies: </strong> {user.hobbies}
          </p>
          <p>Part of TSC since {user.dateRegistered}</p>
        </div>

        <div className="control-btns">
          <Link to="/profile/edit" className="my-link">
            <EditIcon className="my-icon" />
          </Link>
          <Link to="/profile/delete" className="my-link">
            <DeleteForeverIcon className="my-icon" />
          </Link>
          <Link to="/logout" className="my-link">
            <ExitToAppIcon className="my-icon" />
          </Link>
        </div>
      </Card>

      <div>
        <Button onClick={handlePosts}>Posts</Button>
        <Button onClick={handleArticles}>Articles/Code</Button>
      </div>

      {userPost
        .filter((e) => e.postStatus === "published")
        .map((singlePost) => {
          if (publishedVisible === "posts" && singlePost.postType == "post") {
            return (
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="body2" component="p">
                    {singlePost.description}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Delete Post</Button>
                </CardActions>
              </Card>
            );
          } else if (
            publishedVisible === "articles" &&
            singlePost.postType == "article"
          ) {
            return (
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.pos} color="textSecondary">
                    {singlePost.title}
                    {singlePost.postType}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {singlePost.description}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Delete Post</Button>
                </CardActions>
              </Card>
            );
          }
        })}
    </div>
  );
}

export default Profile;
