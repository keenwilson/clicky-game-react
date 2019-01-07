import React from "react";
import "./style.css";

const CharacterCard = props => {
  return (
    <div
      className="card"
      data-value={props}
      onClick={() => props.handleClick(props.id)}
    >
      <img
        src={props.image}
        className="chara img-thumbnail rounded"
        alt={props.title}
      />
    </div>
  );
};

export default CharacterCard;
