// Import dependencies
import React, { Component } from 'react';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

// Import helpers
import { numberRange } from './../../helpers/helpers';

class DateInitial extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // Because we have to first select 'year', then 'month', then 'day',
      // so that we know how many days the chosen month has.
      // Necessary for 'February' and months with less than 31 days.
      yearSelected: true, // default: false
      monthSelected: true, // default: false
      daySelected: true, // default: false
      yearChosen: 1975, // default: null
      monthChosen: 'February', // default: null
      dayChosen: 19, // default: null
      hourChosen: 21,
      minuteChosen: 0,
      secondChosen: 0,
      chosenDate: null,
      chosenDateIsInThePast: true,    // default: false
      chosenDateIsInTheFuture: false, // default: false
      baseDateName: 'my birthday',    // default: ''
      addToBaseDateYears: null,       // default: null
      addToBaseDateMonths: 600,      // default: null
      addToBaseDateWeeks: 1234,       // default: null
      addToBaseDateDays: 16000,        // default: null
      addToBaseDateHours: 400000,        // default: null
      addToBaseDateMinutes: 23000000,     // default: null
      addToBaseDateSeconds: 1400000000,     // default: null
    }
  }
  getYears () {
    const options = [];
    const thisYear = moment().year();
    const years = numberRange(1900, thisYear);
    years.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    return options.reverse();
  }
  getMonths () {
    const options = [];
    const months = moment.localeData().months();
    months.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    return options;
  }
  getDays () {
    const options = [];
    const days = numberRange(1, 31);
    days.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    return options;
  }
  getHours () {
    const options = [];
    const hours = numberRange(0, 23);
    hours.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    return options;
  }
  getMinutes () {
    const options = [];
    const minutes = numberRange(0, 59);
    minutes.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    return options;
  }
  getSeconds () {
    const options = [];
    const seconds = numberRange(0, 59);
    seconds.map((item) => options.push(<option key={uuidv4()} value={item}>{item}</option>));
    return options;
  }
  setChosenDate () {
    const {
      yearChosen,
      monthChosen,
      dayChosen,
      hourChosen,
      minuteChosen,
      secondChosen,
    } = this.state;
    let theChosenDate = null;
    if (yearChosen && !monthChosen && !dayChosen) {
      theChosenDate = moment().year(yearChosen).format('MMMM Do YYYY, h:mm:ss a');
    } else if (yearChosen && monthChosen && !dayChosen) {
      theChosenDate = moment().year(yearChosen).month(monthChosen).format('MMMM Do YYYY, h:mm:ss a');
    } else if (yearChosen && monthChosen && dayChosen) {
      theChosenDate = moment().year(yearChosen).month(monthChosen).date(dayChosen).hour(hourChosen).minute(minuteChosen).second(secondChosen).format('MMMM Do YYYY, h:mm:ss a');
    }
    return theChosenDate;
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
  render () {
    const {
      yearSelected,
      monthSelected,
      daySelected,
      yearChosen,
      monthChosen,
      dayChosen,
      hourChosen,
      minuteChosen,
      secondChosen,
      chosenDateIsInThePast,
      chosenDateIsInTheFuture,
      baseDateName,
      addToBaseDateMonths,
      addToBaseDateWeeks,
      addToBaseDateDays,
      addToBaseDateHours,
      addToBaseDateMinutes,
      addToBaseDateSeconds,
    } = this.state;
    const baseDate = moment(this.setChosenDate(), 'MMMM Do YYYY, h:mm:ss a');
    return (
      <div>
        <h3>DateInitial</h3>
        <div>
          <label className="hidden" htmlFor="date-initial-select-year">Please select a year:</label>
          <select id="date-initial-select-year" defaultValue={yearChosen}>
            <option key={uuidv4()} value="">Year</option>
            {this.getYears()}
          </select>
        </div>
        <div>
          <label className="hidden" htmlFor="date-initial-select-month">Please select a month:</label>
          <select id="date-initial-select-month" defaultValue={monthChosen} disabled={!yearSelected}>
            <option key={uuidv4()} value="">Month</option>
            {this.getMonths()}
          </select>
        </div>
        <div>
          <label className="hidden" htmlFor="date-initial-select-day">Please select a day:</label>
          <select id="date-initial-select-day" defaultValue={dayChosen} disabled={!monthSelected}>
            <option key={uuidv4()} value="">Day</option>
            {this.getDays()}
          </select>
        </div>
        {daySelected &&
          <React.Fragment>
            <div>
              <label className="hidden" htmlFor="date-initial-select-hour">Please select a hour:</label>
              <select id="date-initial-select-hour" defaultValue={hourChosen}>
                <option key={uuidv4()} value="">Hour</option>
                {this.getHours()}
              </select>
            </div>
            <div>
              <label className="hidden" htmlFor="date-initial-select-minute">Please select a minute:</label>
              <select id="date-initial-select-minute" defaultValue={minuteChosen}>
                <option key={uuidv4()} value="">Minute</option>
                {this.getMinutes()}
              </select>
            </div>
            <div>
              <label className="hidden" htmlFor="date-initial-select-second">Please select a second:</label>
              <select id="date-initial-select-second" defaultValue={secondChosen}>
                <option key={uuidv4()} value="">Second</option>
                {this.getSeconds()}
              </select>
            </div>
          </React.Fragment>
        }
        <p>Chosen date:</p>
        <p>{this.setChosenDate()}</p>
        {chosenDateIsInThePast &&
          <h3>Time since</h3>
        }
        {chosenDateIsInTheFuture &&
          <h3>Time until</h3>
        }
        {baseDate &&
          <React.Fragment>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'years')}</p>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'months')}</p>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'weeks')}</p>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'days')}</p>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'hours')}</p>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'minutes')}</p>
            <p>{this.timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'seconds')}</p>
            <h4>{this.localizeThousand(addToBaseDateMonths)} months from {baseDateName}</h4>
            <p>{moment(baseDate).add(addToBaseDateMonths, 'months').format('MMMM Do YYYY, h:mm:ss a')}</p>
            <h4>{this.localizeThousand(addToBaseDateWeeks)} weeks from {baseDateName}</h4>
            <p>{moment(baseDate).add(addToBaseDateWeeks, 'weeks').format('MMMM Do YYYY, h:mm:ss a')}</p>
            <h4>{this.localizeThousand(addToBaseDateDays)} days from {baseDateName}</h4>
            <p>{moment(baseDate).add(addToBaseDateDays, 'days').format('MMMM Do YYYY, h:mm:ss a')}</p>
            <h4>{this.localizeThousand(addToBaseDateHours)} hours from {baseDateName}</h4>
            <p>{moment(baseDate).add(addToBaseDateHours, 'hours').format('MMMM Do YYYY, h:mm:ss a')}</p>
            <h4>{this.localizeThousand(addToBaseDateMinutes)} minutes from {baseDateName}</h4>
            <p>{moment(baseDate).add(addToBaseDateMinutes, 'minutes').format('MMMM Do YYYY, h:mm:ss a')}</p>
            <h4>{this.localizeThousand(addToBaseDateSeconds)} seconds from {baseDateName}</h4>
            <p>{moment(baseDate).add(addToBaseDateSeconds, 'seconds').format('MMMM Do YYYY, h:mm:ss a')}</p>
          </React.Fragment>
        }
      </div>
    );
  }
};

export default DateInitial;
