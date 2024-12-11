import React from "react";
import "./Home.css"; // Optional CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Vending Machine</h1>
      <img
        src="https://www.intelligentvending.co.uk/image/1/1207/g-snack-design-line-sdx-vending-machine.jpg"
        alt="Vending Machine"
        className="vending-machine-image"
      />
      <p>Select an item at the top of the screen to get started!</p>
    </div>
  );
};

export default Home;
