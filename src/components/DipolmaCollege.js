import React from "react";
import "./DipolmaCollege.css";

const DipolmaCollege = () => {
  const en = "Engineering";
  const outOf = "out of 300";
  const colName = ["Madras", "Delhi", "Bombay", "Kanpur"];
  const state = ["Chennai", "New Delhi", "Mumbai", "Kanpur"];
  const jrd = "Indian Institute of Technology";
  return (
    <>
      <div className="dipolma-eng">
        <h2>Diploma in Engineering College Ranking 2022</h2>
        <p>
          Lorem ipsum is placeholder text commonly previewing visual mockups.
        </p>
        <div className="agencies">
          <div style={{ border: "none" }}>Agencies: </div>
          <div style={{ border: "none", backgroundColor: "#FFA200" }}>NIRF</div>
          <div>Indiatoday</div>
          <div>Outlook</div>
          <div>The Week</div>
          <div>ΤΟΙ</div>
          <div>The India Express</div>
          <div>Times Engineering</div>
          <div>Successful CDs</div>
          <div>Chronicle</div>
        </div>

        <table rules="none" className="college-table">
          <tr style={{ backgroundColor: "#0B2C4D", color: "#ECF5F7" }}>
            <td>College</td>
            <td>Ranking</td>
            <td>Streams</td>
          </tr>
          <tr>
            <td>
              IIT {colName[0]} - {jrd} - (IITM),{state[0]}
            </td>
            <td>1 {outOf} </td>
            <td> {en} </td>
          </tr>
          <tr>
            <td>
              IIT {colName[1]} - {jrd} - (IITM),{state[1]}
            </td>
            <td>2 {outOf} </td>
            <td> {en} </td>
          </tr>

          <tr>
            <td>
              IIT {colName[2]} - {jrd} - (IITM),{state[2]}
            </td>
            <td>3 {outOf} </td>
            <td> {en} </td>
          </tr>
          <tr>
            <td>
              IIT {colName[3]} - {jrd} - (IITM),{state[3]}
            </td>
            <td>4 {outOf} </td>
            <td> {en} </td>
          </tr>
          <tr>
            <td>
              IIT {colName[0]} - {jrd} - (IITM),{state[0]}
            </td>
            <td>5 {outOf} </td>
            <td> {en} </td>
          </tr>
          <tr>
            <td>
              IIT {colName[1]} - {jrd} - (IITM),{state[1]}
            </td>
            <td>6 {outOf} </td>
            <td> {en} </td>
          </tr>
          <tr>
            <td>
              IIT {colName[2]} - {jrd} - (IITM),{state[2]}
            </td>
            <td>7 {outOf} </td>
            <td> {en} </td>
          </tr>
        </table>
        
      </div>
      <TopPlace />
    </>
  );
};

const TopPlace = () => {
  const countryName = [
    "Mumbai",
    "Pune",
    "Bangalore",
    "Ahmedabad",
    "Gujrart",
    "Maharashtra",
  ];

  return (
    <div className="top-place">
      <h2>Top Study Places For Diploma in Engineering</h2>
      <p>Lorem ipsum is placeholder text commonly previewing visual mockups.</p>
      <div className="best-for-state">
        <div>
          <img src="../assets/c1.png" alt="c" />
          <h4>{countryName[0]}</h4>
        </div>
        <div>
          <img src="../assets/c2.png" alt="c" />
          <h4>{countryName[1]}</h4>
        </div>
        <div>
          <img src="../assets/c3.png" alt="c" />
          <h4>{countryName[2]}</h4>
        </div>
        <div>
          <img src="../assets/c4.png" alt="c" />
          <h4>{countryName[3]}</h4>
        </div>
        <div>
          <img src="../assets/c5.png" alt="c" />
          <h4>{countryName[4]}</h4>
        </div>
        <div>
          <img src="../assets/c6.png" alt="c" />
          <h4>{countryName[5]}</h4>
        </div>
      </div>
    </div>
  );
};

export default DipolmaCollege;
