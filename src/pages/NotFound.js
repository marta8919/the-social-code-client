import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function NotFound(props) {
    
    
    return (
        <div className="container">
            <h1 className="big-title">404</h1>
            <h1>Whoops!</h1>
            <h3>Dear tech geek, you know what this means, your page was not found!</h3>
            <img className="myError-img" src="./images/error404.png"/>
            <h5>Go back home</h5>
            <Link to="/profile"><img className="logo" src="./images/logo.png"/></Link>
            
        </div>
        
    )
}
