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
      mode,
      baseYear,
    } = this.props;
    // Only do this when these conditions are met, for performance's sake
    if (mode && mode !== 'betweenTwoDates' && baseYear) {
      this.props.setNowDateAction(moment().format(MOMENT_TIME_FORMAT));
      this.props.setNowDailyDateAction(moment().format(MOMENT_TIME_DAILY_FORMAT));
      this.props.setNowYearAction(moment().format('YYYY'));
      this.props.setNowMonthAction(moment().format('MMMM'));
      this.props.setNowDayAction(moment().format('D'));
      this.props.setNowHourAction(moment().format('H'));
      this.props.setNowMinuteAction(moment().format('mm'));
      this.props.setNowSecondAction(moment().format('ss'));
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
    nowDate: main.nowDate,
    baseYear: main.baseYear
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
  nowDate: PropTypes.string
};

export default NowTickerConnect;
