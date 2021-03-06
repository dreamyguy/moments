// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import utils
import { numberRange } from './../../utils/rangeUtil';

// Import components
import DropdownTargetDate from './DropdownTargetDate';
import InputYearTargetDate from './InputYearTargetDate';

class DatePickerTargetDate extends Component {
  getTimeUnit (mode) {
    const {
      targetMonthDayCount
    } = this.props;
    const options = [];
    let units = [];
    if (mode === 'year') {
      const thisYear = moment().year();
      units = numberRange(1900, thisYear);
    } else if (mode === 'month') {
      units = moment.localeData().months();
    } else if (mode === 'day') {
      if (targetMonthDayCount) {
        units = numberRange(1, targetMonthDayCount);
      } else {
        units = numberRange(1, 31);
      }
    } else if (mode === 'hour') {
      units = numberRange(0, 23);
    } else if (mode === 'minute' || mode === 'second') {
      units = numberRange(0, 59);
    }
    units.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    if (mode === 'year') {
      return options.reverse();
    }
    return options;
  }
  renderInstructions () {
    const {
      // Props passed down
      instructionStart = 'To get started, enter a year:',
      instructionYearDefined = 'Refine your date:',
      // Props passed from store
      targetYearDefined = false,
    } = this.props;
    let instructions = '';
    const optional = <span className="optional">(optional)</span>;
    if (!targetYearDefined) {
      instructions = instructionStart;
    } else {
      instructions = instructionYearDefined;
    }
    return (
      <div className="m-b-10 align-center">
        {instructions} {!targetYearDefined ? '' : optional}
      </div>
    );
  }
  render () {
    const {
      targetYearDefined = false,
      targetMonthDefined = false,
      targetDayDefined = false,
      targetYear = '',
      targetMonth = '',
      targetDay = '',
      targetHour = '',
      targetMinute = '',
      targetSecond = '',
    } = this.props;
    return (
      <>
        {this.renderInstructions()}
        <div className="container-flex date-picker">
          <InputYearTargetDate
            tabIndex = "1"
            value = {targetYear}
          />
          {targetYearDefined &&
            <DropdownTargetDate
              tabIndex = "1"
              options = {this.getTimeUnit('month')}
              value = {targetMonth}
              type = "month"
            />
          }
          {targetMonthDefined &&
            <DropdownTargetDate
              tabIndex = "1"
              options = {this.getTimeUnit('day')}
              value = {targetDay}
              type = "day"
            />
          }
          {targetDayDefined &&
            <>
              <DropdownTargetDate
                tabIndex = "1"
                options = {this.getTimeUnit('hour')}
                value = {targetHour}
                type = "hour"
              />
              <DropdownTargetDate
                tabIndex = "1"
                options = {this.getTimeUnit('minute')}
                value = {targetMinute}
                type = "minute"
              />
              <DropdownTargetDate
                tabIndex = "1"
                options = {this.getTimeUnit('second')}
                value = {targetSecond}
                type = "second"
              />
            </>
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = ({main}) => {
  return {
    targetYearDefined: main.targetYearDefined,
    targetMonthDefined: main.targetMonthDefined,
    targetDayDefined: main.targetDayDefined,
    targetYear: main.targetYear,
    targetMonth: main.targetMonth,
    targetMonthDayCount: main.targetMonthDayCount,
    targetDay: main.targetDay,
    targetHour: main.targetHour,
    targetMinute: main.targetMinute,
    targetSecond: main.targetSecond,
  }
}

const DatePickerTargetDateConnect = connect(
  mapStateToProps
)(DatePickerTargetDate);

DatePickerTargetDate.propTypes = {
  // Props passed down
  instructionStart: PropTypes.string,
  instructionYearDefined: PropTypes.string,
  // Props passed from store
  targetYearDefined: PropTypes.bool,
  targetMonthDefined: PropTypes.bool,
  targetDayDefined: PropTypes.bool,
  targetYear: PropTypes.string,
  targetMonth: PropTypes.string,
  targetMonthDayCount: PropTypes.number,
  targetDay: PropTypes.string,
  targetHour: PropTypes.string,
  targetMinute: PropTypes.string,
  targetSecond: PropTypes.string,
};

export default DatePickerTargetDateConnect;
