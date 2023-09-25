import React from "react";
import "./NewSkill.css";

const NewSkill = () => {
  return (
    <div className="new-skill">
      <div className="skill-left">
        <h3>
          Learn New Skills Online with Top <span>Educators</span>
        </h3>
        <p>
          Build skills with courses, certificates and degrees online from
          world-class universities and companies.
        </p>
        <input
          type="text"
          placeholder="Search for University, Colleges & Courses"
        />
        <div className="find">
          <div>Find Courses</div>
          <div>Get Your Counselling</div>
          <div>Diploma in Engineering in Gurgaon</div>
        </div>
      </div>
      <div className="skill-right">
        <div className="two-column">
          <div className="two-column-left">
            <img src="../assets/cc11.png" alt="1" />
          </div>
          <div className="two-column-right">
            <img src="../assets/cc22.png" alt="2" className="top-img" />
            <img src="../assets/cc33.png" alt="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSkill;
