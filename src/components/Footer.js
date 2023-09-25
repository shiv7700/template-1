import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="top-footer">
          <FooterCard />
          <OtherLink />
        </div>
        <div className="lower-footer">
          © 2023 Admission in - All rights reserved. Designed & Developed by
          AbyM Technology
        </div>
      </div>
    </>
  );
};

const FooterCard = () => {
  return (
    <div className="footer-card">
      <div>
        <h5>Top Colleges</h5>
        <div>MBA </div>
        <div>B.Tech/BE</div>
        <div>MCA</div>
        <div>BCA</div>
        <div>M.Tech</div>
        <div>MA</div>
        <div>BA</div>
      </div>
      <div>
        <h5>Top University</h5>
        <div>Engineering </div>
        <div>Management</div>
        <div>Medical</div>
        <div>Law</div>
        <div>Commerce</div>
        <div>Science</div>
        <div>Arts</div>
      </div>
      <div>
        <h5>Top Exams</h5>
        <div>CAT </div>
        <div>GATE</div>
        <div>Jee-Main</div>
        <div>NEET</div>
        <div>XAT</div>
        <div>CLAT</div>
        <div>MAT</div>
      </div>
      <div>
        <h5>Study Abroad</h5>
        <div>Canada </div>
        <div>USA</div>
        <div>UK</div>
        <div>UAE</div>
        <div>Australia</div>
        <div>MAGermany</div>
        <div>Sweden</div>
      </div>
      <div className="specal">
        <div>Ireland </div>
        <div>New Zealand</div>
        <div>Hong Kong</div>
        <div>Singapore</div>
        <div>Malaysia</div>
        <div>Netherlands</div>
        <div>Italy</div>
      </div>
      <div>
        <h5>Board Exams</h5>
        <div>CBSE Class 12 </div>
        <div>CBSE Class 12th Result </div>
        <div>CBSE Class 12th Syllabus </div>
        <div>CBSE Class 12th Exam Dates </div>
        <div>CBSE Class 10 </div>
        <div>CBSE Class 10th Result </div>
        <div>CBSE Class 10 </div>
      </div>
    </div>
  );
};

const OtherLink = () => {
  return (
    <div className="other-link">
      <div className="other">
        <div style={{}}>Other Links :</div>
        <div>Admission in</div>
        <div>Contact Us</div>
        <div>Career</div>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
