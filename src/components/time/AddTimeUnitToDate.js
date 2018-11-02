// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import utils
import { timeDiff } from './../../utils/timeDiffUtil';

class AddTimeUnitToDate extends Component {
  render () {
    const {
      baseDate,
      nowDate,
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
            {timeDiff(baseDate, nowDate, 'years')}
          </div>
          <div className="time-unit-output bl-fuchsia">
            {timeDiff(baseDate, nowDate, 'months')}
          </div>
          <div className="time-unit-output bl-red">
            {timeDiff(baseDate, nowDate, 'weeks')}
          </div>
          <div className="time-unit-output bl-orange">
            {timeDiff(baseDate, nowDate, 'days')}
          </div>
          <div className="time-unit-output bl-yellow">
            {timeDiff(baseDate, nowDate, 'hours')}
          </div>
          <div className="time-unit-output bl-fav-green-light">
            {timeDiff(baseDate, nowDate, 'minutes')}
          </div>
          <div className="time-unit-output bl-teal">
            {timeDiff(baseDate, nowDate, 'seconds')}
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
    nowDate: main.nowDate,
  }
}

const AddTimeUnitToDateConnect = connect(
  mapStateToProps
)(AddTimeUnitToDate);

AddTimeUnitToDate.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
  nowDate: PropTypes.string,
};

export default AddTimeUnitToDateConnect;
