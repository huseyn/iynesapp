import React from "react";
import Search from "../Search";
import MessageList from "../MessageList";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Search />
      <MessageList />
    </div>
  );
};

export default Sidebar;
