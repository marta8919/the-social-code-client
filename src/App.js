import {React, useState, useEffect} from "react";
import { Switch, Route, withRouter} from "react-router-dom";

//Styles 
import { LinearProgress } from "@material-ui/core";

//Components and Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewPost from "./pages/NewPost";
import NewEvent from "./pages/NewEvent";
import Profile from "./pages/Profile";
import Board from "./pages/Board";
import axios from 'axios'
import config from './config.js'
import Footer from './components/Footer'
import UserNavBar from './components/NavBarUser'
import NavBar from './components/NavBar'
import EditProfile from './pages/EditProfile'
import EditPic from './pages/EditPic'
import EditEvent from './pages/EditEvent'
import NotFound from './pages/NotFound'


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
              setlogin('NotLoggedIn')
            }
          })
          .catch((err)=> console.log(err))
      }
      
  }, []);

  const handleLogIn = (event)=> {
    event.preventDefault()

    let user = {
      email: event.target.email.value,
      password : event.target.password.value,
    }

    axios.post(`${config.API_URL}/signin`, user, {withCredentials: true})
     .then((response)=>{
       setlogin(response.data)
       props.history.push("/profile") 
     })
     .catch((err) => setError(err.response.data))

  }

  const handlePost = (event)=> {
    event.preventDefault()
    let newPost= {
      title: event.target.title.value,
      description: event.target.description.value,
      postType: event.target.postType.value,
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
      link: event.target.link.value,
      dateOriginal: event.target.dateOriginal.value,
      dateString: event.target.dateString.value,
      hours: event.target.hours.value,
      minutes: event.target.minutes.value,
    }

    axios.post(`${config.API_URL}/event/publish`, newEvent, {withCredentials: true})
      .then((response)=>{
        setAllEvents(allEvents.concat(response.data))
        props.history.push("/board")
      })
      .catch((err) => setError(err.response.data))
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

  const handleNavBar = () => {
    if (!loggedInUser) {
      return (<LinearProgress />)
    } else if (loggedInUser === "NotLoggedIn") {
      return <NavBar/>
    }
    else{
      return <UserNavBar user={loggedInUser}/> 
    }
  }

  return (
    <>

    <div className="main">
      <Switch>
        <Route exact path="/" render={() => {
          return <HomePage/>
        }} />
        <Route path="/signup" render={(routeProps) => {
          return <SignUp {...routeProps} />
        }} />
        <Route path="/login" render={() => {
          return <Login loginUser={handleLogIn} error={error} />
        }} />
        <Route path="/about" render={() => {
          return <AboutUs/>
        }} />
        <Route path="/board" render={() => {
          return <Board user={loggedInUser}/>
        }} />
        <Route exact path="/profile" render={(routeProps) => {
          return <Profile onLogout={handleLogout} user={loggedInUser} {...routeProps}/>
        }} />
        <Route exact path="/profile/edit" render={(routeProps) => {
          return <EditProfile onEdit={handleEditProfile} user ={loggedInUser} {...routeProps}/>
        }} />
        <Route exact path="/profile/editPic" render={(routeProps) => {
          return <EditPic onEditPic={handleEditPic} user={loggedInUser} {...routeProps}/>
        }} />
        <Route path="/new-post" render={() => {
          return <NewPost user={loggedInUser} onPost={handlePost} error={error}/>
        }} />
        <Route path="/new-event" render={() => {
          return <NewEvent user={loggedInUser} onAdd={handleEvent} error={error}/>
        }} />
        <Route path="/event/:eventId/edit" render={(routeProps) => {
        return <EditEvent {...routeProps}/>}}/>
        <Route render={() => {
        return <NotFound />}}/>
        
      </Switch>
    </div>
      <Footer/>


      {
       handleNavBar() 
      }
      
      
    
      
    </>
  );
}

export default withRouter(App);
