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
  setMomentTargetDateAction,
  setMomentTargetNameAction,
  setMomentTargetDateIsInThePastAction,
  setMomentTargetDateIsInTheFutureAction,
  setMomentTargetYearDefinedAction,
  setMomentTargetYearAction,
  setMomentTargetMonthAction,
  setMomentTargetWeekAction,
  setMomentTargetDayAction,
  setMomentTargetHourAction,
  setMomentTargetMinuteAction,
  setMomentTargetSecondAction
} from './../../store/duck/ducks';

class DropdownTargetDate extends Component {
  setTimePeriod (value) {
    // Determine if date is in the 'past' or 'future'
    const {
      baseYear = '',
      setMomentTargetDateIsInThePastAction,
      setMomentTargetDateIsInTheFutureAction,
    } = this.props;
    if (baseYear) {
      if (timePeriod(baseYear, value) === 'past') {
        setMomentTargetDateIsInThePastAction(true);
        setMomentTargetDateIsInTheFutureAction(false);
      } else if (timePeriod(baseYear, value) === 'future') {
        setMomentTargetDateIsInThePastAction(false);
        setMomentTargetDateIsInTheFutureAction(true);
      } else {
        setMomentTargetDateIsInThePastAction(false);
        setMomentTargetDateIsInTheFutureAction(false);
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
      setMomentTargetDateAction,
      setMomentTargetYearAction,
      setMomentTargetMonthAction,
      setMomentTargetDayAction,
      setMomentTargetHourAction,
      setMomentTargetMinuteAction,
      setMomentTargetSecondAction,
      setMomentTargetYearDefinedAction
    } = this.props;
    let theTargetDate = '';
    if (mode === 'year') {
      if (value !== '' && value !== undefined) {
        theTargetDate = moment().year(value).format(MOMENT_TIME_FORMAT);
        setMomentTargetYearDefinedAction(true);
      } else {
        setMomentTargetYearDefinedAction(false);
      }
      setMomentTargetYearAction(value);
      this.setTimePeriod(value);
    } else if (mode === 'month') {
      theTargetDate = moment().year(targetYear).month(value).format(MOMENT_TIME_FORMAT);
      setMomentTargetMonthAction(value);
    } else if (mode === 'day') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(value).format(MOMENT_TIME_FORMAT);
      setMomentTargetDayAction(value);
    } else if (mode === 'hour') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(targetDay).hour(value).format(MOMENT_TIME_FORMAT);
      setMomentTargetHourAction(value);
    } else if (mode === 'minute') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(targetDay).hour(targetHour).minute(value).format(MOMENT_TIME_FORMAT);
      setMomentTargetMinuteAction(value);
    } else if (mode === 'second') {
      theTargetDate = moment().year(targetYear).month(targetMonth).date(targetDay).hour(targetHour).minute(targetMinute).second(value).format(MOMENT_TIME_FORMAT);
      setMomentTargetSecondAction(value);
    }
    setMomentTargetDateAction(theTargetDate);
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
  setMomentTargetDateAction,
  setMomentTargetNameAction,
  setMomentTargetDateIsInThePastAction,
  setMomentTargetDateIsInTheFutureAction,
  setMomentTargetYearDefinedAction,
  setMomentTargetYearAction,
  setMomentTargetMonthAction,
  setMomentTargetWeekAction,
  setMomentTargetDayAction,
  setMomentTargetHourAction,
  setMomentTargetMinuteAction,
  setMomentTargetSecondAction
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
