import React from "react";
import images from "../../assets/images";

const Header = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Clicky Game</h1>
        <p class="lead">
          A memory game built with Create-React-App for the user to test their
          memory with Hello Kitty and Friends.
        </p>
        <img
          src={images"/character-chococat.jpg"}
          alt="..."
          class="img-thumbnail"
        />
      </div>
    </div>
  );
};

export default Header;
