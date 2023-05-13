import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import {
  BsGrid,
  BsDatabase,
  BsBarChart,
  BsFillShareFill,
} from "react-icons/bs";
import { BiCandles, BiDollarCircle } from "react-icons/bi";
import { RiImageEditLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";

import { TiDocumentText } from "react-icons/ti";

import "./NavList.css";

const NavList = () => {
  return (
    <>
      <ul className="leftsidebar-list">
        <li className="leftsidebar-list-item ">
          <BsGrid />
          Home
        </li>
        <li className="leftsidebar-list-item">
          <VscGraph />
          section 1
        </li>
        <li className="leftsidebar-list-item">
          <BiCandles />
          section 2
        </li>
        <li className="leftsidebar-list-item">
          <RiImageEditLine />
          section 3
        </li>
        <li className="leftsidebar-list-item">
          <BiDollarCircle />
          section 4
        </li>
        <li className="leftsidebar-list-item">
          <BsDatabase />
          section 5
        </li>
        <li className="leftsidebar-list-item">
          <AiOutlinePieChart />
          section 6
        </li>
        <li className="leftsidebar-list-item">
          <BsBarChart />
          section 7
        </li>
        <li className="leftsidebar-list-item active">
          <BsFillShareFill />
          section 8
        </li>

        <li className="leftsidebar-list-item">
          <TiDocumentText />
          Documentation
        </li>
      </ul>
    </>
  );
};

export default NavList;
