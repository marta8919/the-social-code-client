import React from 'react'
import {Redirect} from 'react-router-dom'

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Messages(props) {
    const {user} = props

    if (!user) {
        return <LinearProgress />;
      } else if (user == "NotLoggedIn") {
        return <Redirect to={"/"} />;
      }
    
    return (
        <div>
            <h1>Messages</h1>

        </div>
    )
}