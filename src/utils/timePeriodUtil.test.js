import { timePeriod } from './timePeriodUtil';

describe('timePeriod', () => {
  describe('returns past', () => {
    it('if year is in past relative to current year [1]', () => {
      const yNow = '2018';
      const yToCheck = '1975';
      expect(timePeriod(yNow, yToCheck)).toEqual('past');
    })
    it('if year is in past relative to current year [2]', () => {
      const yNow = '2018';
      const yToCheck = '1984';
      expect(timePeriod(yNow, yToCheck)).toEqual('past');
    })
    it('if year is in past relative to current year [3]', () => {
      const yNow = '2018';
      const yToCheck = '2016';
      expect(timePeriod(yNow, yToCheck)).toEqual('past');
    })
  })
  describe('returns future', () => {
    it('if year is in future relative to current year [1]', () => {
      const yNow = '2018';
      const yToCheck = '2019';
      expect(timePeriod(yNow, yToCheck)).toEqual('future');
    })
    it('if year is in future relative to current year [2]', () => {
      const yNow = '2018';
      const yToCheck = '2075';
      expect(timePeriod(yNow, yToCheck)).toEqual('future');
    })
    it('if year is in future relative to current year [3]', () => {
      const yNow = '2018';
      const yToCheck = '2222';
      expect(timePeriod(yNow, yToCheck)).toEqual('future');
    })
    it('if year is the same as the current year', () => {
      const yNow = '2018';
      const yToCheck = '2018';
      expect(timePeriod(yNow, yToCheck)).toEqual('future');
    })
  })
})
