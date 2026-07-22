import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  // Increment Counter
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Decrement Counter
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // Static Hello Message
  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  // Multiple Methods
  incrementAndHello = () => {
    this.increment();
    this.sayHello();
  };

  // Welcome Message
  sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event
  onPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Event Examples App</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.incrementAndHello}>
          Increment
        </button>

        <button
          onClick={this.decrement}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>

        <br />
        <br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br />
        <br />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
