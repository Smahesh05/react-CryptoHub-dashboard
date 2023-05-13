import React from "react";
import "./Dashboard.css";

import RightSideBar from "./RightSideBar";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <MainContent />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
