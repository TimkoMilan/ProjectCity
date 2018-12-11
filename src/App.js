import React, { Component } from 'react';
import './App.css';
import Cities from './Cities/Cities';

class App extends Component {
  state={
    cities:[
      {city:"Sobrance",country:"SK"},
      {city:"Kosice",country:"SK"},
      {city:"Los Angeles",country:"USA"}
    ]
  }
  render() {
    return (
      <Cities list={this.state.cities}/>
    );
  }
}

export default App;
