import React, {Redirect} from 'react'
import NavBarUser from '../components/NavBarUser'

function Profile(props) {
    const {user} = props

    if (!user) {
        return <Redirect to={'/login'} />
    }
    return (
        <div>
            <h1>Profile</h1>
            {/* <p>Hello {user.name}</p> */}
            <NavBarUser />
        </div>
    )
}

export default Profile