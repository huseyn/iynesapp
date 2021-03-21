import React from "react";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

const HomePage = () => {
  return (
    <div className='chat'>
      <Sidebar />
      <Content />
    </div>
  );
};

export default HomePage;
