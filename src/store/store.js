// Import dependencies
import { createStore, combineReducers, compose } from 'redux';
import throttle from 'lodash/throttle';

// Import globals
import {
  TIME_SAVE_TO_LOCAL,
  LOCALSTORAGE_SAVE_STATUS
} from './../config'

// Import utils
import {
  loadState,
  persistState,
  removePersistedState,
  shouldStateInLocalStorageBeDeleted
} from './../utils/localStorageUtil';

// Import Saga
import {
  reducerMain
} from './duck/ducks';

export default function (mockWindow) {
  let persistedState = loadState();
  const rootReducer = combineReducers({
    main: reducerMain
  });

  // Receive mock window or use global window
  let finalWindow = mockWindow;
  if (typeof window !== 'undefined') {
    finalWindow = window;
  }

  // Redux dev tool extension snippet
  const composeEnhancers = finalWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Creating the store and connecting the sagas with the redux devtool extension
  let store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers()
  );

  // Subscribe to changes done to the store
  // Throttle is used to make sure that there is not to many calls to the store
  // Trottle -> https://lodash.com/docs/4.17.4#throttle

  if (LOCALSTORAGE_SAVE_STATUS) {
    store.subscribe(throttle(() => {
      // Save the entire store to local storage as long as within 24h, else delete old localstorage data
      (!shouldStateInLocalStorageBeDeleted())
        ? persistState(store.getState())
        : removePersistedState();
    }, TIME_SAVE_TO_LOCAL))
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.log('NOT SAVING TO LOCALSTORAGE!');
    }
  }
  return store
}
