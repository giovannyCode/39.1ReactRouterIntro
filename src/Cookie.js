import React from "react";
import "./Chips.css";

const Cookie = () => {
  return (
    <div className="chips-container">
      <img
        src="https://pluspng.com/img-png/cookie-png-cookie-png-1372.png"
        alt="Cookie"
        className="chips-image"
      />
      <div className="chips-details">
        <h3>Cookie</h3>
        <p>Price: $4.99</p>
      </div>
    </div>
  );
};

export default Cookie;
