import React from "react";
import "./style.css";

function NavBar(props) {
    return (
    
    <nav className="navbar sticky-top navbar-light">
        <a className="clickTitle" >Fraggle Rock Clicky Game</a>
        <h3 className="message">{props.message}</h3>
        <h3>Score: {props.currentScore} | Top Score: {props.topScore}</h3>
    </nav>
    
    );
    
}

export default NavBar;