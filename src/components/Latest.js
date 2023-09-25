import React from "react";
import "./Latest.css";

const sayam = "January 12, 2023";

const Latest = () => {
  const infor = [
    "How to prepare for banking exams",
    `Today everybody wants a safe and secure job.
A Bank officer is a safe and secure job.....`,
    "Benefits of Pursuing MBA after B.Tech",
    "Does having an MBA give engineers a competitive edge in the workplace and access to new skills?",
    "Tips and techniques to prepare and ace the exam",
    "National-level entrance exam for students to get admission into MBBS, BDS, AYUSH nursing.... ",
  ];

  const imgUrl = [];
  return (
    <>
      <div className="latest-block">
        <h2>Latest News & Stories</h2>
        <p>
          Lorem ipsum is placeholder text commonly previewing visual mockups.
        </p>
        <div className="lard">
          <div style={{ border: "2px solid #F9D382", color: "#F9D382" }}>
            Exam News
          </div>
          <div>College News</div>
          <div>Admission News</div>
        </div>
        <div className="cards-lates">
          <LatestCard />
        </div>
      </div>
      <Subscribe />
      <ComLink />
    </>
  );
};

const LatestCard = () => {
  return (
    <>
      <div className="latest-card-1">
        <img src="../assets/l1.png" alt="l1" />
        <p style={{ marginTop: "10px" }}>{sayam}</p>
        <h4>How to prepare for banking exams </h4>
        <p>
          Today everybody wants a safe and secure job. A Bank officer is a safe
          and secure job.....
        </p>
        <div className="read-more">Read More</div>
        <div
          style={{
            backgroundColor: "#FFA200",
            height: "10px",
            marginTop: "48.2px",
          }}
        ></div>
      </div>
      <div className="latest-card-2">
        <img src="../assets/l2.png" alt="l1" />
        <p style={{ marginTop: "10px" }}>{sayam}</p>
        <h4>Benefits of Pursuing MBA after B.Tech </h4>
        <p>
          Does having an MBA give engineers a competitive edge in the workplace
          and access to new skills?
        </p>
        <div className="read-more">Read More</div>
        <div
          style={{
            backgroundColor: "#FFA200",
            height: "10px",
            marginTop: "50px",
          }}
        ></div>
      </div>
      <div className="latest-card-3">
        <img src="../assets/l3.png" alt="l1" />
        <p style={{ marginTop: "10px" }}>{sayam}</p>
        <h4>Tips and techniques to prepare and ace the exam</h4>
        <p>
          National-level entrance exam for students to get admission into MBBS,
          BDS, AYUSH nursing....
        </p>
        <div className="read-more">Read More</div>
        <div
          style={{
            backgroundColor: "#FFA200",
            height: "10px",
            marginTop: "50px",
          }}
        ></div>
      </div>
    </>
  );
};

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2>Subscribe to Our News Letter</h2>
      <p>Get College Notifications, Exam Notifications and News Updates</p>
      <div className="three">
        <div>
          <input type="text" placeholder="Enter your email id" />
        </div>
        <div>
          <input type="text" placeholder="Enter your mobile number" />
        </div>
        <div className="select-int">
          <select>
            <option value="">Choose your course</option>
            <option value="">Engineering</option>
            <option value="">Power Ranger</option>
          </select>
        </div>
      </div>
      <div className="submit-btn">
        <div className="sumbit">Submit</div>
        <img src="../assets/btn.png" alt="btn" />
      </div>
    </div>
  );
};

const ComLink = () => {
  return (
    <div className="com-link">
      <h2>Company Useful Links</h2>
      <p>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>
      <div className="links">
        <LinkCard />
      </div>
    </div>
  );
};

const LinkCard = () => {
  return (
    <div className="link-card">
      <div>Visa Information </div>
      <div style={{ color: "orange", border: "2px solid orange" }}>
        Company Profile
      </div>
      <div>Customer Care </div>
      <div>University Offering</div>
      <div>Side Map</div>
      <div>Gift Cards</div>
      <div>Company Profile</div>
      <div>Customer Care</div>
      <div>University Offering</div>
      <div>Side Map</div>
    </div>
  );
};

export default Latest;
