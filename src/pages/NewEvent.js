import { React, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Calendar from 'react-calendar'

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Select } from "@material-ui/core";
import { StylesProvider } from '@material-ui/core/styles';

//import calendar styles
import 'react-calendar/dist/Calendar.css';

export default function NewEvent(props) {
  const { onAdd, user, error} = props;

  const [dateString, setDateString] = useState('')
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')

  const onChangeDate = date => {
    setDate(date)
    setDateString(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
  }

  const onChangeHours = (event) => {
    setHours(event.target.value)
  }

  const onChangeMinutes = (event) => {
    setMinutes(event.target.value)
  }

  if (!user) {
    return <LinearProgress />;
  } else if (user ==="NotLoggedIn") {
    return <Redirect to={"/"} />;
  }

  return (
      <div className="container">
        <Link to="/about"><img className="logo" src="./images/logo.png" alt="Main_Logo"/></Link>

        <h1 className="header">Create a digital event!</h1>
      
      <div class="form-center calendar-form">
      <form
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
          maxLength="200"
          className="my-inputfield"
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
        {/* <TextareaAutosize
          aria-label="minimum height"
          rowsMin={1}
          placeholder="Tags separated by commas like python, javascript, ..."
          name="tags"
          maxLength="100"
          className="my-inputfield"
        /> */}

        <label>Link</label>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={1}
          placeholder="Link to Register / event"
          name="link"
          maxLength="100"
          className="my-inputfield"
        />

        <label>Date</label>
        <Calendar 
          onChange={onChangeDate}
          value={date}
        />
        <p>Date selected (dd/m/yyyy): <strong>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</strong></p>
        <input type="hidden" name="dateOriginal" value={date} onChange={onChangeDate} ></input>
        <input type="hidden" name="dateString" value={dateString} onChange={onChangeDate} ></input>
        <br/>
        <label>Time</label>
        <div className="time-field">
          <Select 
            className="my-select"
            native
            value={hours}
            onChange={onChangeHours}
            name='hours'>
            <option value='00'>00</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
            <option value='04'>04</option>
            <option value='05'>05</option>
            <option value='06'>06</option>
            <option value='07'>07</option>
            <option value='08'>08</option>
            <option value='09'>09</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
          </Select>
          <p>:</p>
          <Select 
            className="my-select"
            native
            value={minutes}
            onChange={onChangeMinutes}
            name='minutes'>
            <option value='00'>00</option>
            <option value='01'>15</option>
            <option value='02'>30</option>
            <option value='02'>45</option>
          </Select>
          </div>
        <br/>

        {error ? (
          <p className="errorMessage">{error.errorMessage}</p>
        ) : null}
        
        <Button type="submit" variant="contained" color="primary" className="my-btn">
          Push event!
        </Button>
      </form>
      </div>

    </div>
      
  );
}
