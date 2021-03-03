import {React, useState} from 'react'
import NavBarUser from '../components/NavBarUser'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

    const [post, setPost] = useState({})

    const handleChangePost = (event) => setPost({
        ...post,
        [event.currentTarget.name] : event.currentTarget.value
    })
    

    const classes = useStyles();
    const [value, setValue] = useState(2);
    const {onPost, saveDraft} = props

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <div>
            <h1>Write a post</h1>

            <form className={classes.root} noValidate autoComplete="off" onSubmit={onPost}>
            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Write your article here" name="description" maxLength="100"/>
            <input type="hidden" name="postType" value="post"></input>

            {
                props.error ? (
                    <p style={{color: 'red'}}>{ props.error.errorMessage}</p>
                ) : null
            }
            <Button type="submit" variant="contained" color="primary">Post</Button>
            </form>

            <hr></hr>

            <h1>Write an article</h1>

            <form className={classes.root} noValidate autoComplete="off" onSubmit={onPost}>
            <TextField id="outlined-basic" label="Title" variant="outlined" name="title" onChange={handleChangePost} />
            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Write your article here" name="description" rowsMax={20} onChange={handleChangePost} />
            <input type="hidden" name="postType" value="article" onChange={handleChangePost} ></input>
            {
                props.error ? (
                    <p style={{color: 'red'}}>{ props.error.errorMessage}</p>
                ) : null
            }
            <Button type="submit" variant="contained" color="primary">Publish article</Button>
            <Button variant="contained" color="secondary" onClick={() => {saveDraft(post)}}>Save as draft</Button>

            </form>

            <NavBarUser/>
        </div>
    )
}
