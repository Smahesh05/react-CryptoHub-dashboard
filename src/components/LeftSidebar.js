import React from "react";

import "./LeftSidebar.css";
import NavList from "./NavList";
import { BsMoonStarsFill } from "react-icons/bs";
import { WiMoonAltNew } from "react-icons/wi";
import { CiGlobe } from "react-icons/ci";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <div className="user-name-detail">
          <p className="user-name">
            <span className="user-img">M</span>Name
          </p>
          <NavList />
        </div>
        <div className="sidebar-bottom">
          <div className="btn-wrapper">
            <button className="btn btn-primary">
              <span className="user-img">M</span> <span>$0.90</span>
            </button>
            <button className="btn btn-secondary">Buy xyz</button>
          </div>
          <div className="bottom-toggle">
            <CiGlobe />
            <div className="toggle-mode">
              <span className="dark-toggle">
                <BsMoonStarsFill />
              </span>
              <span className="light-toggle">
                <WiMoonAltNew />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
