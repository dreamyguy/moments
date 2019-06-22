// Import dependencies
import React, { Component } from 'react';
import ForkMeOnGithub from 'fork-me-on-github';

// Import components
import Header from './layout/Header';
import Footer from './layout/Footer';
import ModePicker from './../components/time/ModePicker';
import NowTicker from './../components/time/NowTicker';

class App extends Component {
  render () {
    return (
      <div className="app">
        <ForkMeOnGithub repo="https://github.com/dreamyguy/moments" isPride/>
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
