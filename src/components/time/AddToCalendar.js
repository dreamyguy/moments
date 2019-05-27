// Import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import utils
import { formatDateToCalendar } from './../../utils/formatDateUtil';

// Import components
import ReactAddToCalendar from './ReactAddToCalendar';

class AddToCalendar extends Component {
  constructor (props) {
    super(props);
    // @TODO: since all is in store, use store here as well
    this.state = {
      event: {
        title: 'Moments - Event name',
        description: 'Moments - Event description',
        location: 'https://dreamyguy.github.io/moments/',
        startTime: '',
        endTime: ''
      }
    };
  }
  render () {
    const {
      event
    } = this.state; // @TODO: since all is in store, use store here as well
    const {
      date = ''
    } = this.props;
    return (
      <ReactAddToCalendar
        event={{
          title: event.title,
          description: event.description,
          location: event.location,
          startTime: formatDateToCalendar(date),
          endTime: formatDateToCalendar(date),
        }}
      />
    )
  }
}

AddToCalendar.propTypes = {
  date: PropTypes.string.isRequired
};

export default AddToCalendar;
