import React, { Component } from "react";
import KittenCard from "./components/KittenCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import kittens from "./kittens.json";
import Navbar from "./components/Navbar";
import KittyContainer from "./components/KittyContainer";




class App extends Component {

  // let commentArr = ['Click an image to begin!', "Nice job! Keep going!", "Oh no, wrong guess! Play again!" ];
  
  // Setting this.state.kittens to the kittens json array
  state = {
    kittens,
    currentScore: 0,
    highScore: 0,
    clickedKittens: [],
    comment: "Click an image to begin!"
  };

  kittyClicked = id => {
    //when img is clicked, check if id is in clickedKittens array
      // - if not,  push id to clickedKittens, setState currentScore to currentScore + 1, shuffle image cards (do this in render, not here), setState of comment to "Good Job, keep guessing!"
       // - if so, setState of comment to "Wrong guess! Play again?", setState of currentScore to 0, empty array
  }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
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
          />
          ))}
        </KittyContainer>
      </Wrapper>
    );
  }
}

export default App;
