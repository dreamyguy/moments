import { numberRange, alphabetRange } from './rangeUtil';

describe('rangeUtil', () => {
  describe('numberRange', () => {
    it('between 2 & 8 is correct', () => {
      const start = 2;
      const end = 8;
      expect(numberRange(start, end)).toEqual([ 2, 3, 4, 5, 6, 7, 8 ]);
    })
    it('between 3 & 14 is correct', () => {
      const start = 3;
      const end = 14;
      expect(numberRange(start, end)).toEqual([ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]);
    })
    it('between 5 & 21 is correct', () => {
      const start = 5;
      const end = 21;
      expect(numberRange(start, end)).toEqual([ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]);
    })
  })
  describe('alphabetRange', () => {
    it('between c & g is correct', () => {
      const start = 'c';
      const end = 'g';
      expect(alphabetRange(start, end)).toEqual([ 'c', 'd', 'e', 'f', 'g' ]);
    })
    it('between e & m is correct', () => {
      const start = 'e';
      const end = 'm';
      expect(alphabetRange(start, end)).toEqual([ 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ]);
    })
    it('between h & k is correct', () => {
      const start = 'h';
      const end = 'k';
      expect(alphabetRange(start, end)).toEqual([ 'h', 'i', 'j', 'k' ]);
    })
    it('between y & z is correct', () => {
      const start = 'y';
      const end = 'z';
      expect(alphabetRange(start, end)).toEqual([ 'y', 'z' ]);
    })
  })
})
