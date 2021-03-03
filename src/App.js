import React from "react";
//External Elements
import { Switch, Route } from "react-router-dom";

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
import NavBar from "./components/NavBar";



function App() {
  const handleSignUp = (event) => {
    event.preventDefault()
    console.log('hey there')
  }

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" render={() => {
          return <HomePage/>
        }} />
        <Route path="/signup" render={() => {
          return <SignUp addUser={handleSignUp}/>
        }} />
        <Route path="/login" render={() => {
          return <Login/>
        }} />
        <Route path="/about" render={() => {
          return <AboutUs/>
        }} />
        <Route path="/board" render={() => {
          return <Board/>
        }} />
        <Route exact path="/profile" render={() => {
          return <Profile/>
        }} />
        <Route path="/profile/messages" render={() => {
          return <Messages/>
        }} />
        <Route path="/profile/:messageId" render={(routeProps) => {
          return <MessageDetail {...routeProps} />
        }} />
        <Route path="/new-post" render={() => {
          return <NewPost/>
        }} />
        
      </Switch>
    </div>
  );
}

export default App;
