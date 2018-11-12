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
  setTargetDateAction,
  setTargetNameAction,
  setTargetDateIsInThePastAction,
  setTargetDateIsInTheFutureAction,
  setTargetYearDefinedAction,
  setAndResetTargetYearAction,
  setAndResetTargetMonthAction,
  setTargetMonthDayCountAction,
  setTargetWeekAction,
  setAndResetTargetDayAction,
  setAndResetTargetHourAction,
  setAndResetTargetMinuteAction,
  setTargetSecondAction
} from './../../store/duck/ducks';

class DropdownTargetDate extends Component {
  setTimePeriod (value) {
    // Determine if date is in the 'past' or 'future'
    const {
      baseYear = '',
      setTargetDateIsInThePastAction,
      setTargetDateIsInTheFutureAction,
    } = this.props;
    if (baseYear) {
      if (timePeriod(baseYear, value) === 'past') {
        setTargetDateIsInThePastAction(true);
        setTargetDateIsInTheFutureAction(false);
      } else if (timePeriod(baseYear, value) === 'future') {
        setTargetDateIsInThePastAction(false);
        setTargetDateIsInTheFutureAction(true);
      } else {
        setTargetDateIsInThePastAction(false);
        setTargetDateIsInTheFutureAction(false);
      }
    }
  }
  setTargetDate (value, mode) {
    const {
      targetYear,
      targetMonth,
      targetDay,
      targetHour,
      targetMinute,
      setTargetDateAction,
      setAndResetTargetYearAction,
      setAndResetTargetMonthAction,
      setTargetMonthDayCountAction,
      setAndResetTargetDayAction,
      setAndResetTargetHourAction,
      setAndResetTargetMinuteAction,
      setTargetSecondAction,
      setTargetYearDefinedAction
    } = this.props;
    let theTargetDate = '';
    let theTargetMonthDayCount = '';
    if (mode === 'year') {
      if (value !== '' && value !== undefined) {
        theTargetDate = moment().year(value).format(MOMENT_TIME_FORMAT);
        theTargetMonthDayCount = moment(theTargetDate, MOMENT_TIME_FORMAT).daysInMonth();
        setTargetMonthDayCountAction(theTargetMonthDayCount);
        setTargetYearDefinedAction(true);
      } else {
        setTargetYearDefinedAction(false);
      }
      setAndResetTargetYearAction(value);
      this.setTimePeriod(value);
    } else if (mode === 'month') {
      theTargetDate = moment().year(targetYear).month(value).format(MOMENT_TIME_FORMAT);
      theTargetMonthDayCount = moment(theTargetDate, MOMENT_TIME_FORMAT).daysInMonth();
      setTargetMonthDayCountAction(theTargetMonthDayCount);
      setAndResetTargetMonthAction(value);
    } else if (mode === 'day') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(value).format(MOMENT_TIME_FORMAT);
      setAndResetTargetDayAction(value);
    } else if (mode === 'hour') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(targetDay).hour(value).format(MOMENT_TIME_FORMAT);
      setAndResetTargetHourAction(value);
    } else if (mode === 'minute') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(targetDay).hour(targetHour).minute(value).format(MOMENT_TIME_FORMAT);
      setAndResetTargetMinuteAction(value);
    } else if (mode === 'second') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(targetDay).hour(targetHour).minute(targetMinute).second(value).format(MOMENT_TIME_FORMAT);
      setTargetSecondAction(value);
    }
    setTargetDateAction(theTargetDate);
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
            this.setTargetDate(e.target.value, type);
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
    targetYear: main.targetYear,
    targetMonth: main.targetMonth,
    targetDay: main.targetDay,
    targetHour: main.targetHour,
    targetMinute: main.targetMinute,
    baseYear: main.baseYear,
  }
}
const mapDispatchToProps = {
  setTargetDateAction,
  setTargetNameAction,
  setTargetDateIsInThePastAction,
  setTargetDateIsInTheFutureAction,
  setTargetYearDefinedAction,
  setAndResetTargetYearAction,
  setAndResetTargetMonthAction,
  setTargetMonthDayCountAction,
  setTargetWeekAction,
  setAndResetTargetDayAction,
  setAndResetTargetHourAction,
  setAndResetTargetMinuteAction,
  setTargetSecondAction
}
const DropdownTargetDateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownTargetDate);

DropdownTargetDate.propTypes = {
  // Props related to select, passed down
  options: PropTypes.array.isRequired,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  // Props related to choices, passed from state
  targetYear: PropTypes.string,
  targetMonth: PropTypes.string,
  targetDay: PropTypes.string,
  targetHour: PropTypes.string,
  targetMinute: PropTypes.string,
  baseYear: PropTypes.string,
};

export default DropdownTargetDateConnect;
