// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import constants
import { MOMENT_TIME_FORMAT } from '../../config';

// Import utils
import { timePeriod } from '../../utils/timePeriodUtil';

// Import actions
import {
  setBaseDateAction,
  setBaseDateIsInThePastAction,
  setBasePeriodAction,
  setBaseYearDefinedAction,
  setAndResetBaseYearAction,
  setBaseMonthDayCountAction,
} from '../../store/duck/ducks';

class InputYearBaseDate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      yearInputIsValid: true
    };
    this.handleYearChange = this.handleYearChange.bind(this);
  }
  setTimePeriod (value) {
    // Determine if date is in the 'past' or 'future'
    const {
      mode = '',
      nowDailyDate = '',
      targetDate = '',
      setBaseDateIsInThePastAction,
      setBasePeriodAction,
      match: {
        params: {
          urlBaseYear = '',
        } = {}
      } = {}
    } = this.props;
    // If 'urlBaseYear' is defined, we are definitely setting our dates based on
    // 'URL' parameters
    if (!urlBaseYear) {
      if (mode === 'relativeToNow' || mode === 'discoverMoment') {
        if (nowDailyDate) {
          setBasePeriodAction(timePeriod(nowDailyDate, value));
          if (timePeriod(nowDailyDate, value) === 'past') {
            setBaseDateIsInThePastAction(true);
          } else {
            setBaseDateIsInThePastAction(false);
          }
        }
      } else if (mode === 'betweenTwoDates') {
        if (targetDate) {
          setBasePeriodAction(timePeriod(targetDate, value));
          if (timePeriod(targetDate, value) === 'past') {
            setBaseDateIsInThePastAction(true);
          } else {
            setBaseDateIsInThePastAction(false);
          }
        }
      }
    }
  }
  handleYearChange (year) {
    this.setState({
      yearInputIsValid: year
    })
  }
  validateYearInput (year) {
    const testYear = /^$|[0-9]+/.test(year);
    if (testYear) {
      this.handleYearChange(year);
      return true;
    }
    return false;
  }
  setBaseDate (value, mode) {
    const {
      setBaseDateAction,
      setAndResetBaseYearAction,
      setBaseMonthDayCountAction,
      setBaseYearDefinedAction
    } = this.props;
    let theBaseDate = '';
    let theBaseMonthDayCount = '';
    if (mode === 'year') {
      if (value !== '' && value !== undefined) {
        theBaseDate = moment().year(value).format(MOMENT_TIME_FORMAT);
        theBaseMonthDayCount = moment(theBaseDate, MOMENT_TIME_FORMAT).daysInMonth();
        setBaseMonthDayCountAction(theBaseMonthDayCount);
        setBaseYearDefinedAction(true);
      } else {
        setBaseYearDefinedAction(false);
      }
      setAndResetBaseYearAction(value);
    }
    this.setTimePeriod(theBaseDate);
    setBaseDateAction(theBaseDate);
  }
  render () {
    const {
      tabIndex = 1,
      value = '',
      classes = ''
    } = this.props;
    const {
      yearInputIsValid
    } = this.state;
    const spacingBottomInput = (yearInputIsValid && value === '' || !yearInputIsValid) ? ' m-b-5' : ' m-b-20';
    const spacingBottomMessage = (yearInputIsValid && value === '' || !yearInputIsValid) ? ' m-b-20' : ' m-b-5';
    return (
      <div className="input-year-wrapper">
        <input
          tabIndex = {tabIndex}
          className={`input-year${spacingBottomInput}${classes ? ` ${classes}`: ''}`}
          maxLength="4"
          value = {value}
          onChange = {e => {
            if (this.validateYearInput(e.target.value)) {
              this.setBaseDate(e.target.value, 'year');
            }
          }}
        />
        {yearInputIsValid
          ?
            <>
              {value === '' &&
                <p className={`input-empty${spacingBottomMessage}`}>
                  Please enter a number.
                </p>
              }
            </>
          :
          <p className={`input-invalid${spacingBottomMessage}`}>
            Invalid input. Please enter a number.
          </p>
        }
      </div>
    );
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseYear: main.baseYear,
    nowDailyDate: main.nowDailyDate,
    targetDate: main.targetDate,
    mode: main.mode,
  }
}
const mapDispatchToProps = {
  setBaseDateAction,
  setBaseDateIsInThePastAction,
  setBasePeriodAction,
  setBaseYearDefinedAction,
  setAndResetBaseYearAction,
  setBaseMonthDayCountAction,
}
const InputYearBaseDateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputYearBaseDate);

InputYearBaseDate.propTypes = {
  // Props related to select, passed down
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  // Props related to choices, passed from store
  baseYear: PropTypes.string,
  nowDailyDate: PropTypes.string,
  targetDate: PropTypes.string,
  mode: PropTypes.string,
};

export default InputYearBaseDateConnect;
