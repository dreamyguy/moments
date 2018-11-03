export const timePeriod = (yearNow, yearToCheck) => {
  let time = '';
  if (yearToCheck !== '' && yearToCheck !== undefined) {
    const a = parseInt(yearNow, 10);
    const b = parseInt(yearToCheck, 10);
    if (a > b) {
      time = 'past';
    } else {
      time = 'future';
    }
  }
  return time;
}
