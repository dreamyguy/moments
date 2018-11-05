// Import dependencies
import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

// Import components
import App from './App';

// Import a page component, just for testing the rendering
import ModeRelativeToNow from './../pages/ModeRelativeToNow';

// Import store
import initStore from './../store/store';

// Mock window
const mockWindow = {};

const store = initStore(mockWindow);

describe('App', () => {
  const app = shallow(
    <Provider store={store}>
      <App>
        <ModeRelativeToNow/>
      </App>
    </Provider>
  );
  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });
});
