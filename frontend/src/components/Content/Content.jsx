import React from "react";
import Header from "../Header";

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      info: {
        username: "Huseyn Mikayil",
        date: "10 dəq əvvəl ",
      },
    };
  }

  render() {
    return (
      <div className='content'>
        <Header info={this.state.info} />
      </div>
    );
  }
}

export default Content;
