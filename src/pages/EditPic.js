import {React} from 'react'
import { Link } from 'react-router-dom'

export default function EditPic(props) {

    const {user, onEditPic} = props

    return (
        <div className="container">
            <Link to="/about"><img className="logo" src="./images/logo.png"/></Link>
             <h1>Hello @{user.username}</h1>
             <h3>Here you can edit your profile picture.</h3>
            <form onSubmit={onEditPic}>
                <input type="file" name="imageUrl" accept="image/png, image/jpg"></input>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
