// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import utils
import { timeDiff } from './../../utils/timeDiffUtil';

class TimeDifference extends Component {
  renderHeading () {
    const {
      // Passed down
      timeA = '',
      timeB = '',
      // Passed from state
      baseDate,
      nowDate,
      baseDateIsInThePast,
    } = this.props;
    // Support mode '1' & '3'
    if (timeA === baseDate && timeB === nowDate) {
      if (baseDateIsInThePast) {
        return 'Time since';
      }
      return 'Time until';
    }
    // Support mode '2'
    // Note that there will be a check for 'timeA' & 'timeB'
    // around the fallback return, so we're safe doing this
    return 'Time difference';
  }
  render () {
    const {
      timeA,
      timeB,
    } = this.props;
    if (timeA && timeB) {
      return (
        <>
          <h3 className="m-t-20 m-b-20">{this.renderHeading()}</h3>
          <div className="time-unit-output bl-purple">
            {timeDiff(timeA, timeB, 'years')}
          </div>
          <div className="time-unit-output bl-fuchsia">
            {timeDiff(timeA, timeB, 'months')}
          </div>
          <div className="time-unit-output bl-red">
            {timeDiff(timeA, timeB, 'weeks')}
          </div>
          <div className="time-unit-output bl-orange">
            {timeDiff(timeA, timeB, 'days')}
          </div>
          <div className="time-unit-output bl-yellow">
            {timeDiff(timeA, timeB, 'hours')}
          </div>
          <div className="time-unit-output bl-fav-green-light">
            {timeDiff(timeA, timeB, 'minutes')}
          </div>
          <div className="time-unit-output bl-teal">
            {timeDiff(timeA, timeB, 'seconds')}
          </div>
        </>
      )
    }
    return null;
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseDate: main.baseDate,
    baseDateIsInThePast: main.baseDateIsInThePast,
    nowDate: main.nowDate,
  }
}

const TimeDifferenceConnect = connect(
  mapStateToProps
)(TimeDifference);

TimeDifference.propTypes = {
  // Passed down
  timeA: PropTypes.string,
  timeB: PropTypes.string,
  // Passed from state
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  nowDate: PropTypes.string,
};

export default TimeDifferenceConnect;
