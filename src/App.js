import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      welcome: "Hey there"
    }
  }

  changeWelcome(welcome){
    this.state({welcome})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome>{this.state.welcome}</Welcome>
        </header>
        <p className="App-intro">
          <label htmlFor="welcome">Say Hey!</label>
          <input type="text" onChange={this.changeWelcome}/>
        </p>
      </div>
    );
  }
}

export default App;
