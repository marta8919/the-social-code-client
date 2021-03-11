import {React} from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

export default function EditPic(props) {

    const {user, onEditPic} = props

    return (
        <div className="container">
            <Fade bottom>
            <Link to="/about"><img className="logo" src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png"/></Link>
            <div className="header">
             <h1>Hello @{user.username}</h1>
             <h3>Here you can edit your profile picture.</h3>
            </div>
            <form onSubmit={onEditPic} className="form-center">
                <input type="file" name="imageUrl" accept="image/png, image/jpg" className="my-inputfield"></input>
                <Button type="submit" className="my-btn">Save</Button>
            </form>
            </Fade>
        </div>
    )
}
