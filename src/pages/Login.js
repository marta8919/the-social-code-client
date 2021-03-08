import React from 'react'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core/styles';




export default function Login(props) {

    const {loginUser} = props

    return (
      <div className="container">
      <Link to="/"><img className="logo" src="./images/logo.png"/></Link>
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
      </form>
      </StylesProvider>
      </div>
    );
}
