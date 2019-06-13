// Import dependencies
import React, { Component } from 'react';

// Import components
import Header from './layout/Header';
import Footer from './layout/Footer';
import GithubCorner from './layout/GithubCorner';
import ModePicker from './../components/time/ModePicker';
import NowTicker from './../components/time/NowTicker';

class App extends Component {
  render () {
    return (
      <div className="app">
        <GithubCorner href="https://github.com/dreamyguy/moments"/>
        <Header/>
        <ModePicker/>
        <div className="content">
          {this.props.children}
        </div>
        <NowTicker/>
        <Footer/>
      </div>
    );
  }
}

export default App;
