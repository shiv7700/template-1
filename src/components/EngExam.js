import React from "react";
import "./EngExam.css";

const EngExam = () => {
  return (
    <>
      <img src="../assets/know-gn.png" alt="green" className="green-banner" />
      <div className="explore-di">
        <h2>Top Diploma in Engineering Exams </h2>
        <p>
          Lorem ipsum is placeholder text commonly previewing visual mockups.
        </p>
        <div className="card-card">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="card">
      <div className="log-col">
        <div className="col-left">
          <img src="../assets/red-cl.png" alt="red" />
        </div>
        <div className="col-right">
          <div>
            <span className="ofl">Offline exams</span>
          </div>
          <div>
            <h4>Upter Jeep</h4>
          </div>
        </div>
      </div>
      <p>Participating Colleges 1 </p>
      <p>Exam Date August 28, 2022</p>
      <p>Exam Level National</p>
      <div className="application">Application Process</div>
      <div className="exam">Exam Info</div>
    </div>
  );
};
export default EngExam;
