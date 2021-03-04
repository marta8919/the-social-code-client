import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";
import NavBar from '../components/NavBar'


function HomePage() {
  return (
    <div>
      
      <h1>Welcome to The Social Code!</h1>
      <Link to="/signup">
        <Button variant="contained">Join us Today!</Button>
      </Link>
      <NavBar />
    </div>
  );
}

export default HomePage;
