import { formatDateToCalendarUtil, dateIsValid } from './formatDateUtil';

describe('formatDateUtil', () => {
  it('should return formated date as "2020-01-15 14:15:52" from "January 15th 2020, 14:15:52"', () => {
    const dateString = 'January 15th 2020, 14:15:52';
    const expectedDate = '2020-01-15 14:15:52'
    const formatedDate = formatDateToCalendarUtil(dateString);
    expect(expectedDate).toEqual(formatedDate);
  })
})

describe('dateIsValid', () => {
  describe('test invalid dates', () => {
    it('"0001-01-01T00:00:00" is not a valid date', () => {
      const date = '0001-01-01T00:00:00';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(false);
    })
    it('"0001-01-01T01:00:00+01:00" is not a valid date', () => {
      const date = '0001-01-01T01:00:00+01:00';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(false);
    })
    it('"" is not a valid date', () => {
      const date = '';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(false);
    })
    it('null is not a valid date', () => {
      const date = null;
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(false);
    })
  })
  describe('test valid dates', () => {
    it('"2018-11-21T15:24:30.783Z" is a valid date', () => {
      const date = '2018-11-21T15:24:30.783Z';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(true);
    })
    it('"2019-01-11T00:00:00+01:00" is a valid date', () => {
      const date = '2019-01-11T00:00:00+01:00';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(true);
    })
    it('"2019-01-10T23:00:00Z" is a valid date', () => {
      const date = '2019-01-10T23:00:00Z';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(true);
    })
    it('"2020-02-28T00:00:00+01:00" is a valid date', () => {
      const date = '2020-02-28T00:00:00+01:00';
      const checkDate = dateIsValid(date);
      expect(checkDate).toBe(true);
    })
  })
})
