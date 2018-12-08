import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import characters from "./characterInfo.json";

class App extends Component {
  // Setting this.state.character to the characters json array
  state = {
    characters
  };


  // Map over this.state.characters and render a CharacterCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar />
        <Jumbotron />
       
        {this.state.characters.map(characterInfo => (
          <CharacterCard
            id={characterInfo.id}
            key={characterInfo.id}
            name={characterInfo.name}
            image={characterInfo.image}
               />
        ))}
      </Wrapper>
    );
  }
}

//  Create a blank array.
// Add click event that when user clicks on a character card, the id number is compared to the id numbers in the array. 
//If the id number matches one already in the array, then indicates that the guess is wrong and does an animate shakes then it resets the score. 
// if the id does not match one already in an array, then the id is pushed to the array, indicates that the guess was correct and the score goes up by 1. 

//Function if score = 12, the game is over and the player has won. Play new game button appears. 

export default App;
