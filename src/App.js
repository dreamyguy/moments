import React, { Component } from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
