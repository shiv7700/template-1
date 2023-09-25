import React from "react";
import "./CollegeNear.css";

const CollegeNear = () => {
  return (
    <div className="top-college-container">
      <div className="college-near">
        <h2>Top Colleges Near - Gurgaon</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="college-cards">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="submit-btn">
          <div className="sumbit">Submit</div>
          <img src="../assets/btn.png" alt="btn" />
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="college-card">
      <div className="clg-left">
        <img src="./assets/clg.png" alt="college" />
      </div>
      <div className="clg-right">
        <h3>Government Polytechnic Education Society (GPES)</h3>
        <p>B.Tech, M.Tech</p>
        <p>Ranked 149 out of 300 NIRF</p>
        <div className="detail">View Details &gt;</div>
      </div>
    </div>
  );
};

export default CollegeNear;
