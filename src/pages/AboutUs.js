import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import "../App.css";
import Card from "@material-ui/core/Card";
import Fade from "react-reveal/Fade";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function AboutUs() {
  return (
    <Fade bottom>
      <div className="container">
        <Link to="/about">
          <img className="logo" src="https://res.cloudinary.com/martacloud/image/upload/v1615454848/Logo_kzn2xu.png" alt="Main_Logo" />
        </Link>
        <StylesProvider injectFirst>
          <h1 className="header">About us</h1>
          <p>
            The Social Code (TSC) is a platform where developers and technical
            people can share their experiences and create online events to
            network and share knowledge with other people. <br></br>
            Would you like to join our network?
          </p>
          <br></br>

          <Link to="/signup" className="link-underline">
            <Button className="my-btn" variant="contained">
              Join us Today! 🚀{" "}
            </Button>
          </Link>

          <div className="container">
            <h3 className="header">Why joining The Social Code?</h3>
            <div className="section">
              <Card className="about-card">
                <img
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615453347/undraw_Sharing_articles_re_jnkp_rkwhe3.png"
                  className="about-img-card"
                ></img>
                <p>Stay in touch & network</p>
              </Card>
              <Card className="about-card">
                <img
                  className="about-img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615453937/undraw_Online_calendar_re_wk3t_xpffxp.png"
                ></img>
                <p>Participate in events</p>
              </Card>
              <Card className="about-card">
                <img
                  className="about-img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615453773/undraw_Analytics_re_dkf8_tswtlx.png"
                  title="Join a community"
                ></img>
                <p>Learn new skills</p>
              </Card>
            </div>
          </div>

          <div className="container">
            <h3 className="header">Meet the team</h3>
            
            <div className="section">
              <Card className="team-card">
                <img
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615215879/sofia_ssm1gh.png"
                  className="profile-pic"
                  alt="Sofia Urbano"
                />

                <div className="contact">
                  <a href="https://github.com/SofSanUrb">
                  <GitHubIcon/>
                  </a>
                  <a href="https://www.linkedin.com/in/sof%C3%ADa-s%C3%A1nchez-urbano-76953b64/">
                  <LinkedInIcon/>
                  </a>
                </div>

                <h4 className="mb-4 mt-4">Sofia Sanchez</h4>
                <p className="text-left">
                  Who doesn't love a good puzzle? That's how I feel about
                  coding! I'm a developer and a building architect, specialized
                  in Web Development, BIM Management and committed to ambitious
                  projects with new challenges. My journey into programming
                  began learning about the Revit API and Web Development, and
                  from the first 'Hello World', I was hooked.
                </p>
              </Card>

              <Card className="team-card">
                <img
                  src="https://res.cloudinary.com/martacloud/image/upload/v1613666307/martasnow_ctujxn.png"
                  className="profile-pic"
                  alt="Marta Gilabert"
                />
                <div className="contact">
                  <a href="https://github.com/marta8919">
                    <GitHubIcon/>
                  </a>
                  <a href="https://www.linkedin.com/in/martagilabertgu">
                    <LinkedInIcon/>
                  </a>
                </div>
                <h4 className="mb-4 mt-4">Marta Gilabert</h4>
                <p className="text-left">
                  To live is to learn, that's my motto. I've always loved to
                  learn new things and to put myself out of the comfort zone,
                  trying to solve problems in the most creative way. A few years
                  ago I opened for the first time freecodecamp.org, at got so
                  impressed by how big and unknown to me this world was. Since
                  then, I have not stopped learning.
                </p>
              </Card>
            </div>
          </div>
        </StylesProvider>
      </div>
    </Fade>
  );
}
