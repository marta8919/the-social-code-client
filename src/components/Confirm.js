import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { notify } from "react-notify-toast";
import CircularProgress from "@material-ui/core/CircularProgress";
import config from "../config";
import axios from "axios";
import Fade from "react-reveal/Fade";

export default function Confirm(props) {
  // const [confirming, setConfirming] = useState(true)

  useEffect(() => {
    const { id } = props.match.params;

    axios
      .get(`${config.API_URL}/email/confirm/${id}`)
      .then((response) => {
        // setConfirming(false)
        notify.show(response.data.msg);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fade bottom>
      <div className="confirm container">
        <h3>Email confirmed!</h3>
        <br></br>
        <img
          className="myError-img"
          src="https://res.cloudinary.com/martacloud/image/upload/v1615465074/confirm_mdkkfc.png"
          alt="confirmed"
        />
        <br></br>
        <Link to="/login" className="text-white">
          <h3>You are ready to Login</h3>
        </Link>
      </div>
    </Fade>
  );
}
