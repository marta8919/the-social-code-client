import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";


function HomePage() {
  return (
    <div>
      
      <h1>Welcome to The Social Code!</h1>
      <Link to="/signup">
        <Button variant="contained">Join us Today!</Button>
      </Link>
    </div>
  );
}

export default HomePage;
