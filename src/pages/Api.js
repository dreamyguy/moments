import React, { Component } from 'react';
import Date from './../components/time/Date';
import Now from './../components/time/Now';
import DateInitial from './../components/time/DateInitial';
import TimeSince from './../components/time/TimeSince';
import TimeUntil from './../components/time/TimeUntil';

class Api extends Component {
  render() {
    return (
      <>
        <Date
          heading = 'Now'
          date = {<Now/>}
        />
        <DateInitial/>
        <TimeSince/>
        <TimeUntil/>
      </>
    );
  }
}

export default Api;
