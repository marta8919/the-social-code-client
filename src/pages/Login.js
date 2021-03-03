import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from '../components/NavBar'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Login(props) {
    const classes = useStyles();

    const {loginUser} = props

    return (
        <>
        
      <h1>Log In</h1>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={loginUser}>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
        <Button variant="contained" type="submit" color="primary">Default</Button>
      </form>
      <NavBar/>
      </>
    );
}
