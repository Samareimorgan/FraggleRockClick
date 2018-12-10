import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import characters from "./characterInfo.json";

//variable to hold the current score
let currentScore = 0;
//variable to hold the topScore
let topScore = 0;
//Empty array to hold the image ids that are guessed
let guesses=[];
//message variable for the start of the game
let message = "Click an Image to Begin";


class App extends Component {
  // Setting up state
  state = {
    currentScore, 

    topScore,

    characters,

    message, 

    guesses
  };
  
  //Method to reset game after wrong guess
  startOver = () => {
    currentScore = 0;
    message = "Oh No!!! You need to improve your memory. Start Over.";

    (this.state.clickedCharacters.map)= () => {
      characters[i].clicked = false;
    }
    this.setState({message});
    this.setState({characters});  
  }

  //reset current score and Top score to 0 and all other defaults to begin fresh
  resetAllScores = () => {
    topScore = 0; 
    currentScore = 0;
    message = "Please click an image to begin";

    (this.state.clickedCharacters.map)= () => {
      characters[i].clicked = false;
    }

    this.setState({message});
    this.setState({characters});  

  }

  handleOnClick = event => {
    event.preventDefault();
    characters = this.state.characters
    characters.id.push(characters.guesses);
    this.setState(
      this.state
    )
   this.state._characters.id

  }

  setClicked = id => {
    //set constant characters to equal the json information 
    const characters = this.state.characters;
    const clickedCharacter=characters.filter(characters => characters.id === id);

    if (clickedCharacter[0].clicked) {
      this.resetGame();
      
    }  else {
      
    }
  }

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
            clicked={characterInfo.clicked}
               />
        ))}
      </Wrapper>
    );
  }
}


// Add click event that when user clicks on a character card, the id number is compared to the id numbers in the array. 
//If the id number matches one already in the array, then indicates that the guess is wrong and does an animate shakes then it resets the score. 
// if the id does not match one already in an array, then the id is pushed to the array, indicates that the guess was correct and the score goes up by 1. 

//Function if score = 12, the game is over and the player has won. Play new game button appears. 

export default App;
