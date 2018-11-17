// Import dependencies
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import constants
import { MOMENT_TIME_FORMAT } from './../../config';

// Import utils
import { timePeriod } from './../../utils/timePeriodUtil';

// Import actions
import {
  setBaseDateAction,
  setBaseDateIsInThePastAction,
  setBaseDateIsInTheFutureAction,
  setBaseYearDefinedAction,
  setBaseMonthDefinedAction,
  setBaseDayDefinedAction,
  setBaseMonthDayCountAction,
  setBaseYearAction,
  setBaseMonthAction,
  setBaseDayAction,
  setBaseHourAction,
  setBaseMinuteAction,
  setBaseSecondAction,
  setTargetDateAction,
  setTargetDateIsInThePastAction,
  setTargetDateIsInTheFutureAction,
  setTargetYearDefinedAction,
  setTargetMonthDefinedAction,
  setTargetDayDefinedAction,
  setTargetMonthDayCountAction,
  setTargetYearAction,
  setTargetMonthAction,
  setTargetDayAction,
  setTargetHourAction,
  setTargetMinuteAction,
  setTargetSecondAction,
  setModeAction
} from './../../store/duck/ducks';

class SetDateFromUrl extends Component {
  componentWillMount () {
    this.setModeFromUrl();
    this.setDate();
  }
  setModeFromUrl () {
    const {
      // 'this.props.match.params', passed down manually from parent (App)
      match: {
        params: {
          urlMode = ''
        } = {}
      } = {},
      setModeAction
    } = this.props;
    if (urlMode) {
      if (urlMode === 'between-two-dates') {
        setModeAction('betweenTwoDates');
      } else if (urlMode === 'relative-to-now') {
        setModeAction('relativeToNow');
      } else if (urlMode === 'discover-moment') {
        setModeAction('discoverMoment');
      }
    }
  }
  setTimePeriod (value) {
    // Determine if date is in the 'past' or 'future'
    const {
      nowDate = '',
      baseDate = '',
      setBaseDateIsInThePastAction,
      setBaseDateIsInTheFutureAction,
      setTargetDateIsInThePastAction,
      setTargetDateIsInTheFutureAction,
      // 'this.props.match.params', passed down manually from parent (App)
      match: {
        params: {
          urlMode = ''
        } = {}
      } = {}
    } = this.props;
    if (urlMode === 'between-two-dates') {
      if (baseDate) {
        if (timePeriod(baseDate, value) === 'past') {
          setTargetDateIsInThePastAction(true);
          setTargetDateIsInTheFutureAction(false);
        } else if (timePeriod(baseDate, value) === 'future') {
          setTargetDateIsInThePastAction(false);
          setTargetDateIsInTheFutureAction(true);
        } else {
          setTargetDateIsInThePastAction(false);
          setTargetDateIsInTheFutureAction(false);
        }
      }
    } else if (urlMode === 'relative-to-now' || urlMode === 'discover-moment') {
      if (nowDate) {
        if (timePeriod(nowDate, value) === 'past') {
          setBaseDateIsInThePastAction(true);
          setBaseDateIsInTheFutureAction(false);
        } else if (timePeriod(nowDate, value) === 'future') {
          setBaseDateIsInThePastAction(false);
          setBaseDateIsInTheFutureAction(true);
        } else {
          setBaseDateIsInThePastAction(false);
          setBaseDateIsInTheFutureAction(false);
        }
      }
    }
  }
  setDateBase () {
    const {
      // 'this.props.match.params', passed down manually from parent (App)
      match: {
        params: {
          urlBaseYear = '',
          urlBaseMonth = '',
          urlBaseDay = '',
          urlBaseHour = '',
          urlBaseMinute = '',
          urlBaseSecond = '',
        } = {}
      } = {}
    } = this.props;
    const {
      setBaseDateAction,
      setBaseYearDefinedAction,
      setBaseYearAction,
      setBaseMonthDefinedAction,
      setBaseMonthAction,
      setBaseMonthDayCountAction,
      setBaseDayDefinedAction,
      setBaseDayAction,
      setBaseHourAction,
      setBaseMinuteAction,
      setBaseSecondAction,
    } = this.props;
    let theBaseDate = '';
    let theBaseMonthDayCount = '';
    if (urlBaseYear && !urlBaseMonth && !urlBaseDay && !urlBaseHour && !urlBaseMinute && !urlBaseSecond) {
      if (
        urlBaseYear !== '' &&
        urlBaseYear !== undefined
      ) {
        theBaseDate = moment().year(urlBaseYear).format(MOMENT_TIME_FORMAT);
        theBaseMonthDayCount = moment(theBaseDate, MOMENT_TIME_FORMAT).daysInMonth();
        setBaseMonthDayCountAction(theBaseMonthDayCount);
        setBaseYearDefinedAction(true);
      } else {
        setBaseYearDefinedAction(false);
      }
      setBaseYearAction(urlBaseYear);
    }
    if (urlBaseYear && urlBaseMonth && !urlBaseDay && !urlBaseHour && !urlBaseMinute && !urlBaseSecond) {
      if (
        urlBaseYear !== '' &&
        urlBaseYear !== undefined &&
        urlBaseMonth !== '' &&
        urlBaseMonth !== undefined
      ) {
        theBaseDate = moment().year(urlBaseYear).month(urlBaseMonth).format(MOMENT_TIME_FORMAT);
        theBaseMonthDayCount = moment(theBaseDate, MOMENT_TIME_FORMAT).daysInMonth();
        setBaseMonthDayCountAction(theBaseMonthDayCount);
        setBaseMonthAction(urlBaseMonth);
        setBaseMonthDefinedAction(true);
      } else {
        setBaseMonthDefinedAction(false);
      }
    }
    if (urlBaseYear && urlBaseMonth && urlBaseDay && !urlBaseHour && !urlBaseMinute && !urlBaseSecond) {
      if (
        urlBaseYear !== '' &&
        urlBaseYear !== undefined &&
        urlBaseMonth !== '' &&
        urlBaseMonth !== undefined &&
        urlBaseDay !== '' &&
        urlBaseDay !== undefined
      ) {
        theBaseDate = moment().year(urlBaseYear).month(urlBaseMonth).date(urlBaseDay).format(MOMENT_TIME_FORMAT);
        setBaseDayAction(urlBaseDay);
        setBaseDayDefinedAction(true);
      } else {
        setBaseDayDefinedAction(false);
      }
    }
    if (urlBaseYear && urlBaseMonth && urlBaseDay && urlBaseHour && !urlBaseMinute && !urlBaseSecond) {
      theBaseDate = moment().year(urlBaseYear).month(urlBaseMonth).date(urlBaseDay).hour(urlBaseHour).format(MOMENT_TIME_FORMAT);
      setBaseHourAction(urlBaseHour);
    }
    if (urlBaseYear && urlBaseMonth && urlBaseDay && urlBaseHour && urlBaseMinute && !urlBaseSecond) {
      theBaseDate = moment().year(urlBaseYear).month(urlBaseMonth).date(urlBaseDay).hour(urlBaseHour).minute(urlBaseMinute).format(MOMENT_TIME_FORMAT);
      setBaseMinuteAction(urlBaseMinute);
    }
    if (urlBaseYear && urlBaseMonth && urlBaseDay && urlBaseHour && urlBaseMinute && urlBaseSecond) {
      theBaseDate = moment().year(urlBaseYear).month(urlBaseMonth).date(urlBaseDay).hour(urlBaseHour).minute(urlBaseMinute).second(urlBaseSecond).format(MOMENT_TIME_FORMAT);
      setBaseSecondAction(urlBaseSecond);
    }
    setBaseDateAction(theBaseDate);
    this.setTimePeriod(theBaseDate);
  }
  setDateTarget () {
    const {
      // 'this.props.match.params', passed down manually from parent (App)
      match: {
        params: {
          urlTargetYear = '',
          urlTargetMonth = '',
          urlTargetDay = '',
          urlTargetHour = '',
          urlTargetMinute = '',
          urlTargetSecond = '',
        } = {}
      } = {}
    } = this.props;
    const {
      setTargetDateAction,
      setTargetYearDefinedAction,
      setTargetYearAction,
      setTargetMonthDefinedAction,
      setTargetMonthAction,
      setTargetMonthDayCountAction,
      setTargetDayDefinedAction,
      setTargetDayAction,
      setTargetHourAction,
      setTargetMinuteAction,
      setTargetSecondAction,
    } = this.props;
    let theTargetDate = '';
    let theTargetMonthDayCount = '';
    if (urlTargetYear && !urlTargetMonth && !urlTargetDay && !urlTargetHour && !urlTargetMinute && !urlTargetSecond) {
      if (
        urlTargetYear !== '' &&
        urlTargetYear !== undefined
      ) {
        theTargetDate = moment().year(urlTargetYear).format(MOMENT_TIME_FORMAT);
        theTargetMonthDayCount = moment(theTargetDate, MOMENT_TIME_FORMAT).daysInMonth();
        setTargetMonthDayCountAction(theTargetMonthDayCount);
        setTargetYearDefinedAction(true);
      } else {
        setTargetYearDefinedAction(false);
      }
      setTargetYearAction(urlTargetYear);
    }
    if (urlTargetYear && urlTargetMonth && !urlTargetDay && !urlTargetHour && !urlTargetMinute && !urlTargetSecond) {
      if (
        urlTargetYear !== '' &&
        urlTargetYear !== undefined &&
        urlTargetMonth !== '' &&
        urlTargetMonth !== undefined
      ) {
        theTargetDate = moment().year(urlTargetYear).month(urlTargetMonth).format(MOMENT_TIME_FORMAT);
        theTargetMonthDayCount = moment(theTargetDate, MOMENT_TIME_FORMAT).daysInMonth();
        setTargetMonthDayCountAction(theTargetMonthDayCount);
        setTargetMonthAction(urlTargetMonth);
        setTargetMonthDefinedAction(true);
      } else {
        setTargetMonthDefinedAction(false);
      }
    }
    if (urlTargetYear && urlTargetMonth && urlTargetDay && !urlTargetHour && !urlTargetMinute && !urlTargetSecond) {
      if (
        urlTargetYear !== '' &&
        urlTargetYear !== undefined &&
        urlTargetMonth !== '' &&
        urlTargetMonth !== undefined &&
        urlTargetDay !== '' &&
        urlTargetDay !== undefined
      ) {
        theTargetDate = moment().year(urlTargetYear).month(urlTargetMonth).date(urlTargetDay).format(MOMENT_TIME_FORMAT);
        setTargetDayAction(urlTargetDay);
        setTargetDayDefinedAction(true);
      } else {
        setTargetDayDefinedAction(false);
      }
    }
    if (urlTargetYear && urlTargetMonth && urlTargetDay && urlTargetHour && !urlTargetMinute && !urlTargetSecond) {
      theTargetDate = moment().year(urlTargetYear).month(urlTargetMonth).date(urlTargetDay).hour(urlTargetHour).format(MOMENT_TIME_FORMAT);
      setTargetHourAction(urlTargetHour);
    }
    if (urlTargetYear && urlTargetMonth && urlTargetDay && urlTargetHour && urlTargetMinute && !urlTargetSecond) {
      theTargetDate = moment().year(urlTargetYear).month(urlTargetMonth).date(urlTargetDay).hour(urlTargetHour).minute(urlTargetMinute).format(MOMENT_TIME_FORMAT);
      setTargetMinuteAction(urlTargetMinute);
    }
    if (urlTargetYear && urlTargetMonth && urlTargetDay && urlTargetHour && urlTargetMinute && urlTargetSecond) {
      theTargetDate = moment().year(urlTargetYear).month(urlTargetMonth).date(urlTargetDay).hour(urlTargetHour).minute(urlTargetMinute).second(urlTargetSecond).format(MOMENT_TIME_FORMAT);
      setTargetSecondAction(urlTargetSecond);
    }
    setTargetDateAction(theTargetDate);
    this.setTimePeriod(theTargetDate);
  }
  setDate () {
    const {
      // 'this.props.match.params', passed down manually from parent (App)
      match: {
        params: {
          urlMode = ''
        } = {}
      } = {}
    } = this.props;
    this.setModeFromUrl();
    if (urlMode === 'between-two-dates') {
      this.setDateBase();
      this.setDateTarget();
    } else if (urlMode === 'relative-to-now' || urlMode === 'discover-moment') {
      this.setDateBase();
    }
  }
  render () {
    // This component is just a state 'setter', nothing to render
    return null;
  }
}

const mapStateToProps = ({main}) => {
  return {
    mode: main.mode,
    baseDate: main.baseDate,
    nowDate: main.nowDate,
  }
}
const mapDispatchToProps = {
  setBaseDateAction,
  setBaseDateIsInThePastAction,
  setBaseDateIsInTheFutureAction,
  setBaseYearDefinedAction,
  setBaseMonthDefinedAction,
  setBaseDayDefinedAction,
  setBaseMonthDayCountAction,
  setBaseYearAction,
  setBaseMonthAction,
  setBaseDayAction,
  setBaseHourAction,
  setBaseMinuteAction,
  setBaseSecondAction,
  setTargetDateAction,
  setTargetDateIsInThePastAction,
  setTargetDateIsInTheFutureAction,
  setTargetYearDefinedAction,
  setTargetMonthDefinedAction,
  setTargetDayDefinedAction,
  setTargetMonthDayCountAction,
  setTargetYearAction,
  setTargetMonthAction,
  setTargetDayAction,
  setTargetHourAction,
  setTargetMinuteAction,
  setTargetSecondAction,
  setModeAction
}
const SetDateFromUrlConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetDateFromUrl);

SetDateFromUrl.propTypes = {
  mode: PropTypes.string,
  baseDate: PropTypes.string,
  nowDate: PropTypes.string,
};

export default SetDateFromUrlConnect;
