import { React, useState } from "react";
import { Redirect } from "react-router-dom";
import Calendar from 'react-calendar'

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "70ch",
    },
  },
}));

export default function NewEvent(props) {
  const { user } = props;

  const [event, setEvent] = useState({});
  const [date, setDate] = useState(new Date())

  const handleChangeEvent = (event) =>
    setEvent({
      ...event,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const classes = useStyles();
  const [value, setValue] = useState(2);
  const { onAdd, saveDraft } = props;

  const onChangeDate = date => {
    setDate(date)
    console.log(date)
  }

  if (!user) {
    return <LinearProgress />;
  } else if (user == "NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="container">
      <h1>Create a digital event!</h1>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onAdd}
      >
        <label>Title</label>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={1}
          placeholder="Title of the geek event"
          name="title"
          maxLength="100"
        />
        <label>Description</label>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          placeholder="Tell me more about this event within 151 characters"
          name="description"
          maxLength="151"
        />

        <label>Tags</label>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={1}
          placeholder="Tags separated by commas like python, javascript, ..."
          name="tags"
          maxLength="100"
        />

        <label>Date</label>
        <Calendar 
          onChange={onChangeDate}
          value={date}
        />
        <input type="hidden" name="date" value={date.toDateString()} onChange={onChangeDate} ></input>
        <label>Time</label>
        <div className="time-field">
          <TextareaAutosize className="time-input"
          aria-label="minimum height"
          rowsMin={1}
          placeholder="12"
          name="hours"
          maxLength="2"
          />
          <TextareaAutosize className="time-input"
          aria-label="minimum height"
          rowsMin={1}
          placeholder="00"
          name="minutes"
          maxLength="2"
          />
        </div>
        
        {props.error ? (
          <p style={{ color: "red" }}>{props.error.errorMessage}</p>
        ) : null}
        <Button type="submit" variant="contained" color="primary">
          Post
        </Button>
      </form>

      <hr></hr>

      {/* <h1>Write an article</h1>

            <form className={classes.root} noValidate autoComplete="off" onSubmit={onPost}>
            <TextField id="outlined-basic" label="Title" variant="outlined" name="title" onChange={handleChangePost} />
            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Write your article here" name="description" rowsMax={20} onChange={handleChangePost} />
            <code>
            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="<p>Write your code here</p>" 
              name="code" rowsMax={20} />
            </code>
            <input type="hidden" name="postType" value="article" onChange={handleChangePost} ></input>
            {
                props.error ? (
                    <p style={{color: 'red'}}>{ props.error.errorMessage}</p>
                ) : null
            }
            <Button type="submit" variant="contained" color="primary">Publish article</Button>
            <Button variant="contained" color="secondary" onClick={() => {saveDraft(post)}}>Save as draft</Button>

            </form> */}
    </div>
  );
}
