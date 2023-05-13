import React from "react";

import { BsBoxArrowInRight, BsBoxArrowInUpRight } from "react-icons/bs";
import { CgCopy } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { TbMoneybag } from "react-icons/tb";
import "./MainContainer.css";
import TableComponent from "./TableComponent";

const MainContent = () => {
  return (
    <div className="main-container">
      <section>
        <div className="section-header">
          <h3 className="">Section</h3>
          <button className="btn ">
            <BsBoxArrowInRight />
            <span>0.2 $iBFR</span>
            <span>Tire 1</span>
          </button>
        </div>
        <div className="main-content">
          <div className="content-1">
            <span className="cross">
              <RxCross2 />
            </span>
            <p className="title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span>Tutorial</span>
          </div>
          <div className="content-2">
            <div className="reward-content">
              <h3>Your rewards</h3>
              <h1>$ 0.26231428</h1>
              <div className="reward-content-span">
                <span>$40 AVAX</span>
                <span>$10 BNB</span>
                <span>$210 BTC</span>
              </div>
            </div>

            <button className="btn custom-link-btn">
              <BsBoxArrowInUpRight />
              <span>Custom link</span>
            </button>
          </div>
          <div className="card-list">
            <div className="card-item">
              <div>
                <span>
                  <TbMoneybag />
                </span>
                <h2>12.5% of fee</h2>
              </div>
              <p className="referral-link">Your Referral Link for xyz</p>
              <div className="url-copy">
                <p>https://unityexchange.design </p>
                <CgCopy />
              </div>
            </div>
            <div className="card-item">
              <div>
                <span>
                  <TbMoneybag />
                </span>
                <h2>12.5% of fee</h2>
              </div>
              <p className="referral-link">Your Referral Link for xyz</p>
              <div className="url-copy">
                <p>https://unityexchange.design </p>
                <CgCopy />
              </div>
            </div>
          </div>
          <TableComponent />
        </div>
      </section>
    </div>
  );
};

export default MainContent;
