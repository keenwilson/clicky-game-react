import React from "react";
import "./style.css";

const Header = ({
  title,
  description,
  rule,
  logo,
  gameMessage,
  currentScore,
  topScore
}) => {
  return (
    <React.Fragment>
      <div className="row hero clouds text-center">
        <div className="col-sm-12 col-md-2">
          <img className="logo" src={logo} alt="Sanrio" width="" />
        </div>
        <div className="col-sm-12 col-md-10">
          <h3 className="text-center heading">{title}</h3>
          <p className="heading">
            Click on 18 different characters and rememeber not to click on the
            same one again!
          </p>
          <div className="d-flex bd-highlight">
            <h4 className="text-center heading mr-auto p-2 bd-highlight">
              {gameMessage}
            </h4>
            <h5 className="text-center heading p-2 bd-highlight">
              Current Score: {currentScore} | Top Score: {topScore}
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
