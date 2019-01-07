import React from "react";
import "./style.css";

const Header = ({
  title,
  description,
  logo,
  gameMessage,
  currentScore,
  topScore
}) => {
  return (
    <React.Fragment>
      <div className="row clouds text-center">
        <div className="col-sm-12 col-md-2">
          <img className="logo" src={logo} alt="Sanrio" width="" />
        </div>
        <div className="col-sm-12 col-md-10">
          <h3 className="text-center heading">{title}</h3>
          <p className="heading">{description}</p>
          <div className="d-flex bd-highlight">
            <h4 className="text-center heading mr-auto p-2 bd-highlight">
              {gameMessage}
            </h4>
            <h3 className="text-center heading p-2 bd-highlight">
              Current Score: {currentScore} | Top Score: {topScore}
            </h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
