// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import helpers
import { numberRange, timeDiff } from './../../helpers/helpers';

// Import components
import Dropdown from './Dropdown';
import Date from './Date';

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
  renderBaseDate () {
    const {baseDate} = this.props;
    if (baseDate) {
      return (
        <Date
          heading = "Base date"
          date = {baseDate}
          classes = "bl-fav-orange-dark"
        />
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
        <>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'years')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'months')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'weeks')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'days')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'hours')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'minutes')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'seconds')}</p>
          {addToBaseDateMonths &&
            <>
              <h4>{this.localizeThousand(addToBaseDateMonths)} months from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateMonths, 'months').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateWeeks &&
            <>
              <h4>{this.localizeThousand(addToBaseDateWeeks)} weeks from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateWeeks, 'weeks').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateDays &&
            <>
              <h4>{this.localizeThousand(addToBaseDateDays)} days from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateDays, 'days').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateHours &&
            <>
              <h4>{this.localizeThousand(addToBaseDateHours)} hours from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateHours, 'hours').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateMinutes &&
            <>
              <h4>{this.localizeThousand(addToBaseDateMinutes)} minutes from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateMinutes, 'minutes').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateSeconds &&
            <>
              <h4>{this.localizeThousand(addToBaseDateSeconds)} seconds from {baseDateName}</h4>
              <p>{moment(baseDate).add(addToBaseDateSeconds, 'seconds').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
        </>
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
      <>
        <div className="container-flex m-t-20">
          <Dropdown
            tabIndex = '1'
            options = {this.getTimeUnit('year')}
            value = {baseYear}
            type = 'year'
          />
          <Dropdown
            tabIndex = '1'
            options = {this.getTimeUnit('month')}
            value = {baseMonth}
            type = 'month'
            disabled={!baseYearDefined}
            classes = {!baseYearDefined ? 'hidden' : ''}
          />
          <Dropdown
            tabIndex = '1'
            options = {this.getTimeUnit('day')}
            value = {baseDay}
            type = 'day'
            disabled={!baseMonthDefined}
            classes = {!baseMonthDefined ? 'hidden' : ''}
          />
          {baseDayDefined &&
            <>
              <Dropdown
                tabIndex = '1'
                options = {this.getTimeUnit('hour')}
                value = {baseHour}
                type = 'hour'
              />
              <Dropdown
                tabIndex = '1'
                options = {this.getTimeUnit('minute')}
                value = {baseMinute}
                type = 'minute'
              />
              <Dropdown
                tabIndex = '1'
                options = {this.getTimeUnit('second')}
                value = {baseSecond}
                type = 'second'
              />
            </>
          }
        </div>
        <div>
          {this.renderBaseDate()}
          {baseDateIsInThePast &&
            <h3>Time since</h3>
          }
          {baseDateIsInTheFuture &&
            <h3>Time until</h3>
          }
          {this.renderAddToBase()}
        </div>
      </>
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

const DateInitialConnect = connect(
  mapStateToProps
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
