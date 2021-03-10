import {React, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'
import { Link } from 'react-router-dom';

import axios from 'axios'
import config from '../config.js'
import { notify } from 'react-notify-toast'
import CircularProgress from '@material-ui/core/CircularProgress';


function SignUp (props) {

    const [error, setError] = useState(null)
    const [sendingEmail, setSendingEmail] = useState(false)

    const handleSignUp = (event) => {
        console.log("hola client")
        event.preventDefault()
        setSendingEmail(true)
    
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

        
    
        axios.post(`${config.API_URL}/signup`, user, {withCredentials: true})
          .then((response) => 
          {console.log("hola client 2")
              setSendingEmail(false)
          notify.show(response.msg)
        //props.history.push('/login')
        })
          .catch((err) => setError(err))
      }

    return(
        <div className="container">
            <Link to="/"><img className="logo" src="./images/logo.png" alt="Main_Logo"/></Link>
            <h1>Sign up</h1>
            <StylesProvider injectFirst>
                <form onSubmit={handleSignUp} className="form-center" noValidate autoComplete="off">
                    <TextField name="username" label="Username" type="text" variant="filled"/>
                    <TextField name="email" label="Email" type="email" variant="filled"/>
                    {/* <span className="input-grey">Email won't be shared with third parties</span> */}
                    <TextField name="password" id="filled-password-input" label="Password" type="password" variant="filled"/>
                    <TextField name="password2" id="filled-password-input" label="Repeat Password" type="password" variant="filled"/>
                    <TextField name="country" label="Country" type="text" variant="filled"/>
                    <TextField name="city" label="City" type="text" variant="filled"/>
                    <TextField name="intro" label="Intro" type="text" variant="filled"/>
                    <TextField name="hobbies" label="Hobbies" type="text" variant="filled"/>

                    {
                        error ? (
                            <p className="errorMessage">{ error.errorMessage}</p>) : null
                    }

                    <Button type="submit" variant="contained" disabled={sendingEmail}>          
                    {sendingEmail 
                        ? <CircularProgress/> 
                        : "Sign up"
                        }
                    </Button>
                    <Link className="text-white" to="/login">Do you already have an account with us? Log in!</Link>
                </form>
            </StylesProvider>
        </div>
    )
}

export default SignUp