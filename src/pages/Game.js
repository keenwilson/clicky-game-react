import React, { Component } from "react";
import { characters, shuffleCharacters } from "../services/characterService";
import CharacterCard from "../components/CharacterCard/index";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Header from "../components/Header/index";

class Game extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    clickedCharacters: [],
    isCorrect: "",
    gameMessage: ""
  };

  handleShuffle = () => {
    console.log("Shuffle Characters!!");
    let characters = shuffleCharacters();
    this.setState({ characters });
  };

  handleClick = id => {
    console.log("Handle Click!!");
    console.log("The user clicks the character id: ", id);

    // Clone this.state.clickedCharacters to the clickedCharacters object
    // We'll modify this object and use it to set our component's state
    const clickedCharacters = [...this.state.clickedCharacters];
    let gameMessage = this.state.gameMessage;
    if (clickedCharacters.indexOf(id) === -1) {
      // The user clicks on a new character
      gameMessage =
        gameMessage === "You guess correctly!"
          ? "Correct! Keep going!"
          : "You guess correctly!";
      console.log("Run function to increase current score and check top score");
      // Append the id of clicked characters to an array
      clickedCharacters.push(id);
      this.setState({ clickedCharacters });
      console.log(this.state.clickedCharacters);
      // Shuffle Character Cards
      this.handleShuffle();
    } else {
      gameMessage = "Oh no, Game resets!";
      // The user clicks on the same character
      console.log("Display message and reset game");
    }
    this.setState({ gameMessage });
  };

  renderCharacter = character => {
    return (
      <Column size="md-2 sm-3">
        <CharacterCard
          key={character.title}
          id={character.id}
          title={character.title}
          image={character.imagePath}
          handleClick={this.handleClick}
        />
      </Column>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header
          title="Hello Kitty Memory Game"
          description="Test your memory with Hello Kitty & Friends. Click on 18 different characters and rememeber not to click on the same one again!"
          rule="Make a successful guess and you get to take another turn."
          logo="https://imgs.weekendhk.com/wp-content/uploads/2018/05/hellokitty_1445215975af29b0cd7e7a.png"
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          gameMessage={this.state.gameMessage}
        />
        <Container>
          <Row>
            {this.state.characters.map(character =>
              this.renderCharacter(character)
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Game;
