// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import DateCard from './../components/time/DateCard';
import DatePickerBaseDate from './../components/time/DatePickerBaseDate';
import TimeDifference from './../components/time/TimeDifference';
import DiscoverMoments from './../components/time/DiscoverMoments';

class ModeDiscoverMoments extends Component {
  render () {
    const {
      baseDate,
      nowDate
    } = this.props;
    return (
      <section className="section section--alt">
        <div className="container m-t-20 m-b-20">
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
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
    nowDate: main.nowDate,
  }
}

const ModeDiscoverMomentsConnect = connect(
  mapStateToProps
)(ModeDiscoverMoments);

ModeDiscoverMoments.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
  nowDate: PropTypes.string,
};

export default ModeDiscoverMomentsConnect;
