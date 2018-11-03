// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import Date from './../components/time/Date';
import DatePicker from './../components/time/DatePicker';
import AddTimeUnitToDate from './../components/time/AddTimeUnitToDate';
import AddTimeUnitToDateFields from './../components/time/AddTimeUnitToDateFields';

class FromDate extends Component {
  render () {
    const {
      baseDate,
    } = this.props;
    return (
      <section className="section section--alt">
        <div className="container m-t-20 m-b-20">
          <div className="row">
            <div className="col-12">
              <DatePicker/>
            </div>
          </div>
          {baseDate &&
            <div className="row">
              <div className="col-12">
                <Date
                  heading = "Set date"
                  date = {baseDate}
                  classes = "bl-fav-orange-dark"
                />
              </div>
            </div>
          }
          <div className="row">
            <div className="col-12">
              <AddTimeUnitToDateFields />
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
    baseDateIsInThePast: main.baseDateIsInThePast,
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
  }
}

const FromDateConnect = connect(
  mapStateToProps
)(FromDate);

FromDate.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
};

export default FromDateConnect;
