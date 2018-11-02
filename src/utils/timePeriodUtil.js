export const timePeriod = (yearNow, yearToCheck) => {
  const a = parseInt(yearNow, 10);
  const b = parseInt(yearToCheck, 10);
  let time = '';
  if (a > b) {
    time = 'past';
  } else {
    time = 'future';
  }
  return time;
}
