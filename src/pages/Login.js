import React from 'react'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core/styles';
import Fade from "react-reveal/Fade";

export default function Login(props) {

    const {loginUser} = props

    return (
      <Fade bottom>
      <div className="container">
      <Link to="/"><img className="logo" src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png" alt="Main_Logo"/></Link>
      <h1 className="header">Log In</h1>
      <StylesProvider injectFirst>
      <form className="form-center" noValidate autoComplete="off" onSubmit={loginUser}>
        <TextField id="outlined-basic" label="Email" variant="filled" type="email" name="email"/>
        <TextField id="outlined-basic" label="Password" variant="filled" type="password" name="password" />
        {
            props.error ? (
              <p className="errorMessage">{ props.error.errorMessage}</p>            ) : null
        }
        <Button className="my-btn" variant="contained" type="submit" color="primary">Log in</Button>
        <p>You don't have an account?</p><Link className="text-white" to="/signup">Create one here!</Link>
      </form>
      </StylesProvider>
      </div>
      </Fade>
    );
}
