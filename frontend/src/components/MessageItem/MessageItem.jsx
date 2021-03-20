import React from "react";
import { Link } from "react-router-dom";

const MessageItem = ({ message }) => {
  return (
    <li>
      <Link to='#'>
        <img src='profile.jpg' alt='' />
        <div class='contact'>
          <div class='name'>{message.username}</div>
          <div class='message'>{message.messageContent}</div>
        </div>
      </Link>
    </li>
  );
};

export default MessageItem;
