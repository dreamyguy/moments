// Import dependencies
import moment from 'moment';

// Import utils
import { localizeThousand } from './localizeThousandUtil';

// Import constants
import { MOMENT_TIME_FORMAT } from './../config';

export const timeDiff = (before, after, type) => {
  const a = moment(before, MOMENT_TIME_FORMAT);
  const b = moment(after, MOMENT_TIME_FORMAT);
  const difference = a.diff(b, type); // 'diff' is a 'moment' method
  const differenceLocalized = localizeThousand(difference);
  return `${differenceLocalized} ${type}`;
}
