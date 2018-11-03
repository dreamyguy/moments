// Import dependencies
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

// Import constants
import { MOMENT_TIME_FORMAT } from './../../config';

// Import actions
import {
  setMomentNowDateAction,
  setMomentNowYearAction,
  setMomentNowMonthAction,
  setMomentNowDayAction,
  setMomentNowHourAction,
  setMomentNowMinuteAction,
  setMomentNowSecondAction
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
    this.props.setMomentNowDateAction(moment().format(MOMENT_TIME_FORMAT));
    this.props.setMomentNowYearAction(moment().format('YYYY'));
    this.props.setMomentNowMonthAction(moment().format('MMMM'));
    this.props.setMomentNowDayAction(moment().format('D'));
    this.props.setMomentNowHourAction(moment().format('H'));
    this.props.setMomentNowMinuteAction(moment().format('mm'));
    this.props.setMomentNowSecondAction(moment().format('ss'));
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
  setMomentNowDateAction,
  setMomentNowYearAction,
  setMomentNowMonthAction,
  setMomentNowDayAction,
  setMomentNowHourAction,
  setMomentNowMinuteAction,
  setMomentNowSecondAction
}
const NowTickerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(NowTicker);

NowTicker.propTypes = {
  nowDate: PropTypes.string
};

export default NowTickerConnect;
