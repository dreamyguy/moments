// Import dependencies
import React, { Component } from 'react';
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

class Now extends Component {
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
    const {nowDate} = this.props;
    return (
      <React.Fragment>
        {nowDate}
      </React.Fragment>
    )
  }
};

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
const NowConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Now);

Now.propTypes = {
  nowDate: PropTypes.string
};

export default NowConnect;
