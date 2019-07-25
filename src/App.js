import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import MLB from "./mlb.json";
import "./App.css";

class App extends Component {
  state = {
    MLB,
    clickedMLB: [],
    score: 0
  };







  imageClick = event => {
    const currentMLB = event.target.alt;
    const MLBAlreadyClicked =
      this.state.clickedMLB.indexOf(currentMLB) > -1;

    if (MLBAlreadyClicked) {
      this.setState({
        MLB: this.state.MLB.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedMLB: [],
        score: 0
      });
        alert("Sorry try again");

    } else {
      this.setState(
        {
          MLB: this.state.MLB.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedMLB: this.state.clickedMLB.concat(
            currentMLB
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 10) {
            alert("10 is the magic number You Win! You Win! You Win! You Win! You Win! You Win! You Win! You Win! You Win!");
            this.setState({
              MLB: this.state.MLB.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedMLB: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.MLB.map(MLB => (
            <Cards
              imageClick={this.imageClick}
              id={MLB.id}
              key={MLB.id}
              image={MLB.image}
            />
          ))}
        </div>
      <p id="inst"><br></br>Remember! Do Not pick the same player twice!</p>
      </div>
    );
  }
}
export default App;