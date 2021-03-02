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
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={AboutUs} />
        <Route path="/board" component={Board} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/messages" component={Messages} />
        <Route path="/profile/:messageId" render={(routeProps) => {
          return <MessageDetail {...routeProps} />
        }} />
        <Route path="/new-post" component={NewPost} />
        
      </Switch>
    </div>
  );
}

export default App;
