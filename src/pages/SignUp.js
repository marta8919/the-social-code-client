import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'

function SignUp (props) {
    const {addUser} = props
    return(
        <StylesProvider injectFirst>
            <form onSubmit={addUser} className="form-center" noValidate autoComplete="off">
                <TextField label="Username" type="text" variant="outlined"/>
                <TextField label="Email" type="email" variant="outlined"/>
                <span className="input-grey">Email won't be shared with third parties</span>
                <TextField id="filled-password-input" label="Password" type="password" variant="outlined"/>
                <Button variant="contained">Sign up</Button>
            </form>
        </StylesProvider>

    )
}

export default SignUp