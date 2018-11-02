import { timeDiff } from './timeDiffUtil';

describe('timeDiff', () => {
  describe('returns the correct time value for', () => {
    const baseDate = 'February 19th 1975, 21:06:53';
    const nowDate = 'November 2nd 2018, 22:06:53';
    it('years', () => {
      expect(timeDiff(baseDate, nowDate, 'years')).toEqual('43 years');
    })
    it('months', () => {
      expect(timeDiff(baseDate, nowDate, 'months')).toEqual('524 months');
    })
    it('weeks', () => {
      expect(timeDiff(baseDate, nowDate, 'weeks')).toEqual('2,280 weeks');
    })
    it('days', () => {
      expect(timeDiff(baseDate, nowDate, 'days')).toEqual('15,962 days');
    })
    it('hours', () => {
      expect(timeDiff(baseDate, nowDate, 'hours')).toEqual('383,089 hours');
    })
    it('minutes', () => {
      expect(timeDiff(baseDate, nowDate, 'minutes')).toEqual('22,985,340 minutes');
    })
    it('seconds', () => {
      expect(timeDiff(baseDate, nowDate, 'seconds')).toEqual('1,379,120,400 seconds');
    })
  })
});
