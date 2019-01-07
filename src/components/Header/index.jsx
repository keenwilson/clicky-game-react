import React from "react";
import "./style.css";

const Header = ({ title, gameMessage, currentScore, topScore }) => {
  return (
    <div className="clouds d-flex justify-content-center align-items-center">
      <h3 className="text-left heading">{title}</h3>
      <h4 className="text-center heading">{gameMessage}</h4>
      <h3 className="text-center heading">
        Current Score: {currentScore} | Top Score: {topScore}
      </h3>
    </div>
  );
};

export default Header;
