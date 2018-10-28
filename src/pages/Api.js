import React, { Component } from 'react';
import Date from './../components/time/Date';
import Now from './../components/time/Now';
import DateInitial from './../components/time/DateInitial';

class Api extends Component {
  render() {
    return (
      <>
        <Date
          heading = 'Now'
          date = {<Now/>}
        />
        <DateInitial/>
      </>
    );
  }
}

export default Api;
