import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'
import Fade from "react-reveal/Fade";



export default function EditProfile(props) {
    const {user, onEdit} = props

    const [loggedInUser, setLogin] = useState(user)

    const handleChangeUser = (event) => setLogin({
        ...loggedInUser,
        [event.currentTarget.name] : event.currentTarget.value
    })


    return (
        <Fade bottom>
        <div className="container">
            <Link to="/about"><img className="logo" src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png"/></Link>
            <div className="header">
            <h1>Hello @{user.username}</h1>
            <h3>Here you can edit your profile.</h3>
            </div>
            <StylesProvider injectFirst>
            <form onSubmit={onEdit} className="form-center" noValidate autoComplete="off">
                <TextField  name="country"  type="text" variant="filled"  label="Country" onChange={handleChangeUser} value={loggedInUser.country}/>
                <TextField name="city" label="City" type="text" variant="filled" value={loggedInUser.city} onChange={handleChangeUser}  />
                <TextField name="intro" label="Intro" type="text" variant="filled" value={loggedInUser.intro} onChange={handleChangeUser} />
                <TextField name="hobbies" label="Hobbies" type="text" variant="filled" value={loggedInUser.hobbies}  onChange={handleChangeUser} />
                <Button type="submit" variant="contained">Save</Button>
            </form>
            </StylesProvider>
        </div>
        </Fade>
    )
}
