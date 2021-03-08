import { React } from "react";
import {Redirect} from 'react-router-dom'

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


export default function NewPost(props) {
    const {user} = props 
    const {onPost, saveDraft} = props

    if (!user) {
      return <LinearProgress />;
    } else if (user ==="NotLoggedIn") {
      return <Redirect to={"/"} />;
    }

    return (
        <div className="container">
            <h1 className="header">Write a post</h1>

            <form className="my-form" noValidate autoComplete="off" onSubmit={onPost}>
            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Write your article here" name="description" maxLength="100" className="my-inputfield"/>
            <input type="hidden" name="postType" value="post"></input>

            {
                props.error ? (
                    <p className="errorMessage">{ props.error.errorMessage}</p>                ) : null
            }

            <Button type="submit" variant="contained" color="primary" className="my-btn">Post</Button>
            </form>
        </div>
    )
}
