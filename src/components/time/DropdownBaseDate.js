// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import constants
import { MOMENT_TIME_FORMAT } from './../../config';

// Import utils
import { timePeriod } from './../../utils/timePeriodUtil';

// Import actions
import {
  setMomentBaseDateAction,
  setMomentBaseNameAction,
  setMomentBaseDateIsInThePastAction,
  setMomentBaseDateIsInTheFutureAction,
  setMomentBaseYearDefinedAction,
  setMomentBaseYearAction,
  setMomentBaseMonthAction,
  setMomentBaseWeekAction,
  setMomentBaseDayAction,
  setMomentBaseHourAction,
  setMomentBaseMinuteAction,
  setMomentBaseSecondAction
} from './../../store/duck/ducks';

class DropdownBaseDate extends Component {
  setTimePeriod (value) {
    // Determine if date is in the 'past' or 'future'
    const {
      nowYear = '',
      setMomentBaseDateIsInThePastAction,
      setMomentBaseDateIsInTheFutureAction,
    } = this.props;
    if (nowYear) {
      if (timePeriod(nowYear, value) === 'past') {
        setMomentBaseDateIsInThePastAction(true);
        setMomentBaseDateIsInTheFutureAction(false);
      } else if (timePeriod(nowYear, value) === 'future') {
        setMomentBaseDateIsInThePastAction(false);
        setMomentBaseDateIsInTheFutureAction(true);
      } else {
        setMomentBaseDateIsInThePastAction(false);
        setMomentBaseDateIsInTheFutureAction(false);
      }
    }
  }
  setBaseDate (value, mode) {
    const {
      baseYear,
      baseMonth,
      baseDay,
      baseHour,
      baseMinute,
      setMomentBaseDateAction,
      setMomentBaseYearAction,
      setMomentBaseMonthAction,
      setMomentBaseDayAction,
      setMomentBaseHourAction,
      setMomentBaseMinuteAction,
      setMomentBaseSecondAction,
      setMomentBaseYearDefinedAction
    } = this.props;
    let theBaseDate = '';
    if (mode === 'year') {
      if (value !== '' && value !== undefined) {
        theBaseDate = moment().year(value).format(MOMENT_TIME_FORMAT);
        setMomentBaseYearDefinedAction(true);
      } else {
        setMomentBaseYearDefinedAction(false);
      }
      setMomentBaseYearAction(value);
      this.setTimePeriod(value);
    } else if (mode === 'month') {
      theBaseDate = moment().year(baseYear).month(value).format(MOMENT_TIME_FORMAT);
      setMomentBaseMonthAction(value);
    } else if (mode === 'day') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(value).format(MOMENT_TIME_FORMAT);
      setMomentBaseDayAction(value);
    } else if (mode === 'hour') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(value).format(MOMENT_TIME_FORMAT);
      setMomentBaseHourAction(value);
    } else if (mode === 'minute') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(value).format(MOMENT_TIME_FORMAT);
      setMomentBaseMinuteAction(value);
    } else if (mode === 'second') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(baseMinute).second(value).format(MOMENT_TIME_FORMAT);
      setMomentBaseSecondAction(value);
    }
    setMomentBaseDateAction(theBaseDate);
  }
  render () {
    const {
      tabIndex = 1,
      options = [],
      value = '',
      type = '',
      disabled = false,
      classes = ''
    } = this.props;
    return (
      <>
        <label className="hidden" htmlFor="date-initial-select-hour">{`Please select a ${type}:`}</label>
        <select
          tabIndex = {tabIndex}
          id = {`date-initial-select-${type}`}
          value = {value}
          onChange = {e => {
            this.setBaseDate(e.target.value, type);
          }}
          disabled = {disabled}
          style = {{textTransform: 'capitalize'}}
          className = {`form__dropdown m-b-20 ${classes}`}
        >
          <option key={uuidv4()} value="">{type}</option>
          {options}
        </select>
      </>
    );
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseYear: main.baseYear,
    baseMonth: main.baseMonth,
    baseDay: main.baseDay,
    baseHour: main.baseHour,
    baseMinute: main.baseMinute,
    nowYear: main.nowYear,
  }
}
const mapDispatchToProps = {
  setMomentBaseDateAction,
  setMomentBaseNameAction,
  setMomentBaseDateIsInThePastAction,
  setMomentBaseDateIsInTheFutureAction,
  setMomentBaseYearDefinedAction,
  setMomentBaseYearAction,
  setMomentBaseMonthAction,
  setMomentBaseWeekAction,
  setMomentBaseDayAction,
  setMomentBaseHourAction,
  setMomentBaseMinuteAction,
  setMomentBaseSecondAction
}
const DropdownBaseDateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownBaseDate);

DropdownBaseDate.propTypes = {
  // Props related to select, passed down
  options: PropTypes.array.isRequired,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  // Props related to choices, passed from state
  baseYear: PropTypes.string,
  baseMonth: PropTypes.string,
  baseDay: PropTypes.string,
  baseHour: PropTypes.string,
  baseMinute: PropTypes.string,
  nowYear: PropTypes.string,
};

export default DropdownBaseDateConnect;
