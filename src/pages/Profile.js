import {React, useState, useEffect} from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import { LinearProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      margin: 6,
      marginBottom: 10,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
  });


function Profile(props) {
    const classes = useStyles();

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

    if(!user){
        return <LinearProgress/>
    }
    else if(user == 'NotLoggedIn'){
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
                     if(singlePost.postType == 'post'){
                         return (
                            <Card className={classes.root}>
                            <CardContent>
                            <Typography variant="body2" component="p">
                            {singlePost.description}
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Delete Post</Button>
                        </CardActions>
                        </Card>

                         )

                     } 
                     
                     else {
                         return (
                        <Card className={classes.root}>
                            <CardContent>
                            <Typography className={classes.pos} color="textSecondary">
                            {singlePost.title}
                            {singlePost.postType}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {singlePost.description}
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Delete Post</Button>
                        </CardActions>
                        </Card>
                        )
                     }

                 })
             }

        </div>
    )
}

export default Profile