import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-default navbar-fixed-top"> 
        <p className="rules" > Score: {this.props.score} </p>
        <p className="rules" > In order to win you must pick 10 different players no repeats! </p>
        <h3 id="title">MLB Clicky Game</h3>
      </nav>


    );
  }
}

export default Navbar;