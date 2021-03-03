import React from 'react'
import {Redirect} from 'react-router-dom'
import NavBarUser from '../components/NavBarUser'

function Profile(props) {
    const {user} = props

    console.log(props)

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
             <NavBarUser/>
        </div>
    )
}

export default Profile