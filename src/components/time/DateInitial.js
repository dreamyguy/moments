// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import helpers
import { numberRange } from './../../helpers/helpers';

// Import actions
import {
  setMomentBaseDateAction,
  setMomentBaseNameAction,
  setMomentBaseYearAction,
  setMomentBaseMonthAction,
  setMomentBaseWeekAction,
  setMomentBaseDayAction,
  setMomentBaseHourAction,
  setMomentBaseMinuteAction,
  setMomentBaseSecondAction
} from './../../store/duck/ducks';

class DateInitial extends Component {
  getTimeUnit (mode) {
    const options = [];
    let units = []
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
      theBaseDate = moment().year(value).format('MMMM Do YYYY, h:mm:ss a');
      setMomentBaseYearAction(value);
    } else if (mode === 'month') {
      theBaseDate = moment().year(baseYear).month(value).format('MMMM Do YYYY, h:mm:ss a');
      setMomentBaseMonthAction(value);
    } else if (mode === 'day') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(value).format('MMMM Do YYYY, h:mm:ss a');
      setMomentBaseDayAction(value);
    } else if (mode === 'hour') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(value).format('MMMM Do YYYY, h:mm:ss a');
      setMomentBaseHourAction(value);
    } else if (mode === 'minute') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(value).format('MMMM Do YYYY, h:mm:ss a');
      setMomentBaseMinuteAction(value);
    } else if (mode === 'second') {
      theBaseDate = moment().year(baseYear).month(baseMonth).date(baseDay).hour(baseHour).minute(baseMinute).second(value).format('MMMM Do YYYY, h:mm:ss a');
      setMomentBaseSecondAction(value);
    }
    setMomentBaseDateAction(theBaseDate);
  }
  localizeThousand (value) {
    return value.toLocaleString().replace('-', '');
  }
  timeDiff (before, after, type) {
    const a = moment(before, 'MMMM Do YYYY, h:mm:ss a');
    const b = moment(after, 'MMMM Do YYYY, h:mm:ss a');
    const difference = a.diff(b, type);
    const differenceLocalized = this.localizeThousand(difference);
    return `${differenceLocalized} ${type}`;
  }
  renderBaseDate () {
    const {baseDate} = this.props;
    console.log('[renderBaseDate()]: baseDate');
    console.log(baseDate);
    if (baseDate) {
      return (
        <>
          <p>Base date:</p>
          <p>{baseDate}</p>
        </>
      )
    }
    return null;
  }
  renderAddToBase () {
    const {
      baseDateName = '',
      baseDate,
      addToBaseDateMonths,
      addToBaseDateWeeks,
      addToBaseDateDays,
      addToBaseDateHours,
      addToBaseDateMinutes,
      addToBaseDateSeconds,
    } = this.props;
    if (baseDate) {
      return (
        <React.Fragment>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'years')}</p>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'months')}</p>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'weeks')}</p>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'days')}</p>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'hours')}</p>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'minutes')}</p>
          <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'seconds')}</p>
          {addToBaseDateMonths &&
            <React.Fragment>
              <h4>{this.localizeThousand(addToBaseDateMonths)} months from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateMonths, 'months').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </React.Fragment>
          }
          {addToBaseDateWeeks &&
            <React.Fragment>
              <h4>{this.localizeThousand(addToBaseDateWeeks)} weeks from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateWeeks, 'weeks').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </React.Fragment>
          }
          {addToBaseDateDays &&
            <React.Fragment>
              <h4>{this.localizeThousand(addToBaseDateDays)} days from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateDays, 'days').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </React.Fragment>
          }
          {addToBaseDateHours &&
            <React.Fragment>
              <h4>{this.localizeThousand(addToBaseDateHours)} hours from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateHours, 'hours').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </React.Fragment>
          }
          {addToBaseDateMinutes &&
            <React.Fragment>
              <h4>{this.localizeThousand(addToBaseDateMinutes)} minutes from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateMinutes, 'minutes').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </React.Fragment>
          }
          {addToBaseDateSeconds &&
            <React.Fragment>
              <h4>{this.localizeThousand(addToBaseDateSeconds)} seconds from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateSeconds, 'seconds').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </React.Fragment>
          }
        </React.Fragment>
      )
    }
    return null;
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
      baseDateIsInThePast = false,
      baseDateIsInTheFuture = false,
    } = this.props;
    return (
      <div>
        <h3>DateInitial</h3>
        <div>
          <label className="hidden" htmlFor="date-initial-select-year">Please select a year:</label>
          <select
            id="date-initial-select-year"
            value={baseYear || ''}
            onChange={e => {
              this.setBaseDate(e.target.value, 'year');
            }}
          >
            <option key={uuidv4()} value="">Year</option>
            {this.getTimeUnit('year')}
          </select>
        </div>
        <div>
          <label className="hidden" htmlFor="date-initial-select-month">Please select a month:</label>
          <select
            id="date-initial-select-month"
            value={baseMonth || ''}
            onChange={e => {
              this.setBaseDate(e.target.value, 'month');
            }}
            disabled={!baseYearDefined}
          >
            <option key={uuidv4()} value="">Month</option>
            {this.getTimeUnit('month')}
          </select>
        </div>
        <div>
          <label className="hidden" htmlFor="date-initial-select-day">Please select a day:</label>
          <select
            id="date-initial-select-day"
            value={baseDay || ''}
            onChange={e => {
              this.setBaseDate(e.target.value, 'day');
            }}
            disabled={!baseMonthDefined}
          >
            <option key={uuidv4()} value="">Day</option>
            {this.getTimeUnit('day')}
          </select>
        </div>
        {baseDayDefined &&
          <React.Fragment>
            <div>
              <label className="hidden" htmlFor="date-initial-select-hour">Please select a hour:</label>
              <select
                id="date-initial-select-hour"
                value={baseHour || ''}
                onChange={e => {
                  this.setBaseDate(e.target.value, 'hour');
                }}
              >
                <option key={uuidv4()} value="">Hour</option>
                {this.getTimeUnit('hour')}
              </select>
            </div>
            <div>
              <label className="hidden" htmlFor="date-initial-select-minute">Please select a minute:</label>
              <select
                id="date-initial-select-minute"
                value={baseMinute || ''}
                onChange={e => {
                  this.setBaseDate(e.target.value, 'minute');
                }}
              >
                <option key={uuidv4()} value="">Minute</option>
                {this.getTimeUnit('minute')}
              </select>
            </div>
            <div>
              <label className="hidden" htmlFor="date-initial-select-second">Please select a second:</label>
              <select
                id="date-initial-select-second"
                value={baseSecond || ''}
                onChange={e => {
                  this.setBaseDate(e.target.value, 'second');
                }}
              >
                <option key={uuidv4()} value="">Second</option>
                {this.getTimeUnit('second')}
              </select>
            </div>
          </React.Fragment>
        }
        {this.renderBaseDate()}
        {baseDateIsInThePast &&
          <h3>Time since</h3>
        }
        {baseDateIsInTheFuture &&
          <h3>Time until</h3>
        }
        {this.renderAddToBase()}
      </div>
    );
  }
};

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
  setMomentBaseYearAction,
  setMomentBaseMonthAction,
  setMomentBaseWeekAction,
  setMomentBaseDayAction,
  setMomentBaseHourAction,
  setMomentBaseMinuteAction,
  setMomentBaseSecondAction
}
const DateInitialConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateInitial);

DateInitial.propTypes = {
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
  addToBaseDateMonths: PropTypes.number,
  addToBaseDateWeeks: PropTypes.number,
  addToBaseDateDays: PropTypes.number,
  addToBaseDateHours: PropTypes.number,
  addToBaseDateMinutes: PropTypes.number,
  addToBaseDateSeconds: PropTypes.number,
};

export default DateInitialConnect;
