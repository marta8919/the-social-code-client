import { React, useState } from "react";
import { Redirect } from "react-router-dom";
import Calendar from 'react-calendar'

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

//import calendar styles
import 'react-calendar/dist/Calendar.css';

export default function NewEvent(props) {
  const { onAdd, user, error} = props;

  const [event, setEvent] = useState({});
  const [date, setDate] = useState(new Date())

  const handleChangeEvent = (event) =>
    setEvent({
      ...event,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const onChangeDate = date => {
    setDate(date)
    console.log(date)
  }

  if (!user) {
    return <LinearProgress />;
  } else if (user ==="NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="container">
      <h1 className="header">Create a digital event!</h1>

      <form
        className="my-form"
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
          className="my-inputfield"
        />
        <label>Description</label>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={3}
          placeholder="Tell me more about this event within 151 characters"
          name="description"
          maxLength="151"
          className="my-inputfield"
        />

        <label>Tags</label>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={1}
          placeholder="Tags separated by commas like python, javascript, ..."
          name="tags"
          maxLength="100"
          className="my-inputfield"
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
          className="my-inputfield"
          />
          <TextareaAutosize className="time-input"
          aria-label="minimum height"
          rowsMin={1}
          placeholder="00"
          name="minutes"
          maxLength="2"
          className="my-inputfield"
          />
        </div>
        
        {error ? (
          <p style={{ color: "red" }}>{error.errorMessage}</p>
        ) : null}
        
        <Button type="submit" variant="contained" color="primary" className="my-btn">
          Post
        </Button>
      </form>

    </div>
  );
}
