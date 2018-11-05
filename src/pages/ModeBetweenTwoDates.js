// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import DateCard from './../components/time/DateCard';
import DatePickerBaseDate from './../components/time/DatePickerBaseDate';
import DatePickerTargetDate from './../components/time/DatePickerTargetDate';
import TimeDifference from './../components/time/TimeDifference';

class ModeRelativeToNow extends Component {
  render () {
    const {
      baseDate,
      targetDateIsInThePast,
      mode,
      targetDate
    } = this.props;
    let classesFrstRow = 'col-12 col-md-6';
    let classesSecondRow = 'col-12 col-md-6';
    if (targetDateIsInThePast) {
      classesFrstRow = 'col-12 col-md-6 order-2';
      classesSecondRow = 'col-12 col-md-6 order-1';
    }
    return (
      <section className="section section--alt">
        <div className="container m-t-20 m-b-20">
          <>
            {mode &&
              <>
                <div className="row m-b-20">
                  <div className="col-12">
                    <DatePickerBaseDate
                      instructionStart = "Choose a year for Date A:"
                      instructionYearDefined = "Refine Date A:"
                    />
                  </div>
                </div>
                <div className="row m-b-20">
                  <div className="col-12">
                    <DatePickerTargetDate
                      instructionStart = "Choose a year for Date B:"
                      instructionYearDefined = "Refine Date B:"
                    />
                  </div>
                </div>
              </>
            }
            {mode && baseDate &&
              <>
                <div className="row">
                  <div className={classesFrstRow}>
                    <DateCard
                      heading = "Date A"
                      date = {baseDate}
                      classes = "bl-fav-orange-dark"
                    />
                  </div>
                  <div className={classesSecondRow}>
                    <DateCard
                      heading = "Date B"
                      date = {targetDate}
                      classes = "bl-purple"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <TimeDifference
                      timeA = {baseDate}
                      timeB = {targetDate}
                    />
                  </div>
                </div>
              </>
            }
          </>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseDate: main.baseDate,
    targetDateIsInThePast: main.targetDateIsInThePast,
    mode: main.mode,
    targetDate: main.targetDate
  }
}

const ModeRelativeToNowConnect = connect(
  mapStateToProps
)(ModeRelativeToNow);

ModeRelativeToNow.propTypes = {
  baseDate: PropTypes.string,
  targetDateIsInThePast: PropTypes.bool,
  mode: PropTypes.string,
  targetDate: PropTypes.string
};

export default ModeRelativeToNowConnect;
