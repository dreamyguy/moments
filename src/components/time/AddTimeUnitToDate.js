// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import helpers
import { localizeThousand, timeDiff } from './../../helpers/helpers';

class AddTimeUnitToDate extends Component {
  renderBaseDateName () {
    const {baseDateName} = this.props;
    let name = 'the set date'
    if (baseDateName) {
      name = baseDateName 
    }
    return name;
  }
  render () {
    const {
      baseDate,
      baseDateIsInThePast,
      baseDateIsInTheFuture,
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
          {baseDateIsInThePast &&
            <h3 className="m-t-20 m-b-20">Time since</h3>
          }
          {baseDateIsInTheFuture &&
            <h3 className="m-t-20 m-b-20">Time until</h3>
          }
          <div className="time-unit-output bl-purple">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'years')}
          </div>
          <div className="time-unit-output bl-fuchsia">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'months')}
          </div>
          <div className="time-unit-output bl-red">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'weeks')}
          </div>
          <div className="time-unit-output bl-orange">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'days')}
          </div>
          <div className="time-unit-output bl-yellow">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'hours')}
          </div>
          <div className="time-unit-output bl-fav-green-light">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'minutes')}
          </div>
          <div className="time-unit-output bl-teal">
            {timeDiff(baseDate, moment().format('MMMM Do YYYY, HH:mm:ss'), 'seconds')}
          </div>
          {addToBaseDateMonths &&
            <>
              <h4>{localizeThousand(addToBaseDateMonths)} months from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateMonths, 'months').format('MMMM Do YYYY, HH:mm:ss')}</p>
            </>
          }
          {addToBaseDateWeeks &&
            <>
              <h4>{localizeThousand(addToBaseDateWeeks)} weeks from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateWeeks, 'weeks').format('MMMM Do YYYY, HH:mm:ss')}</p>
            </>
          }
          {addToBaseDateDays &&
            <>
              <h4>{localizeThousand(addToBaseDateDays)} days from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateDays, 'days').format('MMMM Do YYYY, HH:mm:ss')}</p>
            </>
          }
          {addToBaseDateHours &&
            <>
              <h4>{localizeThousand(addToBaseDateHours)} hours from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateHours, 'hours').format('MMMM Do YYYY, HH:mm:ss')}</p>
            </>
          }
          {addToBaseDateMinutes &&
            <>
              <h4>{localizeThousand(addToBaseDateMinutes)} minutes from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateMinutes, 'minutes').format('MMMM Do YYYY, HH:mm:ss')}</p>
            </>
          }
          {addToBaseDateSeconds &&
            <>
              <h4>{localizeThousand(addToBaseDateSeconds)} seconds from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateSeconds, 'seconds').format('MMMM Do YYYY, HH:mm:ss')}</p>
            </>
          }
        </>
      )
    }
    return null;
  }
};

const mapStateToProps = ({main}) => {
  return {
    baseDateName: main.baseDateName,
    baseDate: main.baseDate,
    baseDateIsInThePast: main.baseDateIsInThePast,
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
    addToBaseDateMonths: main.addToBaseDateMonths,
    addToBaseDateWeeks: main.addToBaseDateWeeks,
    addToBaseDateDays: main.addToBaseDateDays,
    addToBaseDateHours: main.addToBaseDateHours,
    addToBaseDateMinutes: main.addToBaseDateMinutes,
    addToBaseDateSeconds: main.addToBaseDateSeconds,
  }
}

const AddTimeUnitToDateConnect = connect(
  mapStateToProps
)(AddTimeUnitToDate);

AddTimeUnitToDate.propTypes = {
  baseDateName: PropTypes.string,
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
  addToBaseDateMonths: PropTypes.number,
  addToBaseDateWeeks: PropTypes.number,
  addToBaseDateDays: PropTypes.number,
  addToBaseDateHours: PropTypes.number,
  addToBaseDateMinutes: PropTypes.number,
  addToBaseDateSeconds: PropTypes.number,
};

export default AddTimeUnitToDateConnect;
