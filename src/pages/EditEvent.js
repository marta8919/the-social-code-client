import axios from "axios";
import config from "../config";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Link } from 'react-router-dom'

import LinearProgress from "@material-ui/core/LinearProgress";
import { StylesProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";

export default function EditEvent(props) {
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

  const handleEditEvent = (event) => {
    console.log("editing");
    event.preventDefault()
    let eventId = props.match.params.eventId;

    let editedEvent= {
      title: event.target.title.value,
      description: event.target.description.value,
      tags: event.target.tags.value,
      link: event.target.link.value
    }

    axios.patch(`${config.API_URL}/event/edit/${eventId}`, editedEvent, {withCredentials: true})
     .then((response)=>{
       setEvent(response.data)
       props.history.push('/profile')
     })
     .catch((err)=> console.log(err))
  };

  return (
    <div className="container">
      <Link to="/about"><img className="logo" src="../images/logo.png"/></Link>
      <div className="header">
        <h1>Hello</h1>
        <h3>Let's edit the event </h3>
        {!singleEvent ? (
          <LinearProgress />
        ) : (
          <form
            onSubmit={handleEditEvent}
            className="form-center"
            noValidate
            autoComplete="off"
          >
            <label>Title</label>
            <TextField
              className="my-inputfield"
              name="title"
              type="text"
              variant="filled"
              onChange={handleChange}
              value={singleEvent.title}
            />

            <label>Description</label>
            <TextField
              className="my-inputfield"
              name="description"
              type="text"
              variant="filled"
              onChange={handleChange}
              value={singleEvent.description}
            />

            <label>Tags</label>
            <Select
            name='tags'
            native>
            <option value="python">python</option>
            <option value="javascript">javascript</option>
            <option value="react">react</option>
            <option value="html">html</option>
            <option value="java">java</option>
            <option value="c++">c++</option>
            </Select>
            {/* <TextField
              className="my-inputfield"
              name="tags"
              type="text"
              variant="filled"
              onChange={handleChange}
              value={singleEvent.tags}
            /> */}

            <label>Link</label>
            <TextField
              className="my-inputfield"
              name="link"
              type="text"
              variant="filled"
              onChange={handleChange}
              value={singleEvent.link}
            />
            

            {/* <label>Date</label>
            <Calendar onChange={onChangeDate} value={singleEvent.dateOriginal} />
            <p>
              Date selected (dd/m/yyyy):{" "}
              <strong>
                {singleEvent.dateOriginal.getDate()}/{singleEvent.dateOriginal.getMonth() + 1}/{singleEvent.dateOriginal.getFullYear()}
              </strong>
            </p> */}
            {/* <input
              type="hidden"
              name="dateOriginal"
              value={singleEvent.dateOriginal}
              onChange={onChangeDate}
            ></input>
            <input
              type="hidden"
              name="dateString"
              value={singleEvent.dateString}
              onChange={onChangeDate}
            ></input>
            <br />
            <label>Time</label>
            <div className="time-field">
              <Select
                className="my-select"
                native
                value={singleEvent.hours}
                onChange={handleChange}
                name="hours"
              >
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </Select>
              <p>:</p>
              <Select
                className="my-select"
                native
                value={singleEvent.minutes}
                onChange={handleChange}
                name="minutes"
              >
                <option value="00">00</option>
                <option value="01">15</option>
                <option value="02">30</option>
                <option value="02">45</option>
              </Select>
            </div>
            <br /> */}


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
    </div>
  );
}
