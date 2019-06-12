// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import DateCard from './../components/time/DateCard';
import DatePickerBaseDate from './../components/time/DatePickerBaseDate';
import DatePickerTargetDate from './../components/time/DatePickerTargetDate';
import SetDateFromUrl from './../components/time/SetDateFromUrl';
import ShareDate from './../components/time/ShareDate';
import TimeDifference from './../components/time/TimeDifference';

// Import utils
import { timePeriod } from './../utils/timePeriodUtil';

class ModeBetweenTwoDates extends Component {
  render () {
    const {
      match,
      nowDate,
      baseDate,
      baseDateIsInThePast,
      mode,
      targetDate
    } = this.props;
    let classesFrstRow = 'col-12 col-md-6';
    let classesSecondRow = 'col-12 col-md-6';
    if (baseDateIsInThePast) {
      classesFrstRow = 'col-12 col-md-6 order-2';
      classesSecondRow = 'col-12 col-md-6 order-1';
    }
    return (
      <section className="section section--alt">
        <SetDateFromUrl match={match}/>
        <div className="container-fluid m-t-20 m-b-20">
          <>
            {mode &&
              <>
                <div className="row">
                  <div className="col-12">
                    <DatePickerBaseDate
                      instructionStart = "Enter a year for Date A:"
                      instructionYearDefined = "Refine Date A:"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <DatePickerTargetDate
                      instructionStart = "Enter a year for Date B:"
                      instructionYearDefined = "Refine Date B:"
                    />
                  </div>
                </div>
              </>
            }
            {mode && baseDate && targetDate &&
              <>
                <div className="row">
                  <div className="col-12">
                    <div className="container-flex">
                      <ShareDate classes="m-b-40"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={classesFrstRow}>
                    <DateCard
                      heading = "Date B"
                      date = {targetDate}
                      isInFuture = {timePeriod(nowDate, targetDate) === 'future'}
                      classes = "bl-purple"
                    />
                  </div>
                  <div className={classesSecondRow}>
                    <DateCard
                      heading = "Date A"
                      date = {baseDate}
                      isInFuture = {timePeriod(nowDate, baseDate) === 'future'}
                      classes = "bl-fav-orange-dark"
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
    baseDateIsInThePast: main.baseDateIsInThePast,
    mode: main.mode,
    nowDate: main.nowDate,
    targetDate: main.targetDate
  }
}

const ModeBetweenTwoDatesConnect = connect(
  mapStateToProps
)(ModeBetweenTwoDates);

ModeBetweenTwoDates.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  mode: PropTypes.string,
  nowDate: PropTypes.string,
  targetDate: PropTypes.string
};

export default ModeBetweenTwoDatesConnect;
