import React from "react";
import MessageItem from "../MessageItem";

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          id: 1,
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          id: 2,
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          id: 3,
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          id: 4,
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
        {
          id: 5,
          username: "Huseyn Mikayil",
          messageContent: "Salam, bu test üçündür.",
        },
      ],
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div className='messages'>
        <ul>
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
