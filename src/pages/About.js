import React, { Component } from 'react';
import DateNow from './../components/time/DateNow';
import DateInitial from './../components/time/DateInitial';
import TimeSince from './../components/time/TimeSince';
import TimeUntil from './../components/time/TimeUntil';

class About extends Component {
  render() {
    return (
      <>
        <DateNow/>
        <DateInitial/>
        <TimeSince/>
        <TimeUntil/>
      </>
    );
  }
}

export default About;
