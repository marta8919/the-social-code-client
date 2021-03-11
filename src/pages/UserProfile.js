import { React, useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import config from '../config'
import axios from 'axios'
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Fade from 'react-reveal/Fade';
import CardActions from "@material-ui/core/CardActions";

export default function UserProfile(props) {

    const [singleUser, setUser ] = useState({})
    const [publishedVisible, setVisible] = useState("posts");
    const [userPost, setUserPost] = useState([]);
    const [userEvent, setUserEvent] = useState([]);

    useEffect(() => {
        let userId = props.match.params.userId;

        axios.get(`${config.API_URL}/user/${userId}`, {withCredentials: true})
        .then((response) => setUser(response.data))
        .catch((err) => console.log("not working"))

        axios.get(`${config.API_URL}/user/getpost/${userId}`, {withCredentials: true})
        .then((response)=> setUserPost(response.data))
        .catch(()=> console.log("get user post not working"))

        axios.get(`${config.API_URL}/user/getevent/${userId}`, { withCredentials: true })
        .then((response) => { setUserEvent(response.data);})
        .catch((err) => console.log(err));

    }, [])

    const handlePosts = () => {
        setVisible("posts");
      };
    
      const handleEvents = () => {
        setVisible("events");
      };



    return (
        <div className="container">
            <Link to="/about"><img className="logo" src="../images/logo.png"/></Link>
            <h1>User profile</h1>
            <Card className="my-card">
                <img src={singleUser.picture} alt="user" className="profile-pic"></img>
                <div>
                <p>
                    <strong>@{singleUser.username}</strong>
                </p>
                <p>
                <strong>City: </strong> {singleUser.city}
                </p>
                <p>
                    <strong>Country: </strong> {singleUser.country}
                </p>
                <p>
                    <strong>Hobbies: </strong> {singleUser.hobbies}
                </p>
                <p>
                    <strong>Intro: </strong> {singleUser.intro}
                </p>
                <p>Part of TSC since {singleUser.dateRegistered}</p>

                </div>
            </Card>

            <div className="group-btn">
            
            <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button className="my-btn" onClick={handlePosts}>Posts</Button>
            <Button className="my-btn" onClick={handleEvents}>Events</Button>
            </ButtonGroup>

            {publishedVisible === "posts"
            ? userPost.map((singlePost) => {
                return (
                <Fade bottom>
                <Card className="my-card" key={singlePost._id}>
                    <CardContent className="post-container">
                    <Typography variant="body2" component="p" className="text-dark">
                        {singlePost.description}
                        <br />
                    </Typography>
                    <Typography variant="body2" component="p" className="text-dark">
                        {singlePost.dateString}
                        <br />
                    </Typography>
                    
                    <CardActions disableSpacing>
                    </CardActions>
                    </CardContent>
                </Card>
                </Fade>
                );
            })
            : userEvent.map((singleEvent) => {
                return (
                <Card className="my-card" key={singleEvent._id}>
                    <CardContent className="post-container">
                    <div className="text-card">
                    <h4>{singleEvent.title}</h4>
                    <Typography variant="body2" component="p" className="text-dark">
                    {singleEvent.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {singleEvent.dateString}, at {singleEvent.hours}:
                        {singleEvent.minutes}
                    </Typography>
                    <a href="{singleEvent.link}">
                    Link to register
                    </a>
                    {singleEvent.tags ? (
                    <div className="article-code">
                        <Typography variant="body2" component="p" className="text-dark">
                        Tags: #{singleEvent.tags}
                        </Typography>
                    </div>
                    ) : (
                    ""
                    )}
                    </div>
                    </CardContent>
                </Card>
                );
            })
        }
            </div> 
        </div>
    )
}
