import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";
import ReactTypingEffect from 'react-typing-effect';
import Slide from 'react-reveal/Slide';
import {React, useEffect} from "react";


function HomePage() {

  return (
    <div className="container">
      <div className="fake-code">

      <ReactTypingEffect
        text={["Hey you! Welcome to The Social Code. Do you want to join our community?"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        speed = {100}
        typingDelay= {1000}
        eraseDelay={50000}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
      </div>
      

      <Slide bottom>
      <Link to="/signup">
        <Button variant="contained">Join us Today!</Button>
      </Link>
      </Slide>


    </div>
  );
}

export default HomePage;
