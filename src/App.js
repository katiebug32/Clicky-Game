import React, { Component } from "react";
import KittenCard from "./components/KittenCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import kittens from "./kittens.json";
import Navbar from "./components/Navbar";
import KittyContainer from "./components/KittyContainer";




class App extends Component {
  // Setting this.state.kittens to the kittens json array
  state = {
    kittens,
    kittensShuffled: [],
    currentScore: 0,
    highScore: 0,
    clickedKittens: [],
    comment: "Click an image to begin!"
  };


  shuffleImgs = id => {
    let kittensShuffled = this.state.kittens;
    for (let i = kittensShuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [kittensShuffled[i], kittensShuffled[j]] = [kittensShuffled[j], kittensShuffled[i]];
    }
    this.setState({
      kittensShuffled
    })
  }

  kittyClicked = id => {
    console.log(id, "Image is clicked!")
    let clickFlag = false;
    //when img is clicked, check if id is in clickedKittens array
    for (let i = 0; i < this.state.clickedKittens.length; i++) {
      if (id === this.state.clickedKittens[i]) {
        console.log("IF is true");
        clickFlag = true; //set a flag to differentiate which state changes to make
      }
    }
        
    if(clickFlag) {
        // - if id already clicked, setState of comment to "Wrong guess! Play again?", setState of currentScore to 0, empty array
      this.setState({
          comment: "Oops, game over! Click to play again!",
          currentScore: 0,
          clickedKittens: []
        })
    } else {
    // - if not, push id to clickedKittens, setState currentScore to currentScore + 1, shuffle image cards (do this in render, not here), setState of comment to "Good Job, keep guessing!"
        
    //throw the current state into a new variable so state can change values and thus update
        const newClickedKittens = this.state.clickedKittens;
        newClickedKittens.push(id);
    //throw the current state into a new variable so state can change values and thus update
        const newScore = this.state.currentScore +1;
        let newHighScore = this.state.highScore;

    //if the current score beats the previous highest score, then update to the new highest score
        if(newScore > this.state.highScore) {
           newHighScore = newScore;
        }
        this.setState({
          clickedKittens: newClickedKittens,
          currentScore: newScore,
          highScore: newHighScore,
          comment: "Good job, keep guessing!"
        })
        this.shuffleImgs(); //only shuffle the images when the game is still in play
      }
  }

  render() {
    return (
      <Wrapper>
        <Jumbotron>Kitten Clicky Game</Jumbotron>
        <Navbar
          comment={this.state.comment}
          currentScore={this.state.currentScore}
          topScore={this.state.highScore}
        />
        <KittyContainer>
          {this.state.kittens.map(kittens => (
            <KittenCard
              id={kittens.id}
              key={kittens.id}
              image={kittens.image}
              onClick={() => { this.kittyClicked(kittens.id) }}
            />
          ))}
        </KittyContainer>
      </Wrapper>
    );
  }
}

export default App;
