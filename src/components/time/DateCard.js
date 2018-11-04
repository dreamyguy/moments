// Import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateCard extends Component {
  render () {
    const {
      heading = '',
      date = '',
      classes = ''
    } = this.props;
    return (
      <div className={`date${classes ? ' ' + classes : ''}`}>
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

DateCard.propTypes = {
  heading: PropTypes.string,
  date: PropTypes.string,
  classes: PropTypes.string,
};

export default DateCard;
