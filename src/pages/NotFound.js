import React from 'react'
import {Link} from 'react-router-dom'
import Fade from "react-reveal/Fade";

export default function NotFound(props) {
       
    return (
        <Fade bottom>
        <div className="container">
            <Link to="/profile"><img className="logo" src="./images/logo.png" alt="Main_Logo"/></Link>

            <div className="header">
            <h1>404</h1>
            <h1>Whoops!</h1>
            <h3>You know what this means, your page was not found!</h3>
            </div>
            <br></br>
            <img className="myError-img" src="./images/error404.png" alt="not_found"/>
            <br></br>
            
        </div>
        </Fade>
    )
}
