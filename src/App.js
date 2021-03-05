import {React, useState, useEffect} from "react";
//External Elements
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
//Styles css

//Components and Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages";
import NewPost from "./pages/NewPost";
import NewEvent from "./pages/NewEvent";
import Profile from "./pages/Profile";
import Board from "./pages/Board";
import MessageDetail from "./pages/MessageDetail";
import axios from 'axios'
import config from './config.js'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import UserNavBar from './components/NavBarUser'
import EditForm from './pages/EditForm'
import EditPic from './pages/EditPic'

function App(props) {

  const [loggedInUser, setlogin] = useState(null)
  const [error, setError] = useState(null)
  const [allPost, setPost] = useState([])
  const [allEvents, setAllEvents] = useState([])

  useEffect(()=>{
      if(!loggedInUser) {
        
        axios.get(`${config.API_URL}/profile`, {withCredentials: true})
          .then((response) => {
            if(response.data._id) {
              setlogin(response.data)
            }
            else {
              console.log('no user')
              setlogin('NotLoggedIn')
            }
          })
          .catch(()=>{
            console.log('user not found')
          
          })
      }
      getBoardPost();
  }, []);

  const getBoardPost = ()=>{
    axios.get(`${config.API_URL}/board`, {withCredentials:true})
    .then((response)=>{
      setPost(response.data)
    })
    .catch((err) => setError(err.response.data))
  }

  const handleSignUp = (event) => {
    event.preventDefault()

    let user = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password2: event.target.password2.value,
      country: event.target.country.value,
      city: event.target.city.value,
      hobbies: event.target.hobbies.value,
      intro: event.target.intro.value
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
    let newPost= {
      description: event.target.description.value,
    }

    axios.post(`${config.API_URL}/publish`, newPost, {withCredentials: true})
      .then((response)=>{
        setPost(allPost.concat(response.data))
        props.history.push("/board")
      })
      .catch((err) => setError(err))
  }

  const handleEvent = (event) => {
    event.preventDefault()
    let newEvent= {
      title: event.target.title.value,
      description: event.target.description.value,
      tags: event.target.tags.value,
      picture: event.target.picture.value,
      dateEvent: event.target.dateEvent.value,
      hours: event.target.hours.value,
      minutes: event.target.minutes.value,
    }

    axios.post(`${config.API_URL}/event/publish`, newEvent, {withCredentials: true})
      .then((response)=>{
        setAllEvents(allEvents.concat(response.data))
        props.history.push("/board")
      })
      .catch((err) => setError(err))
  }

  const handleDelete = (postId) => {
    axios.delete(`${config.API_URL}/delete/${postId}`)
      .then(() => {
        let filteredPosts = allPost.filter(e => e._id !== postId)
        //update hook allPost
        setPost(filteredPosts)

        //send the user back to the main board
        props.history.push('/board')
      })

      .catch((err) => {
        console.log('Delete failed', err)
      })
  }

  const handleEditProfile= (event)=>{
    event.preventDefault()

    let editedProfile = {
      country: event.target.country.value,
      city: event.target.city.value,
      hobbies: event.target.hobbies.value,
      intro: event.target.intro.value
    }

    axios.patch(`${config.API_URL}/profile/edit`, editedProfile, {withCredentials: true})
     .then((response)=> 
     { setlogin(response.data)
       props.history.push('/profile')}
     )
     .catch((err) => setError(err.response.data))
  }

  const handleEditPic = (event)=>{
    event.preventDefault()

    let imageUrl = event.target.imageUrl.files[0]

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageUrl)

    axios.post(`${config.API_URL}/profile/upload`, uploadForm, {withCredentials: true})
     .then((response)=>{
       setlogin(response.data)
       props.history.push("/profile")
     })
     .catch((err)=> setError(err.response.data))
  }

  const handleLogout= () => {
    axios.post(`${config.API_URL}/logout`, {}, {withCredentials: true})
     .then(()=>{
       setlogin(null)
       props.history.push('/')
     })
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
          return <Board user={loggedInUser} allPost={allPost}/>
        }} />
        <Route exact path="/profile" render={(routeProps) => {
          return <Profile onLogout={handleLogout} user={loggedInUser} onDelete={handleDelete} {...routeProps}/>
        }} />
        <Route exact path="/profile/edit" render={(routeProps) => {
          return <EditForm onEdit={handleEditProfile} user ={loggedInUser} {...routeProps}/>
        }} />
        <Route exact path="/profile/editPic" render={(routeProps) => {
          return <EditPic onEditPic={handleEditPic} user ={loggedInUser} {...routeProps}/>
        }} />
        <Route exact path="/profile/messages" render={() => {
          return <Messages user={loggedInUser}/>
        }} />
        <Route path="/profile/:roomName" render={(routeProps) => {
          return <MessageDetail user={loggedInUser} {...routeProps} />
        }} />
        <Route path="/new-post" render={() => {
          return <NewPost user={loggedInUser} onPost={handlePost} error={error}/>
        }} />
        <Route path="/new-event" render={() => {
          return <NewEvent user={loggedInUser} onAdd={handleEvent} error={error}/>
        }} />

      </Switch>
      <Footer/>

    <UserNavBar/> 
    <NavBar/>
    
      
    </div>
  );
}

export default withRouter(App);
