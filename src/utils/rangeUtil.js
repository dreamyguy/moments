export const numberRange = (start, end) => new Array(end - start + 1).fill().map((d, i) => i + start);

export const alphabetRange = (start, end) => new Array(end.charCodeAt(0) - start.charCodeAt(0) + 1).fill().map((d, i) => String.fromCharCode(i + start.charCodeAt(0)));

// Uses:
// numberRange(2, 8); // [ 2, 3, 4, 5, 6, 7, 8 ]
// alphabetRange('c', 'g'); // [ 'c', 'd', 'e', 'f', 'g' ]