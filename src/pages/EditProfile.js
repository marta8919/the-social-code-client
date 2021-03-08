import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'


export default function EditProfile(props) {
    const {user, onEdit} = props

    const [loggedInUser, setLogin] = useState(user)

    const handleChangeUser = (event) => setLogin({
        ...loggedInUser,
        [event.currentTarget.name] : event.currentTarget.value
    })


    return (
        <div className="container">
            <Link to="/about"><img className="logo" src="./images/logo.png"/></Link>
            <div className="header">
            <h1>Hello @{user.username}</h1>
            <h3>Here you can edit your profile.</h3>
            </div>
            <StylesProvider injectFirst>
            <form onSubmit={onEdit} className="form-center" noValidate autoComplete="off">
                <TextField className="my-inputfield" name="country" label="Country" type="text" variant="filled"  onChange={handleChangeUser} value={loggedInUser.country}/>
                <TextField className="my-inputfield" name="city" label="City" type="text" variant="filled" value={loggedInUser.city} onChange={handleChangeUser}  />
                <TextField className="my-inputfield" name="intro" label="Intro" type="text" variant="filled" value={loggedInUser.intro} onChange={handleChangeUser} />
                <TextField className="my-inputfield" name="hobbies" label="Hobbies" type="text" variant="filled" value={loggedInUser.hobbies}  onChange={handleChangeUser} />
                <Button type="submit" variant="contained">Save</Button>
            </form>
            </StylesProvider>
        </div>
    )
}
