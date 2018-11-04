// Import dependencies
import React, { Component } from 'react';

// Import components
import Header from './layout/Header';
import ModePicker from './../components/time/ModePicker';
import NowTicker from './../components/time/NowTicker';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header/>
        <ModePicker/>
        <div className="content">
          {this.props.children}
        </div>
        <NowTicker/>
      </div>
    );
  }
}

export default App;
