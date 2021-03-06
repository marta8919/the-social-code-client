import React from 'react'
import {Redirect} from 'react-router-dom'

// import "./ChatRoom.css";
import useChat from "../useChat";

//components from Material UI
import LinearProgress from "@material-ui/core/LinearProgress";

export default function MessageDetail(props) {
    const {user} = props
    const { roomId } = props.match.params; // Gets roomId from URL
    const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    if (!user) {
        return <LinearProgress />;
    } else if (user == "NotLoggedIn") {
        return <Redirect to={"/"} />;
    }

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
    };

    return (
        <div className="container">
          <h1 className="room-name">Room: {roomId}</h1>
          <div className="messages-container">
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser ? "my-message" : "received-message"
                  }`}
                >
                  {message.body}
                </li>
              ))}
            </ol>
          </div>
          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field"
          />
          <button onClick={handleSendMessage} className="send-message-button">
            Send
          </button>
        </div>
      );
}