import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      welcome: "Hey there"
    }
  }

  changeWelcome(){
    this.state({welcome})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.welcome}</h1>
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
