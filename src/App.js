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
import Profile from "./pages/Profile";
import Board from "./pages/Board";
import MessageDetail from "./pages/MessageDetail";
import axios from 'axios'
import config from './config.js'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import UserNavBar from './components/NavBarUser'

function App(props) {

  const [loggedInUser, setlogin] = useState(null)
  const [error, setError] = useState(null)
  const [allPost, setPost] = useState([])

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
      title: event.target.title.value,
      description: event.target.description.value,
      code: event.target.code.value,
      postType: event.target.postType.value,
    }

    axios.post(`${config.API_URL}/publish`, newPost, {withCredentials: true})
      .then((response)=>{
        setPost(allPost.concat(response.data))
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
  
  // const handleDraft = (post) => {
  //   console.log("Draft works")
  //   let title = post.title
  //   let description = post.description

  //   let newPost= {
  //     title: title,
  //     description: description,
  //   }

  //   axios.post(`${config.API_URL}/new-draft`, newPost, {withCredentials: true})
  //   .then(()=>{ 
  //     props.history.push("/board")
  //     console.log("draft saved")
  //   })
  //   .catch((err) => setError(err.response.data))
  // }

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
          return <Board user={loggedInUser} allPost={allPost} getPost={getBoardPost}/>
        }} />
        <Route exact path="/profile" render={(routeProps) => {
          return <Profile user={loggedInUser} onDelete={handleDelete} {...routeProps}/>
        }} />
        <Route path="/profile/messages" render={() => {
          return <Messages user={loggedInUser}/>
        }} />
        <Route path="/profile/:messageId" render={(routeProps) => {
          return <MessageDetail user={loggedInUser} {...routeProps} />
        }} />
        <Route path="/new-post" render={() => {
          return <NewPost user={loggedInUser} onPost={handlePost} error={error}/>
        }} />

       

      </Switch>
      <Footer/>

    <UserNavBar/> 
    <NavBar/>
    
      
    </div>
  );
}

export default withRouter(App);
