import React, { Component } from 'react';
import Date from './../components/time/Date';
import Now from './../components/time/Now';
import DatePicker from './../components/time/DatePicker';

class About extends Component {
  render() {
    return (
      <>
        <DatePicker/>
        <Date
          heading = 'Now'
          date = {<Now/>}
        />
      </>
    );
  }
}

export default About;
