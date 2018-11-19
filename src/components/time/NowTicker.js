// Import dependencies
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import constants
import {
  MOMENT_TIME_FORMAT,
  MOMENT_TIME_DAILY_FORMAT,
} from './../../config';

// Import actions
import {
  setNowDateAction,
  setNowDailyDateAction,
  setNowYearAction,
  setNowMonthAction,
  setNowDayAction,
  setNowHourAction,
  setNowMinuteAction,
  setNowSecondAction
} from './../../store/duck/ducks';

class NowTicker extends Component {
  componentWillMount () {
    clearInterval(this.timerID);
    this.updateNow();
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  updateNow () {
    const {
      setNowDailyDateAction,
      setNowDateAction,
      setNowYearAction,
      setNowMonthAction,
      setNowDayAction,
      setNowHourAction,
      setNowMinuteAction,
      setNowSecondAction,
      nowDailyDate,
      nowDate,
      nowYear,
      nowMonth,
      nowDay,
      nowHour,
      nowMinute,
      nowSecond,
      mode,
      baseYear,
    } = this.props;
    const newNowDailyDate = moment().format(MOMENT_TIME_DAILY_FORMAT);
    const newNowDate = moment().format(MOMENT_TIME_FORMAT);
    const newNowYear = moment().format('YYYY');
    const newNowMonth = moment().format('MMMM');
    const newNowDay = moment().format('D');
    const newNowHour = moment().format('H');
    const newNowMinute = moment().format('mm');
    const newNowSecond = moment().format('ss');
    // Only do this when these conditions are met, for performance's sake
    if (mode === 'relativeToNow' || mode === 'discoverMoment') {
      if (newNowDailyDate !== nowDailyDate) {
        setNowDailyDateAction(moment().format(MOMENT_TIME_DAILY_FORMAT));
      }
    }
    if (mode && baseYear) {
      if (newNowDate !== nowDate) {
        setNowDateAction(newNowDate);
      }
      if (newNowYear !== nowYear) {
        setNowYearAction(newNowYear);
      }
      if (newNowMonth !== nowMonth) {
        setNowMonthAction(newNowMonth);
      }
      if (newNowDay !== nowDay) {
        setNowDayAction(newNowDay);
      }
      if (newNowHour !== nowHour) {
        setNowHourAction(newNowHour);
      }
      if (newNowMinute !== nowMinute) {
        setNowMinuteAction(newNowMinute);
      }
      if (newNowSecond !== nowSecond) {
        setNowSecondAction(newNowSecond);
      }
    }
  }
  tick () {
    this.updateNow();
  }
  render () {
    // This component is just a 'now' time ticker, nothing to render
    return null;
  }
}

const mapStateToProps = ({main}) => {
  return {
    mode: main.mode,
    baseYear: main.baseYear,
    nowDailyDate: main.nowDailyDate,
    nowDate: main.nowDate,
    nowYear: main.nowYear,
    nowMonth: main.nowMonth,
    nowDay: main.nowDay,
    nowHour: main.nowHour,
    nowMinute: main.nowMinute,
    nowSecond: main.nowSecond,
  }
}
const mapDispatchToProps = {
  setNowDateAction,
  setNowDailyDateAction,
  setNowYearAction,
  setNowMonthAction,
  setNowDayAction,
  setNowHourAction,
  setNowMinuteAction,
  setNowSecondAction
}
const NowTickerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(NowTicker);

NowTicker.propTypes = {
  mode: PropTypes.string,
  baseYear: PropTypes.string,
  nowDailyDate: PropTypes.string,
  nowDate: PropTypes.string,
  nowYear: PropTypes.string,
  nowMonth: PropTypes.string,
  nowDay: PropTypes.string,
  nowHour: PropTypes.string,
  nowMinute: PropTypes.string,
  nowSecond: PropTypes.string,
};

export default NowTickerConnect;
