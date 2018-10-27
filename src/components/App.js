import React, { Component } from 'react';
import Header from './layout/Header';
// import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
          {this.props.children}
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
