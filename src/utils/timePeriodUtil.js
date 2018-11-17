// Import dependencies
import moment from 'moment';

// Import constants
import { MOMENT_TIME_FORMAT } from './../config';

export const timePeriod = (dateA, dateB) => {
  const a = moment(dateA, MOMENT_TIME_FORMAT);
  const b = moment(dateB, MOMENT_TIME_FORMAT);
  const difference = a.diff(b); // 'diff' is a 'moment' method
  let time = '';
  if (difference > 0) {
    time = 'past';
  } else if (difference === 0) {
    time = 'now';
  } else if (difference < 0) {
    time = 'future';
  }
  return time;
}
