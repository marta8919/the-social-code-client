import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'
import NavBar from '../components/NavBar';

function SignUp (props) {
    const {addUser} = props
    return(
        <StylesProvider injectFirst>
            <form onSubmit={addUser} className="form-center" noValidate autoComplete="off">
                <TextField name="username" label="Username" type="text" variant="outlined"/>
                <TextField name="email" label="Email" type="email" variant="outlined"/>
                <span className="input-grey">Email won't be shared with third parties</span>
                <TextField name="password" id="filled-password-input" label="Password" type="password" variant="outlined"/>
                <TextField name="password2" id="filled-password-input" label="Repeat Password" type="password" variant="outlined"/>
                {
                    props.error ? (
                        <p style={{color: 'red'}}>{ props.error.errorMessage}</p>
                    ) : null
                }
                <Button type="submit" variant="contained">Sign up</Button>
            </form>
            <NavBar/>
        </StylesProvider>

    )
}

export default SignUp