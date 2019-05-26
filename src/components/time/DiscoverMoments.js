// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import constants
import { MOMENT_TIME_FORMAT } from './../../config';

// Import utils
import { localizeThousand } from './../../utils/localizeThousandUtil';
import { timePeriod } from '../../utils/timePeriodUtil';

// Import actions
import {
  setAddToBaseYearsAction,
  setAddToBaseMonthsAction,
  setAddToBaseWeeksAction,
  setAddToBaseDaysAction,
  setAddToBaseHoursAction,
  setAddToBaseMinutesAction,
  setAddToBaseSecondsAction,
} from './../../store/duck/ducks';

// Import components
import AddToCalendar from './AddToCalendar';

class DiscoverMoments extends Component {
  getDiscoverMomentsHeading (mode) {
    const {
      baseDate,
      addToBaseDateYears,
      addToBaseDateMonths,
      addToBaseDateWeeks,
      addToBaseDateDays,
      addToBaseDateHours,
      addToBaseDateMinutes,
      addToBaseDateSeconds,
    } = this.props;
    let heading = '';
    if (baseDate) {
      if (mode === 'year' && addToBaseDateYears) {
        heading = <span>{localizeThousand(addToBaseDateYears)} years from {this.renderBaseDateName()}</span>;
      } else if (mode === 'month' && addToBaseDateMonths) {
        heading = <span>{localizeThousand(addToBaseDateMonths)} months from {this.renderBaseDateName()}</span>;
      } else if (mode === 'week' && addToBaseDateWeeks) {
        heading = <span>{localizeThousand(addToBaseDateWeeks)} weeks from {this.renderBaseDateName()}</span>;
      } else if (mode === 'day' && addToBaseDateDays) {
        heading = <span>{localizeThousand(addToBaseDateDays)} days from {this.renderBaseDateName()}</span>;
      } else if (mode === 'hour' && addToBaseDateHours) {
        heading = <span>{localizeThousand(addToBaseDateHours)} hours from {this.renderBaseDateName()}</span>;
      } else if (mode === 'minute' && addToBaseDateMinutes) {
        heading = <span>{localizeThousand(addToBaseDateMinutes)} minutes from {this.renderBaseDateName()}</span>;
      } else if (mode === 'second' && addToBaseDateSeconds) {
        heading = <span>{localizeThousand(addToBaseDateSeconds)} seconds from {this.renderBaseDateName()}</span>;
      }
    }
    return heading;
  }
  getDiscoverMomentsMoment (mode) {
    const {
      baseDate,
      addToBaseDateYears,
      addToBaseDateMonths,
      addToBaseDateWeeks,
      addToBaseDateDays,
      addToBaseDateHours,
      addToBaseDateMinutes,
      addToBaseDateSeconds,
    } = this.props;
    let theMoment = '';
    if (baseDate) {
      if (mode === 'year' && addToBaseDateYears) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateYears, 'years').format(MOMENT_TIME_FORMAT);
      } else if (mode === 'month' && addToBaseDateMonths) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateMonths, 'months').format(MOMENT_TIME_FORMAT);
      } else if (mode === 'week' && addToBaseDateWeeks) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateWeeks, 'weeks').format(MOMENT_TIME_FORMAT);
      } else if (mode === 'day' && addToBaseDateDays) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateDays, 'days').format(MOMENT_TIME_FORMAT);
      } else if (mode === 'hour' && addToBaseDateHours) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateHours, 'hours').format(MOMENT_TIME_FORMAT);
      } else if (mode === 'minute' && addToBaseDateMinutes) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateMinutes, 'minutes').format(MOMENT_TIME_FORMAT);
      } else if (mode === 'second' && addToBaseDateSeconds) {
        theMoment = moment(baseDate, MOMENT_TIME_FORMAT).add(addToBaseDateSeconds, 'seconds').format(MOMENT_TIME_FORMAT);
      }
    }
    return theMoment;
  }
  renderBaseDateName () {
    const {baseDateName} = this.props;
    let name = <span className="font-montserrat-regular-italic">'set date'</span>;
    if (baseDateName) {
      name = <span className="font-montserrat-regular-italic">'{baseDateName}'</span>;
    }
    return name;
  }
  renderInputFields () {
    const {
      baseDate,
      nowDailyDate,
      addToBaseDateYears,
      addToBaseDateMonths,
      addToBaseDateWeeks,
      addToBaseDateDays,
      addToBaseDateHours,
      addToBaseDateMinutes,
      addToBaseDateSeconds,
      setAddToBaseYearsAction,
      setAddToBaseMonthsAction,
      setAddToBaseWeeksAction,
      setAddToBaseDaysAction,
      setAddToBaseHoursAction,
      setAddToBaseMinutesAction,
      setAddToBaseSecondsAction,
    } = this.props;
    if (baseDate) {
      const discoverMomentYear = this.getDiscoverMomentsMoment('year');
      const discoverMomentMonth = this.getDiscoverMomentsMoment('month');
      const discoverMomentWeek = this.getDiscoverMomentsMoment('week');
      const discoverMomentDay = this.getDiscoverMomentsMoment('day');
      const discoverMomentHour = this.getDiscoverMomentsMoment('hour');
      const discoverMomentMinute = this.getDiscoverMomentsMoment('minute');
      const discoverMomentSecond = this.getDiscoverMomentsMoment('second');
      return (
        <>
          <h3 className="m-t-20 m-b-20">Discover a <span className="font-montserrat-regular-italic">Moment</span> relative to {this.renderBaseDateName()} by entering numbers below:</h3>
          <div className={`time-unit-output years bl-purple${addToBaseDateYears ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="5" onChange = {e => {
              setAddToBaseYearsAction(e.target.value);
            }}/> Years
            {addToBaseDateYears ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('year')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentYear}</p>
                {timePeriod(nowDailyDate, discoverMomentYear) === 'future' &&
                  <AddToCalendar date={discoverMomentYear}/>
                }
              </>
              : null
            }
          </div>
          <div className={`time-unit-output months bl-fuchsia${addToBaseDateMonths ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="6" onChange = {e => {
              setAddToBaseMonthsAction(e.target.value);
            }}/> Months
            {addToBaseDateMonths ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('month')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentMonth}</p>
                {timePeriod(nowDailyDate, discoverMomentMonth) === 'future' &&
                  <AddToCalendar date={discoverMomentMonth}/>
                }
              </>
              : null
            }
          </div>
          <div className={`time-unit-output weeks bl-red${addToBaseDateWeeks ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="7" onChange = {e => {
              setAddToBaseWeeksAction(e.target.value);
            }}/> Weeks
            {addToBaseDateWeeks ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('week')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentWeek}</p>
                {timePeriod(nowDailyDate, discoverMomentWeek) === 'future' &&
                  <AddToCalendar date={discoverMomentWeek}/>
                }
              </>
              : null
            }
          </div>
          <div className={`time-unit-output days bl-orange${addToBaseDateDays ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="7" onChange = {e => {
              setAddToBaseDaysAction(e.target.value);
            }}/> Days
            {addToBaseDateDays ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('day')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentDay}</p>
                {timePeriod(nowDailyDate, discoverMomentDay) === 'future' &&
                  <AddToCalendar date={discoverMomentDay}/>
                }
              </>
              : null
            }
          </div>
          <div className={`time-unit-output hours bl-yellow${addToBaseDateHours ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="9" onChange = {e => {
              setAddToBaseHoursAction(e.target.value);
            }}/> Hours
            {addToBaseDateHours ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('hour')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentHour}</p>
                {timePeriod(nowDailyDate, discoverMomentHour) === 'future' &&
                  <AddToCalendar date={discoverMomentHour}/>
                }
              </>
              : null
            }
          </div>
          <div className={`time-unit-output minutes bl-fav-green-light${addToBaseDateMinutes ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="11" onChange = {e => {
              setAddToBaseMinutesAction(e.target.value);
            }}/> Minutes
            {addToBaseDateMinutes ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('minute')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentMinute}</p>
                {timePeriod(nowDailyDate, discoverMomentMinute) === 'future' &&
                  <AddToCalendar date={discoverMomentMinute}/>
                }
              </>
              : null
            }
          </div>
          <div className={`time-unit-output seconds bl-teal${addToBaseDateSeconds ? ' p-t-15 p-b-10' : ''}`}>
            <input className="text-field" maxLength="12" onChange = {e => {
              setAddToBaseSecondsAction(e.target.value);
            }}/> Seconds
            {addToBaseDateSeconds ?
              <>
                <h4 className="m-t-15">{this.getDiscoverMomentsHeading('second')}</h4>
                <p className="font-montserrat-light m-t-15">{discoverMomentSecond}</p>
                {timePeriod(nowDailyDate, discoverMomentSecond) === 'future' &&
                  <AddToCalendar date={discoverMomentSecond}/>
                }
              </>
              : null
            }
          </div>
        </>
      )
    }
    return null;
  }
  render () {
    return (
      <>
        {this.renderInputFields()}
      </>
    )
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseDateName: main.baseDateName,
    baseDate: main.baseDate,
    nowDailyDate: main.nowDailyDate,
    addToBaseDateYears: main.addToBaseDateYears,
    addToBaseDateMonths: main.addToBaseDateMonths,
    addToBaseDateWeeks: main.addToBaseDateWeeks,
    addToBaseDateDays: main.addToBaseDateDays,
    addToBaseDateHours: main.addToBaseDateHours,
    addToBaseDateMinutes: main.addToBaseDateMinutes,
    addToBaseDateSeconds: main.addToBaseDateSeconds,
  }
}
const mapDispatchToProps = {
  setAddToBaseYearsAction,
  setAddToBaseMonthsAction,
  setAddToBaseWeeksAction,
  setAddToBaseDaysAction,
  setAddToBaseHoursAction,
  setAddToBaseMinutesAction,
  setAddToBaseSecondsAction,
}
const DiscoverMomentsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverMoments);

DiscoverMoments.propTypes = {
  baseDateName: PropTypes.string,
  baseDate: PropTypes.string,
  nowDailyDate: PropTypes.string,
  addToBaseDateYears: PropTypes.number,
  addToBaseDateMonths: PropTypes.number,
  addToBaseDateWeeks: PropTypes.number,
  addToBaseDateDays: PropTypes.number,
  addToBaseDateHours: PropTypes.number,
  addToBaseDateMinutes: PropTypes.number,
  addToBaseDateSeconds: PropTypes.number,
  setAddToBaseYearsAction: PropTypes.func,
  setAddToBaseMonthsAction: PropTypes.func,
  setAddToBaseWeeksAction: PropTypes.func,
  setAddToBaseDaysAction: PropTypes.func,
  setAddToBaseHoursAction: PropTypes.func,
  setAddToBaseMinutesAction: PropTypes.func,
  setAddToBaseSecondsAction: PropTypes.func,
};

export default DiscoverMomentsConnect;
