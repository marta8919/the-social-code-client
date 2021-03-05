import {React, useState} from 'react'
import {Redirect, Link} from 'react-router-dom'

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Messages(props) {
    const {user} = props

    const [roomName, setRoomName] = useState("")

    if (!user) {
        return <LinearProgress />;
      } else if (user ==="NotLoggedIn") {
        return <Redirect to={"/"} />;
      }

      const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
      };
    
      return (
        <div className="container">
          <input
            type="text"
            placeholder="Room"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input-field"
          />
          <Link to={`/profile/${roomName}`} className="enter-room-button">
            Join room
          </Link>
        </div>
      );
}