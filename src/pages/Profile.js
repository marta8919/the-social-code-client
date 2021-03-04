import {React, useState, useEffect} from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import config from '../config'

function Profile(props) {

    const [error, setError] = useState(null)
    const [userPost, setUserPost] = useState([])

    useEffect(()=>{
        axios.get(`${config.API_URL}/getpost`, {withCredentials: true})
         .then((response)=>{
             setUserPost(response.data)
         })
         .catch((err) => console.log(err))
    }, []);

    const {user} = props


    if (!user) {
        return <Redirect to={'/'}/>
    }


    return (
        <div>
             <h1>Profile</h1>
             <p>Hello {user.username}</p>
             <p>About me: {user.intro}</p>
             <p>City: {user.city} | Country: {user.country}</p>
             <p>Hobbies: {user.hobbies}</p>
             <p>Part of TSC since {user.dateRegistered}</p>
             <img src={user.picture} alt="example"></img>

             {
                 userPost.map((singlePost)=>{
                     return <p> THIS IS AN POST :{singlePost.description}</p>
                 })
             }

        </div>
    )
}

export default Profile