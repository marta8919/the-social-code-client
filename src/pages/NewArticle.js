import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '70ch',
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
                <FormControlLabel value="article" control={<Radio />} label="Article" href="/" />
            </RadioGroup>
            </FormControl>

            <p>Article form</p>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Title" variant="outlined" name="title"/>
            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Write your article here" 
              name="description" rowsMax={20} />
            
            {
                props.error ? (
                    <p style={{color: 'red'}}>{ props.error.errorMessage}</p>
                ) : null
            }
            <Button type="submit" variant="contained" color="primary">Publish article</Button>
            <Button type="submit" variant="contained" color="primary">Save as draft</Button>
            </form>

        </div>
    )
}