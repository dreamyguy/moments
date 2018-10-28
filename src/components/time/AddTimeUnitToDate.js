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
            <h3>Time since</h3>
          }
          {baseDateIsInTheFuture &&
            <h3>Time until</h3>
          }
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'years')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'months')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'weeks')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'days')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'hours')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'minutes')}</p>
          <p>{timeDiff(baseDate, moment().format('MMMM Do YYYY, h:mm:ss a'), 'seconds')}</p>
          {addToBaseDateMonths &&
            <>
              <h4>{localizeThousand(addToBaseDateMonths)} months from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateMonths, 'months').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateWeeks &&
            <>
              <h4>{localizeThousand(addToBaseDateWeeks)} weeks from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateWeeks, 'weeks').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateDays &&
            <>
              <h4>{localizeThousand(addToBaseDateDays)} days from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateDays, 'days').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateHours &&
            <>
              <h4>{localizeThousand(addToBaseDateHours)} hours from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateHours, 'hours').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateMinutes &&
            <>
              <h4>{localizeThousand(addToBaseDateMinutes)} minutes from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateMinutes, 'minutes').format('MMMM Do YYYY, h:mm:ss a')}</p>
            </>
          }
          {addToBaseDateSeconds &&
            <>
              <h4>{localizeThousand(addToBaseDateSeconds)} seconds from {this.renderBaseDateName()}</h4>
              <p>{moment(baseDate).add(addToBaseDateSeconds, 'seconds').format('MMMM Do YYYY, h:mm:ss a')}</p>
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
