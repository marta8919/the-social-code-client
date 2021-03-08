import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";
import {React} from "react";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'
// import 'react-typist/dist/standalone/Typist'


function HomePage() {

  return (
    <div className="container">
      <div className="fake-code">

      <Typist>
        <h2>Hello! Hola! Hallo!
        <br></br>
        <br></br>
        Welcome to The Social Code. A social platform that connects techies so we can share our experiences and interests. 
        <br></br>
        <br></br>
        Do you want to join us? 🙂</h2>
        <br></br>

      <Link to="/signup" className="link-underline">
        <Button className="my-btn" variant="contained">Join us Today! 🚀 </Button>
      </Link>
    
      </Typist>
      </div>

    </div>
  );
}

export default HomePage;
