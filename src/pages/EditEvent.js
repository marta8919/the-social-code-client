import axios from "axios";
import config from "../config";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import { Select } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Fade from "react-reveal/Fade";

export default function EventDetails(props) {
  const [singleEvent, setEvent] = useState({});

  useEffect(() => {
    let eventId = props.match.params.eventId;
    axios
      .get(`${config.API_URL}/event/${eventId}`, { withCredentials: true })
      .then((response) => {
        setEvent(response.data);
        console.log(singleEvent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) =>
    setEvent({
      ...singleEvent,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleEventDetails = (event) => {
    console.log("editing");
    event.preventDefault();
    let eventId = props.match.params.eventId;

    let editedEvent = {
      title: event.target.title.value,
      description: event.target.description.value,
      tags: event.target.tags.value,
      link: event.target.link.value,
    };

    axios
      .patch(`${config.API_URL}/event/edit/${eventId}`, editedEvent, {
        withCredentials: true,
      })
      .then((response) => {
        setEvent(response.data);
        props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fade bottom>
    <div className="container">
      <Link to="/about">
        <img
          className="logo"
          src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png"
        />
      </Link>
      <div className="header">
        <h1>Let's edit the event </h1>
      </div>
      {!singleEvent ? (
        <LinearProgress />
      ) : (
        <form
          onSubmit={handleEventDetails}
          className="calendar-form"
          noValidate
          autoComplete="off"
        >
          <label>Title</label>
          <TextareaAutosize
            className="my-inputfield"
            name="title"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={singleEvent.title}
          />

          <label>Description</label>
          <TextareaAutosize
            className="my-inputfield"
            name="description"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={singleEvent.description}
          />

          <label>Link</label>
          <TextareaAutosize
            className="my-inputfield"
            name="link"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={singleEvent.link}
          />

          <label>Tags</label>
          <Select className="my-select" name="tags" native>
            <option value="react"># react</option>
            <option value="python"># python</option>
            <option value="javascript"># javascript</option>
            <option value="html"># html</option>
            <option value="java"># java</option>
            <option value="c++"># c++</option>
            <option value="career"># career</option>
            <option value="frontend"># frontend</option>
            <option value="backend"># backend</option>
          </Select>
          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="my-btn"
          >
            Push edited event
          </Button>
        </form>
      )}
    </div>
    </Fade>
  );
}
