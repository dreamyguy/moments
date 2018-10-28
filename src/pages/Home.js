// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import Date from './../components/time/Date';
import Now from './../components/time/Now';
import DatePicker from './../components/time/DatePicker';
import AddTimeUnitToDate from './../components/time/AddTimeUnitToDate';

class Home extends Component {
  render() {
    const {baseDate} = this.props;
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
            {baseDate &&
              <div className="col-12">
                <Date
                  heading = "Base date"
                  date = {baseDate}
                  classes = "bl-fav-orange-dark"
                />
              </div>
            }
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


const mapStateToProps = ({main}) => {
  return {
    baseDate: main.baseDate,
  }
}

const HomeConnect = connect(
  mapStateToProps
)(Home);

Home.propTypes = {
  baseDate: PropTypes.string,
};

export default HomeConnect;
