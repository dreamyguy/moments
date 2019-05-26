import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

// Mock navigator
const navigatorMock = {
  msSaveOrOpenBlob: jest.fn(),
  platform: jest.fn(),
  serviceWorker: jest.fn(),
  userAgent: jest.fn(),
  vendor: jest.fn()
};
global.navigator = navigatorMock;
