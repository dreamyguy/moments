// Import dependencies
import moment from 'moment';

export const numberRange = (start, end) => new Array(end - start + 1).fill().map((d, i) => i + start);

export const alphabetRange = (start, end) => new Array(end.charCodeAt(0) - start.charCodeAt(0) + 1).fill().map((d, i) => String.fromCharCode(i + start.charCodeAt(0)));

// Uses:
// numberRange(2, 8); // [ 2, 3, 4, 5, 6, 7, 8 ]
// alphabetRange('c', 'g'); // [ 'c', 'd', 'e', 'f', 'g' ]

export const localizeThousand = value => value.toLocaleString().replace('-', '');

export const timeDiff = (before, after, type) => {
  const a = moment(before, 'MMMM Do YYYY, h:mm:ss a');
  const b = moment(after, 'MMMM Do YYYY, h:mm:ss a');
  const difference = a.diff(b, type); // 'diff' is a 'moment' method
  const differenceLocalized = localizeThousand(difference);
  return `${differenceLocalized} ${type}`;
}
