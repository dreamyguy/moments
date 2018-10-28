// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import helpers
import { timePeriod } from './../../helpers/helpers';

// Import actions
import {
  setMomentBaseDateAction,
  setMomentBaseNameAction,
  setMomentBaseDateIsInThePastAction,
  setMomentBaseDateIsInTheFutureAction,
  setMomentBaseYearAction,
  setMomentBaseMonthAction,
  setMomentBaseWeekAction,
  setMomentBaseDayAction,
  setMomentBaseHourAction,
  setMomentBaseMinuteAction,
  setMomentBaseSecondAction
} from './../../store/duck/ducks';

class Dropdown extends Component {
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
    } = this.props;
    let theBaseDate = '';
    if (mode === 'year') {
      theBaseDate = moment().year(value).format('MMMM Do YYYY, HH:mm:ss');
      setMomentBaseYearAction(value);
      this.setTimePeriod(value);
    } else if (mode === 'month') {
      theBaseDate = moment().year(baseYear).month(value).format('MMMM Do YYYY, HH:mm:ss');
      setMomentBaseMonthAction(value);
    } else if (mode === 'day') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(value).format('MMMM Do YYYY, HH:mm:ss');
      setMomentBaseDayAction(value);
    } else if (mode === 'hour') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(value).format('MMMM Do YYYY, HH:mm:ss');
      setMomentBaseHourAction(value);
    } else if (mode === 'minute') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(value).format('MMMM Do YYYY, HH:mm:ss');
      setMomentBaseMinuteAction(value);
    } else if (mode === 'second') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(baseMinute).second(value).format('MMMM Do YYYY, HH:mm:ss');
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
          className = {`m-b-20 ${classes}`}
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
    baseYearDefined: main.baseYearDefined,
    baseMonthDefined: main.baseMonthDefined,
    baseDayDefined: main.baseDayDefined,
    baseYear: main.baseYear,
    baseMonth: main.baseMonth,
    baseDay: main.baseDay,
    baseHour: main.baseHour,
    baseMinute: main.baseMinute,
    baseSecond: main.baseSecond,
    baseDateIsInThePast: main.baseDateIsInThePast,
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
    baseDateName: main.baseDateName,
    baseDate: main.baseDate,
    nowYear: main.nowYear,
    addToBaseDateMonths: main.addToBaseDateMonths,
    addToBaseDateWeeks: main.addToBaseDateWeeks,
    addToBaseDateDays: main.addToBaseDateDays,
    addToBaseDateHours: main.addToBaseDateHours,
    addToBaseDateMinutes: main.addToBaseDateMinutes,
    addToBaseDateSeconds: main.addToBaseDateSeconds,
  }
}
const mapDispatchToProps = {
  setMomentBaseDateAction,
  setMomentBaseNameAction,
  setMomentBaseDateIsInThePastAction,
  setMomentBaseDateIsInTheFutureAction,
  setMomentBaseYearAction,
  setMomentBaseMonthAction,
  setMomentBaseWeekAction,
  setMomentBaseDayAction,
  setMomentBaseHourAction,
  setMomentBaseMinuteAction,
  setMomentBaseSecondAction
}
const DropdownConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);

Dropdown.propTypes = {
  // Props related to select, passed down
  options: PropTypes.array.isRequired,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  // Props related to choices, passed from state
  baseYearDefined: PropTypes.bool,
  baseMonthDefined: PropTypes.bool,
  baseDayDefined: PropTypes.bool,
  baseYear: PropTypes.string,
  baseMonth: PropTypes.string,
  baseDay: PropTypes.string,
  baseHour: PropTypes.string,
  baseMinute: PropTypes.string,
  baseSecond: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
  baseDateName: PropTypes.string,
  baseDate: PropTypes.string,
  nowYear: PropTypes.string,
  addToBaseDateMonths: PropTypes.number,
  addToBaseDateWeeks: PropTypes.number,
  addToBaseDateDays: PropTypes.number,
  addToBaseDateHours: PropTypes.number,
  addToBaseDateMinutes: PropTypes.number,
  addToBaseDateSeconds: PropTypes.number,
};

export default DropdownConnect;
