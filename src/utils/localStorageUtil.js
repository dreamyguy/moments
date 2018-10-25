// localStorage feature detection, courtesy https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API, simplified because we don't care if it's there but full

import {
  LOCALSTORAGE_NAME,
  LOCALSTORAGE_NAME_TIMESTAMP
} from './../config';

// Try to save to local storage, if possible return true, else false.
function isAvail () {
  let storage;
  try {
    storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return false;
  }
}

const localStorageStub = (i, v) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('No localStorage', i, v);
  }
};

export const persistState  = isAvail()
  ? (state)  => {
    window.localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state))
    window.localStorage.setItem(LOCALSTORAGE_NAME_TIMESTAMP, new Date().getTime())
  }
  : localStorageStub;

export const loadState = isAvail()
  ? () => {
    // Checks if there is a 'state' variable saved in localstorage, if so return the object, if not send an empty object
    return (window.localStorage.getItem(LOCALSTORAGE_NAME))
      ? JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME))
      : {};
  }
  : localStorageStub;

export const removePersistedState  = isAvail()
  ? () => { window.localStorage.clear();}
  : localStorageStub;

// Checks if data in localStorage should be deleted. The expiredate is set to one day in milliseconds.
export const shouldStateInLocalStorageBeDeleted = isAvail()
  ? () => {
    const oneDay = 86400000; // milliseconds in one day
    const stateSetDate = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME_TIMESTAMP));
    const newdate = new Date().getTime();
    if (stateSetDate) {
      if ((newdate - stateSetDate) >= oneDay) {
        return true
      }
    }
    return false;
  }
  : localStorageStub;
