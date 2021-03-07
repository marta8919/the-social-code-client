import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'
import { Link } from 'react-router-dom';

function SignUp (props) {
    const {addUser} = props
    return(
        <div className="container">
        <h1>Sign up</h1>
        <StylesProvider injectFirst>
            <form onSubmit={addUser} className="form-center" noValidate autoComplete="off">
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
                    props.error ? (
                        <p className="errorMessage">{ props.error.errorMessage}</p>                    ) : null
                }

                <Button type="submit" variant="contained">Sign up</Button>
                <Link className="text-white" to="/login">Do you already have an account with us? Log in!</Link>
            </form>
        </StylesProvider>
        </div>

    )
}

export default SignUp