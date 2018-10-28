import React, { Component } from 'react';
import Date from './../components/time/Date';
import Now from './../components/time/Now';
import DatePicker from './../components/time/DatePicker';
import AddTimeUnitToDate from './../components/time/AddTimeUnitToDate';

class Home extends Component {
  render() {
    return (
      <section className="section section--alt">
        <div className="container m-t-20 m-b-20">
          <div className="row">
            <div className="col-12">
              <DatePicker/>
            </div>
          </div>
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
              <AddTimeUnitToDate />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
