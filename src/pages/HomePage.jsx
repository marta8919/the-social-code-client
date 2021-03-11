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


    <Link to="/"><img className="logo" src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png" alt="Main_Logo"/></Link>
      
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
