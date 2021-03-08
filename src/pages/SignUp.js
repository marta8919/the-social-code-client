import {React, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'
import { Link } from 'react-router-dom';

import axios from 'axios'
import config from '../config.js'

function SignUp (props) {

    const [error, setError] = useState(null)

    const handleSignUp = (event) => {
        event.preventDefault()
    
        let user = {
          username: event.target.username.value,
          email: event.target.email.value,
          password: event.target.password.value,
          password2: event.target.password2.value,
          country: event.target.country.value,
          city: event.target.city.value,
          hobbies: event.target.hobbies.value,
          intro: event.target.intro.value
        } 
    
        axios.post(`${config.API_URL}/signup`, user)
          .then((response) => props.history.push('/login'))
          .catch((err) => setError(err.response.data))
      }

    return(
        <div className="container">
            <Link to="/"><img className="logo" src="./images/logo.png"/></Link>
            <h1>Sign up</h1>
            <StylesProvider injectFirst>
                <form onSubmit={handleSignUp} className="form-center" noValidate autoComplete="off">
                    <TextField name="username" label="Username" type="text" variant="outlined"/>
                    <TextField name="email" label="Email" type="email" variant="outlined"/>
                    {/* <span className="input-grey">Email won't be shared with third parties</span> */}
                    <TextField name="password" id="filled-password-input" label="Password" type="password" variant="outlined"/>
                    <TextField name="password2" id="filled-password-input" label="Repeat Password" type="password" variant="outlined"/>
                    <TextField name="country" label="Country" type="text" variant="outlined"/>
                    <TextField name="city" label="City" type="text" variant="outlined"/>
                    <TextField name="intro" label="Intro" type="text" variant="outlined"/>
                    <TextField name="hobbies" label="Hobbies" type="text" variant="outlined"/>

                    {
                        error ? (
                            <p className="errorMessage">{ error.errorMessage}</p>) : null
                    }

                    <Button type="submit" variant="contained">Sign up</Button>
                    <Link className="text-white" to="/login">Do you already have an account with us? Log in!</Link>
                </form>
            </StylesProvider>
        </div>

    )
}

export default SignUp