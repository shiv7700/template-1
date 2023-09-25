import React from "react";
import "./TopCollection.css";

const TopCollection = () => {
  return (
    <>
      <div className="top-collection">
        <h3>Top Collections for Diploma in Engineering</h3>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="collections-flex">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
        <div className="submit-btn">
          <div className="sumbit">Submit</div>
          <img src="../assets/btn.png" alt="btn" />
        </div>
      </div>
      <img className="banner-know" src="../assets/know-clg.png" alt="banner" />
    </>
  );
};

const CollectionCard = () => {
  return (
    <div className="collection-card">
      <div className="collection-left">
        <img src="../assets/collection.png" alt="collection" />
      </div>
      <div className="collection-right">
        <h3>Top colleges in India for Diploma in Engineering</h3>
        <p>
          Check detail for Top colleges in India for Diploma in Engineering for
          Ranking Fees and Admission Details
        </p>
        <div className="view-det">View Details &gt; </div>
      </div>
    </div>
  );
};

export default TopCollection;
