// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DateCard extends Component {
  render () {
    const {
      // Props passed down
      heading = '',
      date = '',
      classes = '',
      // Props coming from state
      baseDateIsInThePast = '',
      basePeriod = '',
    } = this.props;
    let periodClasses = '';
    if (heading === 'Date A' || heading === 'Set date') {
      periodClasses = ` period period--${basePeriod}`;
    }
    return (
      <div className={`date${classes ? ' ' + classes : ''}${baseDateIsInThePast ? ' base-date-is-in-the-past' : ''}${periodClasses}`}>
        <h3 className="date__heading m-b-20">
          {heading}
        </h3>
        <div className="date__moment">
          {date}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseDateIsInThePast: main.baseDateIsInThePast,
    basePeriod: main.basePeriod
  }
}

const DateCardConnect = connect(
  mapStateToProps,
)(DateCard);

DateCard.propTypes = {
  // Props passed down
  heading: PropTypes.string,
  date: PropTypes.string,
  classes: PropTypes.string,
  // Props coming from state
  baseDateIsInThePast: PropTypes.bool,
  basePeriod: PropTypes.string,
};

export default DateCardConnect;
