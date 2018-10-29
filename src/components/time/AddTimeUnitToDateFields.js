// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import helpers
import { localizeThousand } from './../../helpers/helpers';

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

class AddTimeUnitToDate extends Component {
  getAddTimeUnitToDateHeading (mode) {
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
        heading = `${localizeThousand(addToBaseDateYears)} years from ${this.renderBaseDateName()}`;
      } else if (mode === 'month' && addToBaseDateMonths) {
        heading = `${localizeThousand(addToBaseDateMonths)} months from ${this.renderBaseDateName()}`;
      } else if (mode === 'week' && addToBaseDateWeeks) {
        heading = `${localizeThousand(addToBaseDateWeeks)} weeks from ${this.renderBaseDateName()}`;
      } else if (mode === 'day' && addToBaseDateDays) {
        heading = `${localizeThousand(addToBaseDateDays)} days from ${this.renderBaseDateName()}`;
      } else if (mode === 'hour' && addToBaseDateHours) {
        heading = `${localizeThousand(addToBaseDateHours)} hours from ${this.renderBaseDateName()}`;
      } else if (mode === 'minute' && addToBaseDateMinutes) {
        heading = `${localizeThousand(addToBaseDateMinutes)} minutes from ${this.renderBaseDateName()}`;
      } else if (mode === 'second' && addToBaseDateSeconds) {
        heading = `${localizeThousand(addToBaseDateSeconds)} seconds from ${this.renderBaseDateName()}`;
      }
    }
    return heading;
  }
  getAddTimeUnitToDateMoment (mode) {
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
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateYears, 'years').format('MMMM Do YYYY, HH:mm:ss');
      } else if (mode === 'month' && addToBaseDateMonths) {
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateMonths, 'months').format('MMMM Do YYYY, HH:mm:ss');
      } else if (mode === 'week' && addToBaseDateWeeks) {
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateWeeks, 'weeks').format('MMMM Do YYYY, HH:mm:ss');
      } else if (mode === 'day' && addToBaseDateDays) {
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateDays, 'days').format('MMMM Do YYYY, HH:mm:ss');
      } else if (mode === 'hour' && addToBaseDateHours) {
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateHours, 'hours').format('MMMM Do YYYY, HH:mm:ss');
      } else if (mode === 'minute' && addToBaseDateMinutes) {
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateMinutes, 'minutes').format('MMMM Do YYYY, HH:mm:ss');
      } else if (mode === 'second' && addToBaseDateSeconds) {
        theMoment = moment(baseDate, 'MMMM Do YYYY, HH:mm:ss').add(addToBaseDateSeconds, 'seconds').format('MMMM Do YYYY, HH:mm:ss');
      }
    }
    return theMoment;
  }
  renderBaseDateName () {
    const {baseDateName} = this.props;
    let name = 'the set date'
    if (baseDateName) {
      name = baseDateName 
    }
    return name;
  }
  renderInputFields () {
    const {
      baseDate,
      setAddToBaseYearsAction,
      setAddToBaseMonthsAction,
      setAddToBaseWeeksAction,
      setAddToBaseDaysAction,
      setAddToBaseHoursAction,
      setAddToBaseMinutesAction,
      setAddToBaseSecondsAction,
    } = this.props;
    if (baseDate) {
      return (
        <>
          <h3 className="m-t-20 m-b-20">Set time unit you'd like to know the output for</h3>
          <div className="time-unit-output years bl-purple">
            <input className="text-field" onChange = {e => {
              setAddToBaseYearsAction(e.target.value);
            }}/> Years
          </div>
          <div className="time-unit-output months bl-fuchsia">
            <input className="text-field" onChange = {e => {
              setAddToBaseMonthsAction(e.target.value);
            }}/> Months
          </div>
          <div className="time-unit-output weeks bl-red">
            <input className="text-field" onChange = {e => {
              setAddToBaseWeeksAction(e.target.value);
            }}/> Weeks
          </div>
          <div className="time-unit-output days bl-orange">
            <input className="text-field" onChange = {e => {
              setAddToBaseDaysAction(e.target.value);
            }}/> Days
          </div>
          <div className="time-unit-output hours bl-yellow">
            <input className="text-field" onChange = {e => {
              setAddToBaseHoursAction(e.target.value);
            }}/> Hours
          </div>
          <div className="time-unit-output minutes bl-fav-green-light">
            <input className="text-field" onChange = {e => {
              setAddToBaseMinutesAction(e.target.value);
            }}/> Minutes
          </div>
          <div className="time-unit-output seconds bl-teal">
            <input className="text-field" onChange = {e => {
              setAddToBaseSecondsAction(e.target.value);
            }}/> Seconds
          </div>
        </>
      )
    }
    return null;
  }
  renderResults () {
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
    if (baseDate) {
      return (
        <>
          {addToBaseDateYears &&
            <div className="time-unit-output years bl-purple">
              <h4>{this.getAddTimeUnitToDateHeading('year')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('year')}</p>
            </div>
          }
          {addToBaseDateMonths &&
            <div className="time-unit-output months bl-fuchsia">
              <h4>{this.getAddTimeUnitToDateHeading('month')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('month')}</p>
            </div>
          }
          {addToBaseDateWeeks &&
            <div className="time-unit-output weeks bl-red">
              <h4>{this.getAddTimeUnitToDateHeading('week')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('week')}</p>
            </div>
          }
          {addToBaseDateDays &&
            <div className="time-unit-output days bl-orange">
              <h4>{this.getAddTimeUnitToDateHeading('day')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('day')}</p>
            </div>
          }
          {addToBaseDateHours &&
            <div className="time-unit-output hours bl-yellow">
              <h4>{this.getAddTimeUnitToDateHeading('hour')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('hour')}</p>
            </div>
          }
          {addToBaseDateMinutes &&
            <div className="time-unit-output minutes bl-fav-green-light">
              <h4>{this.getAddTimeUnitToDateHeading('minute')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('minute')}</p>
            </div>
          }
          {addToBaseDateSeconds &&
            <div className="time-unit-output seconds bl-teal">
              <h4>{this.getAddTimeUnitToDateHeading('second')}</h4>
              <p>{this.getAddTimeUnitToDateMoment('second')}</p>
            </div>
          }
        </>
      )
    }
    return null;
  }
  render () {
    return (
      <>
        {this.renderInputFields()}
        {this.renderResults()}
      </>
    )
  }
};

const mapStateToProps = ({main}) => {
  return {
    baseDateName: main.baseDateName,
    baseDate: main.baseDate,
    baseDateIsInThePast: main.baseDateIsInThePast,
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
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
const AddTimeUnitToDateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTimeUnitToDate);

AddTimeUnitToDate.propTypes = {
  baseDateName: PropTypes.string,
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
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

export default AddTimeUnitToDateConnect;
