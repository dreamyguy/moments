// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import helpers
import { timeDiff } from './../../helpers/helpers';

class AddTimeUnitToDate extends Component {
  render () {
    const {
      baseDate,
      baseDateIsInThePast,
      baseDateIsInTheFuture,
    } = this.props;
    if (baseDate) {
      return (
        <>
          {baseDateIsInThePast &&
            <h3 className="m-t-20 m-b-20">Time since</h3>
          }
          {baseDateIsInTheFuture &&
            <h3 className="m-t-20 m-b-20">Time until</h3>
          }
          <div className="time-unit-output bl-purple">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'years')}
          </div>
          <div className="time-unit-output bl-fuchsia">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'months')}
          </div>
          <div className="time-unit-output bl-red">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'weeks')}
          </div>
          <div className="time-unit-output bl-orange">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'days')}
          </div>
          <div className="time-unit-output bl-yellow">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'hours')}
          </div>
          <div className="time-unit-output bl-fav-green-light">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'minutes')}
          </div>
          <div className="time-unit-output bl-teal">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'seconds')}
          </div>
        </>
      )
    }
    return null;
  }
};

const mapStateToProps = ({main}) => {
  return {
    baseDate: main.baseDate,
    baseDateIsInThePast: main.baseDateIsInThePast,
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
  }
}

const AddTimeUnitToDateConnect = connect(
  mapStateToProps
)(AddTimeUnitToDate);

AddTimeUnitToDate.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
};

export default AddTimeUnitToDateConnect;
