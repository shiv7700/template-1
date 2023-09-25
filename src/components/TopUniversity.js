import React from "react";
import "./TopUniversity.css";

const TopUniversity = () => {
  return (
    <>
      <div className="top-university">
        <h2>Top Universities / Colleges for Diploma in Engineering</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="uni-cards">
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
          <UniversityCard />
        </div>
        <div className="submit-btn">
          <div className="sumbit">Submit</div>
          <img src="../assets/btn.png" alt="btn" />
        </div>
      </div>
      <Countries />
    </>
  );
};

const UniversityCard = () => {
  return (
    <div className="university-card">
      <img src="../assets/col.png" alt="col" />
      <div className="flex-col">
        <div className="flex-left">
          <img src="../assets/cc1.png" alt="cc1" />
        </div>
        <div className="flex-right">
          <h6>
            Maharaja Sayajirao <br /> University of Baroda (MSU)
          </h6>
          <p>Vododara, Gujarat</p>
        </div>
      </div>
      <hr style={{ color: "#B07D5A" }} />
      <div className="college-content">
        <h5>
          B.Tech | M.Tech | BCA | MCA | MBA | D. Pharma <br /> B. Pharma |
          Polytechnic | B.Ed.....
        </h5>
        <p>Ranked 149 out of 300 NIRF</p> <hr />
        <p>View all courses & fees</p> <hr />
        <p>Download Brouchure</p> <hr />
        <p>Compare</p>
      </div>
    </div>
  );
};

const Countries = () => {
  const countryName = [
    "UK",
    "USA",
    "Canada",
    "Ireland",
    "Australia",
    "India",
    "South Africa",
  ];

  return (
    <div className="countries">
      <h2>Countries</h2>
      <p>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>
      <div className="countries-collection">
        <div>
          <img src="../assets/c1.png" alt="c" />
          <h3>{countryName[0]}</h3>
        </div>
        <div>
          <img src="../assets/c2.png" alt="c" />
          <h3>{countryName[1]}</h3>
        </div>
        <div>
          <img src="../assets/c3.png" alt="c" />
          <h3>{countryName[2]}</h3>
        </div>
        <div>
          <img src="../assets/c4.png" alt="c" />
          <h3>{countryName[3]}</h3>
        </div>
        <div>
          <img src="../assets/c5.png" alt="c" />
          <h3>{countryName[4]}</h3>
        </div>
        <div>
          <img src="../assets/c6.png" alt="c" />
          <h3>{countryName[5]}</h3>
        </div>
        <div>
          <img src="../assets/c1.png" alt="c" />
          <h3>{countryName[6]}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopUniversity;
