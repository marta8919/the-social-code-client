import {React, useState, useEffect} from "react";
//External Elements
import { Switch, Route, withRouter } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
//Styles css

//Components and Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages";
import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";
import Board from "./pages/Board";
import MessageDetail from "./pages/MessageDetail";
import axios from 'axios'
import config from './config.js'

function App(props) {

  const [loggedInUser, setlogin] = useState(null)
  const [error, setError] = useState(null)
  const [allPost, setPost] = useState([])

  useEffect(()=>{
    axios.get(`${config.API_URL}/board`)
      .then((response)=>{
        setPost(response.data)
      })
      .catch((err) => setError(err.response.data))
      

    if(!loggedInUser) {
      axios.get(`${config.API_URL}/profile`, {withCredentials: true})
        .then((response) => {
          setlogin(response.data)
        })
    }
  }, []);

  const handleSignUp = (event) => {
    event.preventDefault()

    let user = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password2: event.target.password2.value
    } 

    axios.post(`${config.API_URL}/signup`, user)
      .then((response) => props.history.push('/'))
      .catch((err) => setError(err.response.data))
  }

  const handleLogIn = (event)=> {
    event.preventDefault()
    console.log("log in user")

    let user = {
      email: event.target.email.value,
      password : event.target.password.value,
    }

    axios.post(`${config.API_URL}/signin`, user, {withCredentials: true})
     .then((response)=>{
       setlogin(response.data)
       props.history.push("/") 
       console.log("user logged in successfully")     
     })
     .catch((err) => setError(err.response.data))

  }

  const handlePost = (event)=> {
    event.preventDefault()
    console.log("handle post")
    let title = event.target.title.value
    let description = event.target.description.value
    let postType = event.target.postType.value

    let newPost= {
      title: title,
      description: description,
      postType: postType,
    }

    axios.post(`${config.API_URL}/publish`, newPost, {withCredentials: true})
      .then((response)=>{
        setPost(response.data,...allPost)
        props.history.push("/board")
        console.log("Post published")
      })
      .catch((err) => setError(err.response.data))
  }
  

  const handleDraft = (post) => {
    console.log("Draft works")
    let title = post.title
    let description = post.description

    let newPost= {
      title: title,
      description: description,
    }

    axios.post(`${config.API_URL}/new-draft`, newPost, {withCredentials: true})
    .then(()=>{ 
      props.history.push("/board")
      console.log("draft saved")
    })
    .catch((err) => setError(err.response.data))
  }

  if(!loggedInUser) {
    return <LinearProgress/>
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" render={() => {
          return <HomePage/>
        }} />
        <Route path="/signup" render={() => {
          return <SignUp error={error} addUser={handleSignUp}/>
        }} />
        <Route path="/login" render={() => {
          return <Login loginUser={handleLogIn} error={error} />
        }} />
        <Route path="/about" render={() => {
          return <AboutUs/>
        }} />
        <Route path="/board" render={() => {
          return <Board allPost={allPost}/>
        }} />
        <Route exact path="/profile" render={(routeProps) => {
          return <Profile user={loggedInUser} {...routeProps}/>
        }} />
        <Route path="/profile/messages" render={() => {
          return <Messages/>
        }} />
        <Route path="/profile/:messageId" render={(routeProps) => {
          return <MessageDetail {...routeProps} />
        }} />
        <Route path="/new-post" render={() => {
          return <NewPost onPost={handlePost} error={error} saveDraft={handleDraft}/>
        }} />
        
      </Switch>
    </div>
  );
}

export default withRouter(App);
