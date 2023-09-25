import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore">
      <h2>Explore Engineering Courses</h2>
      <p>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>
      <div className="explore-agen">
        <div style={{ border: "none" }}>Agencies</div>
        <div style={{ color: "orange" }}>Bechelors</div>
        <div>Masters</div>
        <div>Doctorate</div>
        <div>Diploma</div>
      </div>
      <div className="explore-flex">
        <CardExplore />
        <CardExplore />
        <CardExplore />
        <CardExplore />
        <CardExplore />
      </div>
    </div>
  );
};

const CardExplore = () => {
  return (
    <div className="card-explore">
      <div className="full">Full Time</div>
      <h2>B.Tech Mechanical Engineering</h2>
      <div>Course Overview</div>
      <p>Duration 4 Years</p>
      <p>Colleges 3771</p>
      <div className="course">Course Overview</div>
    </div>
  );
};

export default Explore;
  
