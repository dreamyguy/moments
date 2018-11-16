import {
  reducerMain,
  initialStateMain
} from '../ducks';

describe('Reducers', () => {
  it('should return the initial state when initiated', () => {
    const initialStore = reducerMain(undefined, {});
    expect(initialStore).toEqual(initialStateMain);
  }),
  it('should handle LOADING', () => {
    const loadReducer = reducerMain([], { type: 'LOADING' });
    expect(loadReducer).toEqual({'loading': true});
  })
});
