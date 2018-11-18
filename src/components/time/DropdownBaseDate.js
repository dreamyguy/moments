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
  setBaseDateAction,
  setBaseNameAction,
  setBaseDateIsInThePastAction,
  setBasePeriodAction,
  setBaseYearDefinedAction,
  setAndResetBaseYearAction,
  setAndResetBaseMonthAction,
  setBaseMonthDayCountAction,
  setBaseWeekAction,
  setAndResetBaseDayAction,
  setAndResetBaseHourAction,
  setAndResetBaseMinuteAction,
  setBaseSecondAction
} from './../../store/duck/ducks';

class DropdownBaseDate extends Component {
  setTimePeriod (value) {
    // Determine if date is in the 'past' or 'future'
    const {
      mode = '',
      nowDailyDate = '',
      targetDate = '',
      setBaseDateIsInThePastAction,
      setBasePeriodAction,
      match: {
        params: {
          urlBaseYear = '',
        } = {}
      } = {}
    } = this.props;
    // If 'urlBaseYear' is defined, we are definitely setting our dates based on
    // 'URL' parameters
    console.log('setTimePeriod - DropdownBaseDate');
    if (!urlBaseYear) {
      console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear');
      if (mode === 'relativeToNow' || mode === 'discoverMoment') {
        console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - mode === relativeToNow || mode === discoverMoment');
        if (nowDailyDate) {
          console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - mode === relativeToNow || mode === discoverMoment - nowDailyDate');
          setBasePeriodAction(timePeriod(nowDailyDate, value));
          console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - mode === relativeToNow || mode === discoverMoment - nowDailyDate - setBasePeriodAction(timePeriod(nowDailyDate, value))');
          console.log(`[value]: ${value}`);
          console.log(`[targetDate]: ${nowDailyDate}`);
          console.log(`[timePeriod]: ${timePeriod(nowDailyDate, value)}`);
          if (timePeriod(nowDailyDate, value) === 'past') {
            setBaseDateIsInThePastAction(true);
          } else {
            setBaseDateIsInThePastAction(false);
          }
        }
      } else if (mode === 'betweenTwoDates') {
        console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - mode === betweenTwoDates');
        if (targetDate) {
          console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - mode === betweenTwoDates - targetDate');
          setBasePeriodAction(timePeriod(targetDate, value));
          console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - mode === betweenTwoDates - targetDate - setBasePeriodAction(timePeriod(value, targetDate))');
          console.log(`[value]: ${value}`);
          console.log(`[targetDate]: ${targetDate}`);
          console.log(`[timePeriod]: ${timePeriod(targetDate, value)}`);
          if (timePeriod(targetDate, value) === 'past') {
            setBaseDateIsInThePastAction(true);
          } else {
            setBaseDateIsInThePastAction(false);
          }
        }
      } else {
        console.log('setTimePeriod - DropdownBaseDate - !urlBaseYear - NO MODE');
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
      setBaseDateAction,
      setAndResetBaseYearAction,
      setAndResetBaseMonthAction,
      setBaseMonthDayCountAction,
      setAndResetBaseDayAction,
      setAndResetBaseHourAction,
      setAndResetBaseMinuteAction,
      setBaseSecondAction,
      setBaseYearDefinedAction
    } = this.props;
    let theBaseDate = '';
    let theBaseMonthDayCount = '';
    if (mode === 'year') {
      if (value !== '' && value !== undefined) {
        theBaseDate = moment().year(value).format(MOMENT_TIME_FORMAT);
        theBaseMonthDayCount = moment(theBaseDate, MOMENT_TIME_FORMAT).daysInMonth();
        setBaseMonthDayCountAction(theBaseMonthDayCount);
        setBaseYearDefinedAction(true);
      } else {
        setBaseYearDefinedAction(false);
      }
      setAndResetBaseYearAction(value);
    } else if (mode === 'month') {
      theBaseDate = moment().year(baseYear).month(value).format(MOMENT_TIME_FORMAT);
      theBaseMonthDayCount = moment(theBaseDate, MOMENT_TIME_FORMAT).daysInMonth();
      setBaseMonthDayCountAction(theBaseMonthDayCount);
      setAndResetBaseMonthAction(value);
    } else if (mode === 'day') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(value).format(MOMENT_TIME_FORMAT);
      setAndResetBaseDayAction(value);
    } else if (mode === 'hour') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(value).format(MOMENT_TIME_FORMAT);
      setAndResetBaseHourAction(value);
    } else if (mode === 'minute') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(value).format(MOMENT_TIME_FORMAT);
      setAndResetBaseMinuteAction(value);
    } else if (mode === 'second') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(baseMinute).second(value).format(MOMENT_TIME_FORMAT);
      setBaseSecondAction(value);
    }
    this.setTimePeriod(theBaseDate);
    setBaseDateAction(theBaseDate);
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
    nowDailyDate: main.nowDailyDate,
    targetDate: main.targetDate,
    mode: main.mode,
  }
}
const mapDispatchToProps = {
  setBaseDateAction,
  setBaseNameAction,
  setBaseDateIsInThePastAction,
  setBasePeriodAction,
  setBaseYearDefinedAction,
  setAndResetBaseYearAction,
  setAndResetBaseMonthAction,
  setBaseMonthDayCountAction,
  setBaseWeekAction,
  setAndResetBaseDayAction,
  setAndResetBaseHourAction,
  setAndResetBaseMinuteAction,
  setBaseSecondAction
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
  nowDailyDate: PropTypes.string,
  targetDate: PropTypes.string,
  mode: PropTypes.string,
};

export default DropdownBaseDateConnect;
