import React from "react";
import MessageItem from "../MessageItem";

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages : [
        {
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
      ]
    }
  }

  render() {
    const { messages } = this.state;
    return (
      <div className='messages'>
        <ul>
          {messages.map((message) => (
            <MessageItem message={message} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
