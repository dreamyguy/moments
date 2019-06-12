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
  setTargetDateAction,
  setBaseDateIsInThePastAction,
  setBasePeriodAction,
  setTargetYearDefinedAction,
  setAndResetTargetYearAction,
  setTargetMonthDayCountAction,
} from '../../store/duck/ducks';

class InputYearTargetDate extends Component {
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
      baseDate = '',
      setBaseDateIsInThePastAction,
      setBasePeriodAction,
      match: {
        params: {
          urlTargetYear = '',
        } = {}
      } = {}
    } = this.props;
    // If 'urlTargetYear' is defined, we are definitely setting our dates based on
    // 'URL' parameters
    if (!urlTargetYear) {
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
        if (baseDate) {
          setBasePeriodAction(timePeriod(baseDate, value));
          if (timePeriod(baseDate, value) === 'past') {
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
  setTargetDate (value, mode) {
    const {
      setTargetDateAction,
      setAndResetTargetYearAction,
      setTargetMonthDayCountAction,
      setTargetYearDefinedAction
    } = this.props;
    let theTargetDate = '';
    let theTargetMonthDayCount = '';
    if (mode === 'year') {
      if (value !== '' && value !== undefined) {
        theTargetDate = moment().year(value).format(MOMENT_TIME_FORMAT);
        theTargetMonthDayCount = moment(theTargetDate, MOMENT_TIME_FORMAT).daysInMonth();
        setTargetMonthDayCountAction(theTargetMonthDayCount);
        setTargetYearDefinedAction(true);
      } else {
        setTargetYearDefinedAction(false);
      }
      setAndResetTargetYearAction(value);
    }
    this.setTimePeriod(theTargetDate);
    setTargetDateAction(theTargetDate);
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
    const spacingBottomInput = ((yearInputIsValid && value === '') || !yearInputIsValid) ? ' m-b-5' : ' m-b-20';
    const spacingBottomMessage = ((yearInputIsValid && value === '') || !yearInputIsValid) ? ' m-b-20' : ' m-b-5';
    return (
      <div className="input-year-wrapper">
        <input
          tabIndex = {tabIndex}
          className={`input-year${spacingBottomInput}${classes ? ` ${classes}`: ''}`}
          maxLength="4"
          value = {value}
          onChange = {e => {
            if (this.validateYearInput(e.target.value)) {
              this.setTargetDate(e.target.value, 'year');
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
    baseDate: main.baseDate,
    mode: main.mode,
  }
}
const mapDispatchToProps = {
  setTargetDateAction,
  setBaseDateIsInThePastAction,
  setBasePeriodAction,
  setTargetYearDefinedAction,
  setAndResetTargetYearAction,
  setTargetMonthDayCountAction,
}
const InputYearTargetDateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputYearTargetDate);

InputYearTargetDate.propTypes = {
  // Props related to select, passed down
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  // Props related to choices, passed from store
  baseYear: PropTypes.string,
  nowDailyDate: PropTypes.string,
  baseDate: PropTypes.string,
  mode: PropTypes.string,
};

export default InputYearTargetDateConnect;
