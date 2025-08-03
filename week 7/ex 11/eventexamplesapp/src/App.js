import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  // Method to increment the counter
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  // Method to decrement the counter
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // Method to say hello
  sayHello() {
    alert("Hello! This is a static message.");
  }

  // Method to say welcome with argument
  sayWelcome(message) {
    alert(message);
  }

  // Synthetic event example
  handlePress = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event:", e);
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>Event Examples App</h1>

        {/* Counter with Increment and Decrement */}
        <h2>Counter: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment();
            this.sayHello();
          }}
          style={{ marginRight: "10px" }}
        >
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>

        {/* Say Welcome Button */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => this.sayWelcome("Welcome!")}>
            Say Welcome
          </button>
        </div>

        {/* Synthetic Event Button */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={this.handlePress}>OnPress</button>
        </div>

        {/* Currency Converter Component */}
        <div style={{ marginTop: "40px" }}>
          <CurrencyConvertor />
        </div>
      </div>
    );
  }
}

export default App;
