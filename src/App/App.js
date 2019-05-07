import React, { Component } from 'react';
import './App.css';
import BeerContainer from '../BeerContainer'
import * as API from '../Utils'

class App extends Component {
  
  async componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="main-heading">Freddie's Beer Cooler</h1>
        </header>
        <main>
          <BeerContainer />
        </main>
      </div>
    );
  }
}

export default App;
