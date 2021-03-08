import React from 'react'
import { Link } from 'react-router-dom'

import { StylesProvider } from '@material-ui/core/styles';
import '../App.css'
import CardAbout from '../components/CardAbout';


export default function AboutUs() {
    return (
        <div className="container">
        <StylesProvider injectFirst>
            <h1 className="header">About us</h1>
            <p className="text-left">
                Hi! We are Sofia & Marta, two passionate FullStack Developers, we love sharing our experience in development and now we want to offer you the possibility to communicate among other Tech-professionals! 
                The Social Code (TSC) is a platform that allows developers to post their ideas and create online events to share their knowledge and experiences.

                Would you like to help us grow up?
            </p>

            <Link to="/signup" className="white">
                Join the TBS community!
            </Link>

            <div className="section">
                <h3 className="header">Why joining The Social Code?</h3>
                <CardAbout image="./images/example.png" title="Join a community"/>
                <CardAbout image="./images/example.png" title="Sharing is caring!"/>
                <CardAbout image="./images/example.png" title="What happens in TSC stays in TSC"/>
            </div>

            <div className="section text-center">
                <h3 className="title">Meet the team</h3>

                <div className="team">
                    <div className="team-card">
                        <img src="images/sofia.png" className="team-img mb-4" alt="Sofia Urbano"/>
                        
                        <div className="contact">
                            <a href="https://github.com/SofSanUrb"><i className="fab fa-github fa-lg"></i></a>
                            <a href="https://www.linkedin.com/in/sof%C3%ADa-s%C3%A1nchez-urbano-76953b64/"><i className="fab fa-linkedin fa-lg"></i></a>
                        </div>
                        <h4 className="mb-4 mt-4">Sofia Sanchez</h4>
                        <p className="text-left">Who doesn't love a good puzzle? That's how I feel about coding!
                        I'm a developer and a building architect, specialized in Web Development, BIM Management and committed to ambitious projects with new challenges.
                        My journey into programming began learning about the Revit API and Web Development, and from the first 'Hello World', I was hooked.
                        </p>
                    </div>
                    
                    <div className="team-card">
                        <img src="images/martasnow.png" className="team-img mb-4" alt="Marta Gilabert"/>
                        <div className="contact">
                            <a href="https://github.com/marta8919"><i className="fab fa-github fa-lg"></i></a>
                            <a href="https://www.linkedin.com/in/martagilabertgu"><i className="fab fa-linkedin fa-lg"></i></a>
                        </div>
                    <h4 className="mb-4 mt-4">Marta Gilabert</h4>
                    <p className="text-left">To live is to learn, that's my motto. I've always loved to learn new things and to put myself out of the comfort zone, trying to solve problems in the most creative way. A few years ago I opened for the first time freecodecamp.org, at got so impressed by how big and unknown to me this world was. Since then, I have not stopped learning.</p>
                    </div>
                </div>
            </div>

        </StylesProvider>
        </div>
    )
}
