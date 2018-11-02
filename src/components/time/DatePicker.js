// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import utils
import { numberRange } from './../../utils/rangeUtil';

// Import components
import Dropdown from './Dropdown';

class DatePicker extends Component {
  getTimeUnit (mode) {
    const options = [];
    let units = [];
    if (mode === 'year') {
      const thisYear = moment().year();
      units = numberRange(1900, thisYear);
    } else if (mode === 'month') {
      units = moment.localeData().months();
    } else if (mode === 'day') {
      units = numberRange(1, 31);
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
      baseYearDefined = false,
    } = this.props;
    let instructions = '';
    const optional = <span className="optional">(optional)</span>;
    if (!baseYearDefined) {
      instructions = 'To get started, choose a year:'
    } else {
      instructions = 'Refine your date:';
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
        <div className="container-flex">
          <Dropdown
            tabIndex = "1"
            options = {this.getTimeUnit('year')}
            value = {baseYear}
            type = "year"
          />
          <Dropdown
            tabIndex = "1"
            options = {this.getTimeUnit('month')}
            value = {baseMonth}
            type = "month"
            disabled={!baseYearDefined}
            classes = {!baseYearDefined ? 'hidden' : ''}
          />
          <Dropdown
            tabIndex = "1"
            options = {this.getTimeUnit('day')}
            value = {baseDay}
            type = "day"
            disabled={!baseMonthDefined}
            classes = {!baseMonthDefined ? 'hidden' : ''}
          />
          {baseDayDefined &&
            <>
              <Dropdown
                tabIndex = "1"
                options = {this.getTimeUnit('hour')}
                value = {baseHour}
                type = "hour"
              />
              <Dropdown
                tabIndex = "1"
                options = {this.getTimeUnit('minute')}
                value = {baseMinute}
                type = "minute"
              />
              <Dropdown
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
    baseDay: main.baseDay,
    baseHour: main.baseHour,
    baseMinute: main.baseMinute,
    baseSecond: main.baseSecond,
  }
}

const DatePickerConnect = connect(
  mapStateToProps
)(DatePicker);

DatePicker.propTypes = {
  baseYearDefined: PropTypes.bool,
  baseMonthDefined: PropTypes.bool,
  baseDayDefined: PropTypes.bool,
  baseYear: PropTypes.string,
  baseMonth: PropTypes.string,
  baseDay: PropTypes.string,
  baseHour: PropTypes.string,
  baseMinute: PropTypes.string,
  baseSecond: PropTypes.string,
};

export default DatePickerConnect;
