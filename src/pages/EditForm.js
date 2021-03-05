import {React, useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'

export default function EditForm(props) {
    const {user, onEdit} = props

    const [loggedInUser, setLogin] = useState(user)

    const handleChangeUser = (event) => setLogin({
        ...loggedInUser,
        [event.currentTarget.name] : event.currentTarget.value
    })


    return (
        <div className="container">
            <h1>Hello @{user.username}</h1>
            <h3>Here you can edit your profile.</h3>
            <StylesProvider injectFirst>
            <form onSubmit={onEdit} className="form-center" noValidate autoComplete="off">
                <TextField name="country" label="Country" type="text" variant="outlined"  onChange={handleChangeUser} value={loggedInUser.country}/>
                <TextField name="city" label="City" type="text" variant="outlined" value={loggedInUser.city} onChange={handleChangeUser}  />
                <TextField name="intro" label="Intro" type="text" variant="outlined" value={loggedInUser.intro} onChange={handleChangeUser} />
                <TextField name="hobbies" label="Hobbies" type="text" variant="outlined" value={loggedInUser.hobbies}  onChange={handleChangeUser} />
                <Button type="submit" variant="contained">Save</Button>
            </form>
            </StylesProvider>
        </div>
    )
}
