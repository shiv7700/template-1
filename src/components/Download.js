import React from "react";
import "./Download.css";

const Download = () => {
  return (
    <>
      <div className="download">
        <div className="down-one">
          <div className="down-left">
            <img src="../assets/gs.png" alt="pop" />
          </div>
          <div className="down-right">
            <h2>
              <div className="orang"></div> TESTIMONIALS
            </h2>
            <h1>What our students say about us</h1>

            <div className="orange-card">
              <p>
                "Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups."
              </p>
              <div className="profile">
                <div>
                  <img src="../assets/dp.png" alt="dp" />
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ fontWeight: "bold" }}>Vivek Malhotra</div>
                  <div style={{ fontWeight: "600" }}>CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadTwo />
    </>
  );
};

const DownloadTwo = () => {
  return (
    <div className="down-two">
      <div className="two-left">
        <img src="../assets/mob.png" alt="left" />
      </div>
      <div className="two-right">
        <h1 style={{ fontWeight: "650" }}>Download App</h1>
        <p style={{ width: "400px", fontWeight: "500", fontSize: "17px" }}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <img src="../assets/mob2.png" alt="as" />
        <p style={{ width: "400px", fontWeight: "500", fontSize: "17px" }}>
          Enter your mobile number get link to download
        </p>
        <div className="for-input">
          <div>
            <input type="Number" placeholder="Enter your mobile number"></input>
          </div>
          <div className="send-link">SEND LINK</div>
        </div>
      </div>
    </div>
  );
};

export default Download;
