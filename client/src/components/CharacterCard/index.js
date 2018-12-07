import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="Row">
        <div className="clearfix">
            <div className="gallery">
            <img className="characterImage" alt={props.name} src={props.image} width="150" height="150"/>
                <div className ="desc">{props.name}</div>
            </div>
        </div>
        </div>
    );
  }
  
  export default CharacterCard;
  