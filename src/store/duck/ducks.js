
// ActionTypes - generic
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const CLEAR_STATE = 'CLEAR_STATE';
const SET_MODE = 'SET_MODE'
// ActionTypes - moment - now
const SET_MOMENT_NOW_DATE = 'SET_MOMENT_NOW_DATE';
const SET_MOMENT_NOW_YEAR = 'SET_MOMENT_NOW_YEAR';
const SET_MOMENT_NOW_MONTH = 'SET_MOMENT_NOW_MONTH';
const SET_MOMENT_NOW_WEEK = 'SET_MOMENT_NOW_WEEK';
const SET_MOMENT_NOW_DAY = 'SET_MOMENT_NOW_DAY';
const SET_MOMENT_NOW_HOUR = 'SET_MOMENT_NOW_HOUR';
const SET_MOMENT_NOW_MINUTE = 'SET_MOMENT_NOW_MINUTE';
const SET_MOMENT_NOW_SECOND = 'SET_MOMENT_NOW_SECOND';
// ActionTypes - moment - base
const SET_MOMENT_BASE_DATE = 'SET_MOMENT_BASE_DATE';
const SET_MOMENT_BASE_NAME = 'SET_MOMENT_BASE_NAME';
const SET_MOMENT_BASE_DATE_IS_IN_THE_PAST = 'SET_MOMENT_BASE_DATE_IS_IN_THE_PAST';
const SET_MOMENT_BASE_DATE_IS_IN_THE_FUTURE = 'SET_MOMENT_BASE_DATE_IS_IN_THE_FUTURE';
const SET_MOMENT_BASE_YEAR_DEFINED = 'SET_MOMENT_BASE_YEAR_DEFINED';
const SET_MOMENT_BASE_YEAR = 'SET_MOMENT_BASE_YEAR';
const SET_MOMENT_BASE_MONTH = 'SET_MOMENT_BASE_MONTH';
const SET_MOMENT_BASE_WEEK = 'SET_MOMENT_BASE_WEEK';
const SET_MOMENT_BASE_DAY = 'SET_MOMENT_BASE_DAY';
const SET_MOMENT_BASE_HOUR = 'SET_MOMENT_BASE_HOUR';
const SET_MOMENT_BASE_MINUTE = 'SET_MOMENT_BASE_MINUTE';
const SET_MOMENT_BASE_SECOND = 'SET_MOMENT_BASE_SECOND';
// ActionTypes - moment - target
const SET_MOMENT_TARGET_DATE = 'SET_MOMENT_TARGET_DATE';
const SET_MOMENT_TARGET_NAME = 'SET_MOMENT_TARGET_NAME';
const SET_MOMENT_TARGET_DATE_IS_IN_THE_PAST = 'SET_MOMENT_TARGET_DATE_IS_IN_THE_PAST';
const SET_MOMENT_TARGET_DATE_IS_IN_THE_FUTURE = 'SET_MOMENT_TARGET_DATE_IS_IN_THE_FUTURE';
const SET_MOMENT_TARGET_YEAR_DEFINED = 'SET_MOMENT_TARGET_YEAR_DEFINED';
const SET_MOMENT_TARGET_YEAR = 'SET_MOMENT_TARGET_YEAR';
const SET_MOMENT_TARGET_MONTH = 'SET_MOMENT_TARGET_MONTH';
const SET_MOMENT_TARGET_WEEK = 'SET_MOMENT_TARGET_WEEK';
const SET_MOMENT_TARGET_DAY = 'SET_MOMENT_TARGET_DAY';
const SET_MOMENT_TARGET_HOUR = 'SET_MOMENT_TARGET_HOUR';
const SET_MOMENT_TARGET_MINUTE = 'SET_MOMENT_TARGET_MINUTE';
const SET_MOMENT_TARGET_SECOND = 'SET_MOMENT_TARGET_SECOND';
// ActionTypes - moment - add to base
const SET_ADD_TO_BASE_DATE_YEARS = 'SET_ADD_TO_BASE_DATE_YEARS';
const SET_ADD_TO_BASE_DATE_MONTHS = 'SET_ADD_TO_BASE_DATE_MONTHS';
const SET_ADD_TO_BASE_DATE_WEEKS = 'SET_ADD_TO_BASE_DATE_WEEKS';
const SET_ADD_TO_BASE_DATE_DAYS = 'SET_ADD_TO_BASE_DATE_DAYS';
const SET_ADD_TO_BASE_DATE_HOURS = 'SET_ADD_TO_BASE_DATE_HOURS';
const SET_ADD_TO_BASE_DATE_MINUTES = 'SET_ADD_TO_BASE_DATE_MINUTES';
const SET_ADD_TO_BASE_DATE_SECONDS = 'SET_ADD_TO_BASE_DATE_SECONDS';
// ActionTypes - frontend
const SET_FRONTEND = 'SET_FRONTEND';
const SET_MOBILE_MENU_STATUS = 'SET_MOBILE_MENU_STATUS';

// Initial state
export const initialStateMain = {
  // Generic
  loading: false,
  error: false,
  errorId: '',
  errorCode: '',
  errorMessage: '',
  errorMessageTitle: '',
  mode: '', // 'pastToNow', 'nowToFuture', 'twoDates', 'addToBase'
  // Now moment
  nowDate: '',
  nowYear: '',
  nowMonth: '',
  nowDay: '',
  nowHour: '',
  nowMinute: '',
  nowSecond: '',
  // Base moment
  baseDate: '',
  baseDateName: '',
  baseDateIsInThePast: false,
  baseDateIsInTheFuture: false,
  baseYearDefined: false,
  baseMonthDefined: false,
  baseDayDefined: false,
  baseYear: '',
  baseMonth: '',
  baseDay: '',
  baseHour: '',
  baseMinute: '',
  baseSecond: '',
  // Target moment
  targetDate: '',
  targetDateName: '',
  targetDateIsInThePast: false,
  targetDateIsInTheFuture: false,
  targetYearDefined: false,
  targetMonthDefined: false,
  targetDayDefined: false,
  targetYear: '',
  targetMonth: '',
  targetDay: '',
  targetHour: '',
  targetMinute: '',
  targetSecond: '',
  // 'Add to base' mode
  addToBaseDateYears: null,
  addToBaseDateMonths: null,
  addToBaseDateWeeks: null,
  addToBaseDateDays: null,
  addToBaseDateHours: null,
  addToBaseDateMinutes: null,
  addToBaseDateSeconds: null,
  // Frontend
  frontend: {
    mobileMenuStatus: false,
  }
}

// Reducers
export function reducerMain (state = initialStateMain, action) {
  switch (action.type) {
    // generic
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorId: action.payload.errorId,
        errorCode: action.payload.errorCode,
        errorMessage: action.payload.errorMessage,
        errorMessageTitle: action.payload.errorMessageTitle
      }
    case CLEAR_STATE:
      return initialStateMain
    case SET_MODE:
      return {
        ...state,
        loading: false,
        mode: action.payload
      }
    // Now moment
    case SET_MOMENT_NOW_DATE:
      return {
        ...state,
        loading: false,
        nowDate: action.payload
      }
    case SET_MOMENT_NOW_YEAR:
      return {
        ...state,
        loading: false,
        nowYear: action.payload,
      }
    case SET_MOMENT_NOW_MONTH:
      return {
        ...state,
        loading: false,
        nowMonth: action.payload
      }
    case SET_MOMENT_NOW_WEEK:
      return {
        ...state,
        loading: false,
        nowWeek: action.payload
      }
    case SET_MOMENT_NOW_DAY:
      return {
        ...state,
        loading: false,
        nowDay: action.payload
      }
    case SET_MOMENT_NOW_HOUR:
      return {
        ...state,
        loading: false,
        nowHour: action.payload
      }
    case SET_MOMENT_NOW_MINUTE:
      return {
        ...state,
        loading: false,
        nowMinute: action.payload
      }
    case SET_MOMENT_NOW_SECOND:
      return {
        ...state,
        loading: false,
        nowSecond: action.payload
      }
    // Base moment
    case SET_MOMENT_BASE_DATE:
      return {
        ...state,
        loading: false,
        baseDate: action.payload
      }
    case SET_MOMENT_BASE_NAME:
      return {
        ...state,
        loading: false,
        baseName: action.payload
      }
    case SET_MOMENT_BASE_DATE_IS_IN_THE_PAST:
      return {
        ...state,
        loading: false,
        baseDateIsInThePast: action.payload
      }
    case SET_MOMENT_BASE_DATE_IS_IN_THE_FUTURE:
      return {
        ...state,
        loading: false,
        baseDateIsInTheFuture: action.payload
      }
    case SET_MOMENT_BASE_YEAR_DEFINED:
      return {
        ...state,
        loading: false,
        baseYearDefined: action.payload,
      }
    case SET_MOMENT_BASE_YEAR:
      return {
        ...state,
        loading: false,
        // Note that we can't set 'baseYearDefined: true' here,
        // as this is an input field that needs to be validated. Because of that
        // we should use 'SET_MOMENT_BASE_YEAR_DEFINED' instead
        baseYear: action.payload,
      }
    case SET_MOMENT_BASE_MONTH:
      return {
        ...state,
        loading: false,
        baseMonthDefined: true,
        baseMonth: action.payload
      }
    case SET_MOMENT_BASE_WEEK:
      return {
        ...state,
        loading: false,
        baseWeekDefined: true,
        baseWeek: action.payload
      }
    case SET_MOMENT_BASE_DAY:
      return {
        ...state,
        loading: false,
        baseDayDefined: true,
        baseDay: action.payload
      }
    case SET_MOMENT_BASE_HOUR:
      return {
        ...state,
        loading: false,
        baseHour: action.payload
      }
    case SET_MOMENT_BASE_MINUTE:
      return {
        ...state,
        loading: false,
        baseMinute: action.payload
      }
    case SET_MOMENT_BASE_SECOND:
      return {
        ...state,
        loading: false,
        baseSecond: action.payload
      }
    // Target moment
    case SET_MOMENT_TARGET_DATE:
      return {
        ...state,
        loading: false,
        targetDate: action.payload
      }
    case SET_MOMENT_TARGET_NAME:
      return {
        ...state,
        loading: false,
        targetName: action.payload
      }
    case SET_MOMENT_TARGET_DATE_IS_IN_THE_PAST:
      return {
        ...state,
        loading: false,
        targetDateIsInThePast: action.payload
      }
    case SET_MOMENT_TARGET_DATE_IS_IN_THE_FUTURE:
      return {
        ...state,
        loading: false,
        targetDateIsInTheFuture: action.payload
      }
    case SET_MOMENT_TARGET_YEAR_DEFINED:
      return {
        ...state,
        loading: false,
        targetYearDefined: action.payload,
      }
    case SET_MOMENT_TARGET_YEAR:
      return {
        ...state,
        loading: false,
        // Note that we can't set 'targetYearDefined: true' here,
        // as this is an input field that needs to be validated. Because of that
        // we should use 'SET_MOMENT_TARGET_YEAR_DEFINED' instead
        targetYear: action.payload,
      }
    case SET_MOMENT_TARGET_MONTH:
      return {
        ...state,
        loading: false,
        targetMonthDefined: true,
        targetMonth: action.payload
      }
    case SET_MOMENT_TARGET_WEEK:
      return {
        ...state,
        loading: false,
        targetWeekDefined: true,
        targetWeek: action.payload
      }
    case SET_MOMENT_TARGET_DAY:
      return {
        ...state,
        loading: false,
        targetDayDefined: true,
        targetDay: action.payload
      }
    case SET_MOMENT_TARGET_HOUR:
      return {
        ...state,
        loading: false,
        targetHour: action.payload
      }
    case SET_MOMENT_TARGET_MINUTE:
      return {
        ...state,
        loading: false,
        targetMinute: action.payload
      }
    case SET_MOMENT_TARGET_SECOND:
      return {
        ...state,
        loading: false,
        targetSecond: action.payload
      }
    // 'Add to base' mode
    case SET_ADD_TO_BASE_DATE_YEARS:
      return {
        ...state,
        loading: false,
        addToBaseDateYears: parseInt(action.payload, 10)
      }
    case SET_ADD_TO_BASE_DATE_MONTHS:
      return {
        ...state,
        loading: false,
        addToBaseDateMonths: parseInt(action.payload, 10)
      }
    case SET_ADD_TO_BASE_DATE_WEEKS:
      return {
        ...state,
        loading: false,
        addToBaseDateWeeks: parseInt(action.payload, 10)
      }
    case SET_ADD_TO_BASE_DATE_DAYS:
      return {
        ...state,
        loading: false,
        addToBaseDateDays: parseInt(action.payload, 10)
      }
    case SET_ADD_TO_BASE_DATE_HOURS:
      return {
        ...state,
        loading: false,
        addToBaseDateHours: parseInt(action.payload, 10)
      }
    case SET_ADD_TO_BASE_DATE_MINUTES:
      return {
        ...state,
        loading: false,
        addToBaseDateMinutes: parseInt(action.payload, 10)
      }
    case SET_ADD_TO_BASE_DATE_SECONDS:
      return {
        ...state,
        loading: false,
        addToBaseDateSeconds: parseInt(action.payload, 10)
      }
    // Frontend
    case SET_FRONTEND:
      return {
        ...state,
        frontend: action.payload
      }
    case SET_MOBILE_MENU_STATUS:
      return {
        ...state,
        loading: false,
        frontend: {
          ...state.frontend,
          mobileMenuStatus: action.payload
        }
      }
    default:
      return state
  }
}

// Actions Generic
export const clearStateAction = (action) => ({ type: CLEAR_STATE, payload: action });
export const errorAction = (action) => ({ type: ERROR, payload: { errorId: action.errorId, errorCode: action.errorCode, errorMessage: action.errorMessage, errorMessageFriendlyTitle: action.errorMessageFriendlyTitle, errorMessageFriendly: action.errorMessageFriendly }}); // for testing
export const loadingAction = (action) => ({ type: LOADING, payload: action }); // for testing
export const setModeAction = (action) => ({ type: SET_MODE, payload: action });
// ActionTypes - moment - now
export const setMomentNowDateAction = (action) => ({ type: SET_MOMENT_NOW_DATE, payload: action })
export const setMomentNowYearAction = (action) => ({ type: SET_MOMENT_NOW_YEAR, payload: action });
export const setMomentNowMonthAction = (action) => ({ type: SET_MOMENT_NOW_MONTH, payload: action });
export const setMomentNowWeekAction = (action) => ({ type: SET_MOMENT_NOW_WEEK, payload: action });
export const setMomentNowDayAction = (action) => ({ type: SET_MOMENT_NOW_DAY, payload: action });
export const setMomentNowHourAction = (action) => ({ type: SET_MOMENT_NOW_HOUR, payload: action });
export const setMomentNowMinuteAction = (action) => ({ type: SET_MOMENT_NOW_MINUTE, payload: action });
export const setMomentNowSecondAction = (action) => ({ type: SET_MOMENT_NOW_SECOND, payload: action });
// ActionTypes - moment - base
export const setMomentBaseDateAction = (action) => ({ type: SET_MOMENT_BASE_DATE, payload: action });
export const setMomentBaseNameAction = (action) => ({ type: SET_MOMENT_BASE_NAME, payload: action });
export const setMomentBaseDateIsInThePastAction = (action) => ({ type: SET_MOMENT_BASE_DATE_IS_IN_THE_PAST, payload: action });
export const setMomentBaseDateIsInTheFutureAction = (action) => ({ type: SET_MOMENT_BASE_DATE_IS_IN_THE_FUTURE, payload: action });
export const setMomentBaseYearDefinedAction = (action) => ({ type: SET_MOMENT_BASE_YEAR_DEFINED, payload: action });
export const setMomentBaseYearAction = (action) => ({ type: SET_MOMENT_BASE_YEAR, payload: action });
export const setMomentBaseMonthAction = (action) => ({ type: SET_MOMENT_BASE_MONTH, payload: action });
export const setMomentBaseWeekAction = (action) => ({ type: SET_MOMENT_BASE_WEEK, payload: action });
export const setMomentBaseDayAction = (action) => ({ type: SET_MOMENT_BASE_DAY, payload: action });
export const setMomentBaseHourAction = (action) => ({ type: SET_MOMENT_BASE_HOUR, payload: action });
export const setMomentBaseMinuteAction = (action) => ({ type: SET_MOMENT_BASE_MINUTE, payload: action });
export const setMomentBaseSecondAction = (action) => ({ type: SET_MOMENT_BASE_SECOND, payload: action });
// ActionTypes - moment - target
export const setMomentTargetDateAction = (action) => ({ type: SET_MOMENT_TARGET_DATE, payload: action });
export const setMomentTargetNameAction = (action) => ({ type: SET_MOMENT_TARGET_NAME, payload: action });
export const setMomentTargetDateIsInThePastAction = (action) => ({ type: SET_MOMENT_TARGET_DATE_IS_IN_THE_PAST, payload: action });
export const setMomentTargetDateIsInTheFutureAction = (action) => ({ type: SET_MOMENT_TARGET_DATE_IS_IN_THE_FUTURE, payload: action });
export const setMomentTargetYearDefinedAction = (action) => ({ type: SET_MOMENT_TARGET_YEAR_DEFINED, payload: action });
export const setMomentTargetYearAction = (action) => ({ type: SET_MOMENT_TARGET_YEAR, payload: action });
export const setMomentTargetMonthAction = (action) => ({ type: SET_MOMENT_TARGET_MONTH, payload: action });
export const setMomentTargetWeekAction = (action) => ({ type: SET_MOMENT_TARGET_WEEK, payload: action });
export const setMomentTargetDayAction = (action) => ({ type: SET_MOMENT_TARGET_DAY, payload: action });
export const setMomentTargetHourAction = (action) => ({ type: SET_MOMENT_TARGET_HOUR, payload: action });
export const setMomentTargetMinuteAction = (action) => ({ type: SET_MOMENT_TARGET_MINUTE, payload: action });
export const setMomentTargetSecondAction = (action) => ({ type: SET_MOMENT_TARGET_SECOND, payload: action });
// ActionTypes - moment - add to base
export const setAddToBaseYearsAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_YEARS, payload: action });
export const setAddToBaseMonthsAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_MONTHS, payload: action });
export const setAddToBaseWeeksAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_WEEKS, payload: action });
export const setAddToBaseDaysAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_DAYS, payload: action });
export const setAddToBaseHoursAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_HOURS, payload: action });
export const setAddToBaseMinutesAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_MINUTES, payload: action });
export const setAddToBaseSecondsAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_SECONDS, payload: action });
// ActionTypes - frontend
export const setMobileMenuStatusAction = (action) => ({ type: SET_MOBILE_MENU_STATUS, payload: action });
