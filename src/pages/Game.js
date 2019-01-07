import React, { Component } from "react";
import { characters, shuffleCharacters } from "../services/characterService";
import CharacterCard from "../components/CharacterCard/index";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Header from "../components/Header/index";
import Footer from "../components/footer";

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
    let characters = shuffleCharacters();
    this.setState({ characters });
  };

  handleClick = id => {
    // Clone this.state.clickedCharacters to the clickedCharacters object
    // We'll modify this object and use it to set our component's state
    let clickedCharacters = [...this.state.clickedCharacters];
    let gameMessage = this.state.gameMessage;
    if (clickedCharacters.indexOf(id) === -1) {
      // The user clicks on a new character
      // Run function to increase current score and check top score
      this.handleIncrement();
      // Append the id of clicked characters to an array
      clickedCharacters.push(id);
      this.setState({ clickedCharacters });
      console.log(this.state.clickedCharacters);
    } else {
      // The user clicks on the same character
      gameMessage = "You guess the duplicate. Start a new round!";
      clickedCharacters = [];
      this.setState({ clickedCharacters, gameMessage });
      this.handleReset();
    }
  };

  handleIncrement = () => {
    console.log("Handle Increment!!");
    let { currentScore, topScore, gameMessage } = this.state;
    currentScore++;
    if (currentScore >= topScore) {
      topScore = currentScore;
    } else if (currentScore === 18) {
      this.handleWin();
    }

    gameMessage =
      gameMessage === "You guess correctly!"
        ? "Correct! Keep going!"
        : "You guess correctly!";

    this.setState({ currentScore, topScore, gameMessage });
    // Shuffle Character Cards
    this.handleShuffle();
  };

  handleReset = () => {
    console.log("Handle Reset!!");

    this.setState({
      clickedCharacters: [],
      currentScore: 0,
      gameMessage: "You guess the duplicate. Start a new round!"
    });

    // Shuffle Character Cards
    this.handleShuffle();
  };

  handleWin = () => {
    //Win
    console.log("Handle Win!!");
    this.setState({
      gameMessage: "You Win!"
    });
  };

  renderCharacter = character => {
    return (
      <Column size="md-2 sm-4" key={character.id}>
        <CharacterCard
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Game;
