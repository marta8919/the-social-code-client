import React from 'react'
import NavBarUser from '../components/NavBarUser'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '100ch',
    },
  },
}));


export default function NewPost(props) {
    const classes = useStyles();

    const {onPost} = props

    return (
        <div>
            
            <h1>Write a post</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onPost}>
            <TextField id="outlined-basic" label="Post" variant="outlined" />
            <Button type="submit" variant="contained" color="primary">Post</Button>
            </form>
            <NavBarUser/>
        </div>
    )
}
