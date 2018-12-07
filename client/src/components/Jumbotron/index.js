import React from "react";
import "./style.css";

function Jumbotron() {
  return (
  <div className="jumbo">
  <div className="jumbotron jumbotron-fluid">
    <div className="container-fluid">
      <img src="https://raw.githubusercontent.com/Samareimorgan/FraggleRockClick/master/client/public/images/fragglelogo.png"/>
      <h1 className="display-4">CLICK MEMORY GAME</h1>
      <p className="lead">Click on an image to earn points.  Don't click on the same image twice! </p>
    </div>
  </div>
  </div>
  )
}
export default Jumbotron;
