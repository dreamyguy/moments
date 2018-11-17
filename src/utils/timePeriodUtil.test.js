import { timePeriod } from './timePeriodUtil';
import props from './../test/mockData';

describe('timePeriod', () => {
  describe('returns past', () => {
    it('if year is in past relative to current year', () => {
      const dNow = props.nowYear; // '2018'
      const dToCheck = props.baseYear; // '2017'
      expect(timePeriod(dNow, dToCheck)).toEqual('past');
    })
    it('if year is in past relative to current year, full date', () => {
      const dNow = props.nowDate; // 'November 16th 2018, 19:11:56'
      const dToCheck = props.baseDate; // 'May 22nd 2017, 00:22:00'
      expect(timePeriod(dNow, dToCheck)).toEqual('past');
    })
    it('if year is in past relative to current year, full date one day behind', () => {
      const dNow = props.nowDate; // 'November 16th 2018, 19:11:56'
      const dToCheck = 'November 15th 2018, 19:11:56';
      expect(timePeriod(dNow, dToCheck)).toEqual('past');
    })
    it('if year is in past relative to current year, full date against partial date', () => {
      const dNow = props.nowDailyDate; // 'November 16th 2018'
      const dToCheck = props.baseDate; // 'May 22nd 2017, 00:22:00'
      expect(timePeriod(dNow, dToCheck)).toEqual('past');
    })
  })
  describe('returns future', () => {
    it('if year is in future relative to current year [1]', () => {
      const dNow = '2018';
      const dToCheck = '2019';
      expect(timePeriod(dNow, dToCheck)).toEqual('future');
    })
    it('if year is in future relative to current year [2]', () => {
      const dNow = '2018';
      const dToCheck = '2065';
      expect(timePeriod(dNow, dToCheck)).toEqual('future');
    })
    it('if year is in future relative to current year [3]', () => {
      const dNow = '2018';
      const dToCheck = '2222';
      expect(timePeriod(dNow, dToCheck)).toEqual('future');
    })
    it('if year is in past relative to current year, full date one second ahead', () => {
      const dNow = props.nowDate; // 'November 16th 2018, 19:11:56'
      const dToCheck = 'November 16th 2018, 19:11:57';
      expect(timePeriod(dNow, dToCheck)).toEqual('future');
    })
  })
  describe('returns now', () => {
    it('if year is the same as the current year', () => {
      const dNow = '2018';
      const dToCheck = '2018';
      expect(timePeriod(dNow, dToCheck)).toEqual('now');
    })
    it('if year is in past relative to current year, full date exact to the second', () => {
      const dNow = props.nowDate; // 'November 16th 2018, 19:11:56'
      const dToCheck = 'November 16th 2018, 19:11:56';
      expect(timePeriod(dNow, dToCheck)).toEqual('now');
    })
  })
  describe('returns empty string', () => {
    it('if year passed is an empty string', () => {
      const dNow = '2018';
      const dToCheck = '';
      expect(timePeriod(dNow, dToCheck)).toEqual('');
    })
    it('if year passed is undefined', () => {
      const dNow = '2018';
      const dToCheck = undefined;
      expect(timePeriod(dNow, dToCheck)).toEqual('');
    })
  })
})
