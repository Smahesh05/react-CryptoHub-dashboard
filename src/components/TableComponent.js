import React from "react";

import "./TableComponent.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import data from "./DummyData.json";

const TableComponent = () => {
  return (
    <>
      <div className="table-container">
        <div className="table-header">
          <h3 className="table-active">First Tab</h3>
          <h3>Second Tab</h3>
        </div>
        <div>
          <ul className="table-head">
            <li>Assets</li> <li>Amount</li> <li>User Account</li>
            <li>Referral earning</li>
          </ul>
          <ul className="table-body">
            {data.map((curr, id) => (
              <li key={id}>
                <div className="child">
                  <img src={curr.img} alt="item" />
                  <div className="list-child-item">
                    <p>Bitcoin</p>
                    <span>Put</span>
                  </div>
                </div>
                <div className="child">
                  <div className="list-child-item">
                    <p className="">0.0000 BNB</p>
                    <span>Expired</span>
                  </div>
                </div>
                <p className="child"> 0xFbE..0f58A7D</p>
                <div className="child">
                  <div className="list-child-item">
                    <p>0.000.BNB</p>

                    <span>
                      View on BSC Scan <BsBoxArrowUpRight />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
