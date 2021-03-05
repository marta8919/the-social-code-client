import { React, useState, useEffect } from "react";
import {Redirect} from 'react-router-dom'

//Components from Material UI
import { StylesProvider } from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

//Internal Components
import BoardPost from "../components/BoardPost";
import BoardArticle from "../components/BoardArticle";

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
  const [publishedVisible, setVisible] = useState("posts");
  const classes = useStyles();
  const { allPost, user } = props;

  if (!allPost) {
    return <LinearProgress />;
  }

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleArticles = () => {
    setVisible("articles");
  };

  if (!user) {
    return <LinearProgress />;
  } else if (user == "NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  return (
    <StylesProvider>
      <h1>Board</h1>
      <div className="group-btn">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={handlePosts}>Posts</Button>
          <Button onClick={handleArticles}>Articles/Code</Button>
        </ButtonGroup>
      </div>
      {allPost
        .filter((e) => e.postStatus === "published")
        .map((singlePost) => {
          if (publishedVisible === "posts" && singlePost.postType == "post") {
            return (
                <BoardPost key={singlePost._id} user={singlePost.userId} description={singlePost.description}/>
            );
          } else if (
            publishedVisible === "articles" &&
            singlePost.postType == "article"
          ) {
            return (
                <BoardArticle key={singlePost._id} title={singlePost.title}  description={singlePost.description} code={singlePost.code}/>

            );
          }
        })}
    </StylesProvider>
  );
}
