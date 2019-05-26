// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import DateCard from './../components/time/DateCard';
import DatePickerBaseDate from './../components/time/DatePickerBaseDate';
import TimeDifference from './../components/time/TimeDifference';
import DiscoverMoments from './../components/time/DiscoverMoments';
import SetDateFromUrl from './../components/time/SetDateFromUrl';

// Import utils
import { timePeriod } from './../utils/timePeriodUtil';

class ModeDiscoverMoments extends Component {
  render () {
    const {
      match,
      baseDate,
      nowDate
    } = this.props;
    return (
      <section className="section section--alt">
        <SetDateFromUrl match={match}/>
        <div className="container-fluid m-t-20 m-b-20">
          <div className="row">
            <div className="col-12">
              <DatePickerBaseDate/>
            </div>
          </div>
          {baseDate &&
            <div className="row">
              <div className="col-12">
                <DateCard
                  heading = "Set date"
                  date = {baseDate}
                  isInFuture = {timePeriod(nowDate, baseDate) === 'future'}
                  classes = "bl-fav-orange-dark"
                />
              </div>
            </div>
          }
          <div className="row">
            <div className="col-12">
              <DiscoverMoments />
              <TimeDifference
                timeA = {baseDate}
                timeB = {nowDate}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseDate: main.baseDate,
    baseDateIsInThePast: main.baseDateIsInThePast,
    nowDate: main.nowDate,
  }
}

const ModeDiscoverMomentsConnect = connect(
  mapStateToProps
)(ModeDiscoverMoments);

ModeDiscoverMoments.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  nowDate: PropTypes.string,
};

export default ModeDiscoverMomentsConnect;
