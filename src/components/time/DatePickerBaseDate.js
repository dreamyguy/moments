// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import utils
import { numberRange } from './../../utils/rangeUtil';

// Import components
import DropdownBaseDate from './DropdownBaseDate';

class DatePickerBaseDate extends Component {
  getTimeUnit (mode) {
    const {
      baseMonthDayCount
    } = this.props;
    const options = [];
    let units = [];
    if (mode === 'year') {
      const thisYear = moment().year();
      units = numberRange(1900, thisYear);
    } else if (mode === 'month') {
      units = moment.localeData().months();
    } else if (mode === 'day') {
      if (baseMonthDayCount) {
        units = numberRange(1, baseMonthDayCount);
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
      instructionStart = 'To get started, choose a year:',
      instructionYearDefined = 'Refine your date:',
      // Props passed from state
      baseYearDefined = false,
    } = this.props;
    let instructions = '';
    const optional = <span className="optional">(optional)</span>;
    if (!baseYearDefined) {
      instructions = instructionStart
    } else {
      instructions = instructionYearDefined;
    }
    return (
      <div className="m-b-10 align-center">
        {instructions} {!baseYearDefined ? '' : optional}
      </div>
    );
  }
  render () {
    const {
      baseYearDefined = false,
      baseMonthDefined = false,
      baseDayDefined = false,
      baseYear = '',
      baseMonth = '',
      baseDay = '',
      baseHour = '',
      baseMinute = '',
      baseSecond = '',
    } = this.props;
    return (
      <>
        {this.renderInstructions()}
        <div className="container-flex date-picker">
          <DropdownBaseDate
            tabIndex = "1"
            options = {this.getTimeUnit('year')}
            value = {baseYear}
            type = "year"
          />
          <DropdownBaseDate
            tabIndex = "1"
            options = {this.getTimeUnit('month')}
            value = {baseMonth}
            type = "month"
            disabled={!baseYearDefined}
            classes = {!baseYearDefined ? 'hidden' : ''}
          />
          <DropdownBaseDate
            tabIndex = "1"
            options = {this.getTimeUnit('day')}
            value = {baseDay}
            type = "day"
            disabled={!baseMonthDefined}
            classes = {!baseMonthDefined ? 'hidden' : ''}
          />
          {baseDayDefined &&
            <>
              <DropdownBaseDate
                tabIndex = "1"
                options = {this.getTimeUnit('hour')}
                value = {baseHour}
                type = "hour"
              />
              <DropdownBaseDate
                tabIndex = "1"
                options = {this.getTimeUnit('minute')}
                value = {baseMinute}
                type = "minute"
              />
              <DropdownBaseDate
                tabIndex = "1"
                options = {this.getTimeUnit('second')}
                value = {baseSecond}
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
    baseYearDefined: main.baseYearDefined,
    baseMonthDefined: main.baseMonthDefined,
    baseDayDefined: main.baseDayDefined,
    baseYear: main.baseYear,
    baseMonth: main.baseMonth,
    baseMonthDayCount: main.baseMonthDayCount,
    baseDay: main.baseDay,
    baseHour: main.baseHour,
    baseMinute: main.baseMinute,
    baseSecond: main.baseSecond,
  }
}

const DatePickerBaseDateConnect = connect(
  mapStateToProps
)(DatePickerBaseDate);

DatePickerBaseDate.propTypes = {
  // Props passed down
  instructionStart: PropTypes.string,
  instructionYearDefined: PropTypes.string,
  // Props passed from state
  baseYearDefined: PropTypes.bool,
  baseMonthDefined: PropTypes.bool,
  baseDayDefined: PropTypes.bool,
  baseYear: PropTypes.string,
  baseMonth: PropTypes.string,
  baseMonthDayCount: PropTypes.number,
  baseDay: PropTypes.string,
  baseHour: PropTypes.string,
  baseMinute: PropTypes.string,
  baseSecond: PropTypes.string,
};

export default DatePickerBaseDateConnect;
