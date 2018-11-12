// Import dependencies
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import constants
import { MOMENT_TIME_FORMAT } from './../../config';

// Import actions
import {
  setNowDateAction,
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
    this.props.setNowDateAction(moment().format(MOMENT_TIME_FORMAT));
    this.props.setNowYearAction(moment().format('YYYY'));
    this.props.setNowMonthAction(moment().format('MMMM'));
    this.props.setNowDayAction(moment().format('D'));
    this.props.setNowHourAction(moment().format('H'));
    this.props.setNowMinuteAction(moment().format('mm'));
    this.props.setNowSecondAction(moment().format('ss'));
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
    nowDate: main.nowDate
  }
}
const mapDispatchToProps = {
  setNowDateAction,
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
  nowDate: PropTypes.string
};

export default NowTickerConnect;
