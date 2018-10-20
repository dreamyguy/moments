import React, { Component } from 'react';
import moment from 'moment';

class Now extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: null
    }
  }
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick () {
    this.setState({
      now: moment().format('MMMM Do YYYY, h:mm:ss a')
    });
  }
  render () {
    return (
      <React.Fragment>
        {this.state.now}
      </React.Fragment>
    )
  }
};

export default Now;
