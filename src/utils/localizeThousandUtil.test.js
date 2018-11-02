import { localizeThousand } from './localizeThousandUtil';

describe('localizeThousandUtil', () => {
  describe('return correctly formatted thousands', () => {
    it('1234 => 1,234', () => {
      const tho = 1234;
      expect(localizeThousand(tho)).toEqual('1,234');
    })
    it('123456 => 123,456', () => {
      const tho = 123456;
      expect(localizeThousand(tho)).toEqual('123,456');
    })
    it('1234567 => 1,234,567', () => {
      const tho = 1234567;
      expect(localizeThousand(tho)).toEqual('1,234,567');
    })
    it('12345678900000000 => 12,345,678,900,000,000', () => {
      const tho = 12345678900000000;
      expect(localizeThousand(tho)).toEqual('12,345,678,900,000,000');
    })
  })
})
