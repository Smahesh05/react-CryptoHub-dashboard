import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsBoxArrowInUpRight, BsBoxArrowInRight } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import Avalanche from "../assets/avalanche.png";
import "./RightSideBar.css";

const RightSideBar = () => {
  return (
    <div className="right-sidebar-main">
      <div className="right-sidebar-1">
        <div className="avalanche">
          <img src={Avalanche} alt="Avalanche" />
          <span> Avalanche</span>
          <BiChevronDown />
        </div>
        <div className="wallet-text">
          <CiWallet />
          <span>0XF6...1353</span>
          <BiChevronDown />
        </div>
      </div>
      <div className="right-sidebar-2">
        <p className="custom-link">
          <AiOutlineArrowLeft />
          <span>Custom link</span>
        </p>
        <a href="/">https://testnet.xyz.xyz/trade?ref=</a>
        <div className="form">
          <input className="form-control" type="text" placeholder="Enter" />
          <div className="btn-wrapper ">
            <button className="btn custom-link-btn">
              <BsBoxArrowInUpRight />
              <span>Custom link</span>
            </button>
            <button className="btn cancel-btn">
              <BsBoxArrowInRight />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
