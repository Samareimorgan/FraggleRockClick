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

export default App;
