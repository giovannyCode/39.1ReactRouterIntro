import React from "react";
import "./Chips.css";

const Soda = () => {
  return (
    <div className="chips-container">
      <img
        src="https://images.freecreatives.com/wp-content/uploads/2015/06/soda_can_mockup.jpg"
        alt="Soda Can"
        className="chips-image"
      />
      <div className="chips-details">
        <h3>Soda</h3>
        <p>Price: $2.50</p>
      </div>
    </div>
  );
};

export default Soda;
