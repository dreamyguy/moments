// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import DateCard from './../components/time/DateCard';
import DatePickerBaseDate from './../components/time/DatePickerBaseDate';
import DatePickerTargetDate from './../components/time/DatePickerTargetDate';
import TimeDifference from './../components/time/TimeDifference';
import SetDateFromUrl from './../components/time/SetDateFromUrl';

class ModeBetweenTwoDates extends Component {
  render () {
    const {
      match,
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
            {mode && baseDate && targetDate &&
              <>
                <div className="row">
                  <div className={classesFrstRow}>
                    <DateCard
                      heading = "Date B"
                      date = {targetDate}
                      classes = "bl-purple"
                    />
                  </div>
                  <div className={classesSecondRow}>
                    <DateCard
                      heading = "Date A"
                      date = {baseDate}
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
  targetDate: PropTypes.string
};

export default ModeBetweenTwoDatesConnect;
