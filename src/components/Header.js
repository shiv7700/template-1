import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-nav">
        <img src="./assets/adm.png" alt="admission" />
      </div>
      <div className="right-nav">
        <div className="top-nav">
          <div>TOP UNIVERSITIES & COLLEGES</div>
          <div>TOP COURSES</div>
          <div>EXAMS</div>
          <div>EVENTS</div>
          <div className="hover-me">
            Log in
            <div className="user-login">
              <div>Login</div>
              <div>Signup</div>
              <div>Wish List</div>
              <div>Logout</div>
            </div>
          </div>
        </div>
        <div className="bottom-nav">
          <div>
            MBA <img src="./assets/down.png" alt="down arrow" />
          </div>
          <div>ENGINEERING</div>
          <div>MEDICAL</div>
          <div>DIPLOMA</div>
          <div>COUNSELING</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
