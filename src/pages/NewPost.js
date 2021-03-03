import React from 'react'
import NavBarUser from '../components/NavBarUser'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
    const [value, setValue] = React.useState('post');
    const {onPost} = props
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <div>
            
            <h1>Write a post</h1>
            <FormControl component="fieldset">
            <FormLabel component="legend">Type of post</FormLabel>
            <RadioGroup aria-label="typeofpost" name="post" value={value} onChange={handleChange}>
                <FormControlLabel value="post" control={<Radio />} label="Post" />
                <FormControlLabel value="article" control={<Radio />} label="Article" />
            </RadioGroup>
            </FormControl>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onPost}>
            <TextField id="outlined-basic" label="Post" variant="outlined" />
            <Button type="submit" variant="contained" color="primary">Post</Button>
            </form>
            <NavBarUser/>
        </div>
    )
}
