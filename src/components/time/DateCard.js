// Import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import components
import AddToCalendar from './AddToCalendar';

class DateCard extends Component {
  render () {
    const {
      // Props passed down
      heading = '',
      date = '',
      isInFuture = false,
      classes = '',
    } = this.props;
    return (
      <div className={`date${classes ? ' ' + classes : ''}`}>
        <h3 className="date__heading m-b-20">
          {heading}
        </h3>
        <div className="date__moment">
          {date}
        </div>
        {isInFuture &&
          <div className="date__calendar">
            <AddToCalendar date={date} />
          </div>
        }
      </div>
    )
  }
}

DateCard.propTypes = {
  // Props passed down
  heading: PropTypes.string,
  date: PropTypes.string,
  isInFuture: PropTypes.bool,
  classes: PropTypes.string,
};

export default DateCard;
