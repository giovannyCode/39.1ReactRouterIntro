import React from "react";
import "./Chips.css";

const Chips = () => {
  return (
    <div className="chips-container">
      <img
        src="https://mockuptree.com/wp-content/uploads/edd/2022/07/free-chips-bag-mockup.jpg"
        alt="Bag of Potato Chips"
        className="chips-image"
      />
      <div className="chips-details">
        <h3>Potato Chips</h3>
        <p>Price: $2.99</p>
      </div>
    </div>
  );
};

export default Chips;
