import React, { Component } from 'react';
import Date from './../components/time/Date';
import Now from './../components/time/Now';
import DateInitial from './../components/time/DateInitial';
// import TimeSince from './../components/time/TimeSince';
// import TimeUntil from './../components/time/TimeUntil';

class Home extends Component {
  render() {
    return (
      <section className="section section--alt">
        <div className="container m-t-20 m-b-20">
          <div className="row">
            <div className="col-12">
              <Date
                heading = 'Now'
                date = {<Now/>}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <DateInitial/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
