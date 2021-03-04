import { React, useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
  const { allPost } = props;

  if (!allPost) {
    return <LinearProgress />;
  }

  const handlePosts = () => {
    setVisible("posts");
  };

  const handleArticles = () => {
    setVisible("articles");
  };

  return (
    <div>
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
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="body2" component="p">
                    {singlePost.description}
                    <br />
                  </Typography>
                </CardContent>
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
              </Card>
            );
          }
        })}
    </div>
  );
}
