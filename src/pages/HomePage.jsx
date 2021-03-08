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
        <h2>Hey you! Welcome to The Social Code. Do you want to join our community?</h2>
        <br></br>

      <Link to="/signup" className="link-underline">
        <Button className="my-btn" variant="contained">Join us Today!</Button>
      </Link>
    
      </Typist>
      </div>

    </div>
  );
}

export default HomePage;
