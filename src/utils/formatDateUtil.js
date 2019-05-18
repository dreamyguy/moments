import moment from 'moment';
import { MOMENT_TIME_FORMAT, MOMENT_TIME_FORMAT_CALENDAR } from './../config';

// Returns a boolean that determines if date is valid or not
export const dateIsValid = date => {
  if (
    date === '0001-01-01T00:00:00' ||
    date === '0001-01-01T01:00:00+01:00' ||
    date === '' ||
    date === null
  ) {
    return false;
  }
  if (moment(date)) {
    // 'date' is not one of the exceptions and is a date, therefore valid
    return true;
  }
  // not a date
  if (process.env.NODE_ENV !== 'test') {
    console.error(`[dateIsValid]: 'date' did not pass validation => [${JSON.stringify(date)}]`);
  }
  return false;
}

// Returns date in the format expected by the backend
export const formatDateToCalendarUtil = date => {
  if (dateIsValid(date)) {
    const theDate = moment(date, MOMENT_TIME_FORMAT).format(MOMENT_TIME_FORMAT_CALENDAR);
    return theDate;
  }
}
