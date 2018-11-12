
// ------- ActionTypes - generic
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const CLEAR_STATE = 'CLEAR_STATE';
const SET_MODE = 'SET_MODE'
// ------- ActionTypes - now
const SET_NOW_DATE = 'SET_NOW_DATE';
const SET_NOW_YEAR = 'SET_NOW_YEAR';
const SET_NOW_MONTH = 'SET_NOW_MONTH';
const SET_NOW_WEEK = 'SET_NOW_WEEK';
const SET_NOW_DAY = 'SET_NOW_DAY';
const SET_NOW_HOUR = 'SET_NOW_HOUR';
const SET_NOW_MINUTE = 'SET_NOW_MINUTE';
const SET_NOW_SECOND = 'SET_NOW_SECOND';
// ------- ActionTypes - base
// Misc
const SET_BASE_DATE = 'SET_BASE_DATE';
const SET_BASE_NAME = 'SET_BASE_NAME';
const SET_BASE_DATE_IS_IN_THE_PAST = 'SET_BASE_DATE_IS_IN_THE_PAST';
const SET_BASE_DATE_IS_IN_THE_FUTURE = 'SET_BASE_DATE_IS_IN_THE_FUTURE';
const SET_BASE_YEAR_DEFINED = 'SET_BASE_YEAR_DEFINED';
const SET_BASE_MONTH_DEFINED = 'SET_BASE_MONTH_DEFINED';
const SET_BASE_DAY_DEFINED = 'SET_BASE_DAY_DEFINED';
const SET_BASE_MONTH_DAY_COUNT = 'SET_BASE_MONTH_DAY_COUNT';
// Set
const SET_BASE_YEAR = 'SET_BASE_YEAR';
const SET_BASE_MONTH = 'SET_BASE_MONTH';
const SET_BASE_WEEK = 'SET_BASE_WEEK';
const SET_BASE_DAY = 'SET_BASE_DAY';
const SET_BASE_HOUR = 'SET_BASE_HOUR';
const SET_BASE_MINUTE = 'SET_BASE_MINUTE';
const SET_BASE_SECOND = 'SET_BASE_SECOND';
// Set & reset
const SET_AND_RESET_BASE_YEAR = 'SET_AND_RESET_BASE_YEAR';
const SET_AND_RESET_BASE_MONTH = 'SET_AND_RESET_BASE_MONTH';
const SET_AND_RESET_BASE_WEEK = 'SET_AND_RESET_BASE_WEEK';
const SET_AND_RESET_BASE_DAY = 'SET_AND_RESET_BASE_DAY';
const SET_AND_RESET_BASE_HOUR = 'SET_AND_RESET_BASE_HOUR';
const SET_AND_RESET_BASE_MINUTE = 'SET_AND_RESET_BASE_MINUTE';
// ------- ActionTypes - target
// Misc
const SET_TARGET_DATE = 'SET_TARGET_DATE';
const SET_TARGET_NAME = 'SET_TARGET_NAME';
const SET_TARGET_DATE_IS_IN_THE_PAST = 'SET_TARGET_DATE_IS_IN_THE_PAST';
const SET_TARGET_DATE_IS_IN_THE_FUTURE = 'SET_TARGET_DATE_IS_IN_THE_FUTURE';
const SET_TARGET_YEAR_DEFINED = 'SET_TARGET_YEAR_DEFINED';
const SET_TARGET_MONTH_DEFINED = 'SET_TARGET_MONTH_DEFINED';
const SET_TARGET_DAY_DEFINED = 'SET_TARGET_DAY_DEFINED';
const SET_TARGET_MONTH_DAY_COUNT = 'SET_TARGET_MONTH_DAY_COUNT';
// Set
const SET_TARGET_YEAR = 'SET_TARGET_YEAR';
const SET_TARGET_MONTH = 'SET_TARGET_MONTH';
const SET_TARGET_WEEK = 'SET_TARGET_WEEK';
const SET_TARGET_DAY = 'SET_TARGET_DAY';
const SET_TARGET_HOUR = 'SET_TARGET_HOUR';
const SET_TARGET_MINUTE = 'SET_TARGET_MINUTE';
const SET_TARGET_SECOND = 'SET_TARGET_SECOND';
// Set & reset
const SET_AND_RESET_TARGET_YEAR = 'SET_AND_RESET_TARGET_YEAR';
const SET_AND_RESET_TARGET_MONTH = 'SET_AND_RESET_TARGET_MONTH';
const SET_AND_RESET_TARGET_WEEK = 'SET_AND_RESET_TARGET_WEEK';
const SET_AND_RESET_TARGET_DAY = 'SET_AND_RESET_TARGET_DAY';
const SET_AND_RESET_TARGET_HOUR = 'SET_AND_RESET_TARGET_HOUR';
const SET_AND_RESET_TARGET_MINUTE = 'SET_AND_RESET_TARGET_MINUTE';
// ------- ActionTypes - add to base
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
  baseMonthDayCount: null,
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
  targetMonthDayCount: null,
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
    // ------- Reducers - generic
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
    // ------- Reducers - now
    case SET_NOW_DATE:
      return {
        ...state,
        loading: false,
        nowDate: action.payload
      }
    case SET_NOW_YEAR:
      return {
        ...state,
        loading: false,
        nowYear: action.payload,
      }
    case SET_NOW_MONTH:
      return {
        ...state,
        loading: false,
        nowMonth: action.payload
      }
    case SET_NOW_WEEK:
      return {
        ...state,
        loading: false,
        nowWeek: action.payload
      }
    case SET_NOW_DAY:
      return {
        ...state,
        loading: false,
        nowDay: action.payload
      }
    case SET_NOW_HOUR:
      return {
        ...state,
        loading: false,
        nowHour: action.payload
      }
    case SET_NOW_MINUTE:
      return {
        ...state,
        loading: false,
        nowMinute: action.payload
      }
    case SET_NOW_SECOND:
      return {
        ...state,
        loading: false,
        nowSecond: action.payload
      }
    // ------- Reducers - base
    // Misc
    case SET_BASE_DATE:
      return {
        ...state,
        loading: false,
        baseDate: action.payload
      }
    case SET_BASE_NAME:
      return {
        ...state,
        loading: false,
        baseName: action.payload
      }
    case SET_BASE_DATE_IS_IN_THE_PAST:
      return {
        ...state,
        loading: false,
        baseDateIsInThePast: action.payload
      }
    case SET_BASE_DATE_IS_IN_THE_FUTURE:
      return {
        ...state,
        loading: false,
        baseDateIsInTheFuture: action.payload
      }
    case SET_BASE_YEAR_DEFINED:
      return {
        ...state,
        loading: false,
        baseYearDefined: action.payload,
      }
    case SET_BASE_MONTH_DEFINED:
      return {
        ...state,
        loading: false,
        baseMonthDefined: action.payload,
      }
    case SET_BASE_DAY_DEFINED:
      return {
        ...state,
        loading: false,
        baseDayDefined: action.payload,
      }
    case SET_BASE_MONTH_DAY_COUNT:
      return {
        ...state,
        loading: false,
        baseMonthDayCount: action.payload
      }
    // Set
    case SET_BASE_YEAR:
      return {
        ...state,
        loading: false,
        baseYear: action.payload,
      }
    case SET_BASE_MONTH:
      return {
        ...state,
        loading: false,
        baseMonth: action.payload
      }
    case SET_BASE_WEEK:
      return {
        ...state,
        loading: false,
        baseWeek: action.payload
      }
    case SET_BASE_DAY:
      return {
        ...state,
        loading: false,
        baseDay: action.payload
      }
    case SET_BASE_HOUR:
      return {
        ...state,
        loading: false,
        baseHour: action.payload
      }
    case SET_BASE_MINUTE:
      return {
        ...state,
        loading: false,
        baseMinute: action.payload
      }
    case SET_BASE_SECOND:
      return {
        ...state,
        loading: false,
        baseSecond: action.payload
      }
    // Set & reset
    case SET_AND_RESET_BASE_YEAR:
      return {
        ...state,
        loading: false,
        // Note that we can't set 'baseYearDefined: true' here,
        // as this is an input field that needs to be validated. Because of that
        // we should use 'SET_BASE_YEAR_DEFINED' instead
        baseYear: action.payload,
        baseMonth: '',
        baseMonthDefined: false,
        baseMonthDayCount: null,
        baseDay: '',
        baseDayDefined: false,
        baseHour: '',
        baseMinute: '',
        baseSecond: '',
      }
    case SET_AND_RESET_BASE_MONTH:
      return {
        ...state,
        loading: false,
        baseMonthDefined: true,
        baseMonth: action.payload,
        baseDay: '',
        baseDayDefined: false,
        baseHour: '',
        baseMinute: '',
        baseSecond: '',
      }
    case SET_AND_RESET_BASE_WEEK:
      return {
        ...state,
        loading: false,
        baseWeekDefined: true,
        baseWeek: action.payload,
        baseHour: '',
        baseMinute: '',
        baseSecond: '',
      }
    case SET_AND_RESET_BASE_DAY:
      return {
        ...state,
        loading: false,
        baseDayDefined: true,
        baseDay: action.payload,
        baseHour: '',
        baseMinute: '',
        baseSecond: '',
      }
    case SET_AND_RESET_BASE_HOUR:
      return {
        ...state,
        loading: false,
        baseHour: action.payload,
        baseMinute: '',
        baseSecond: '',
      }
    case SET_AND_RESET_BASE_MINUTE:
      return {
        ...state,
        loading: false,
        baseMinute: action.payload,
        baseSecond: '',
      }
    // ------- Reducers - target
    // Misc
    case SET_TARGET_DATE:
      return {
        ...state,
        loading: false,
        targetDate: action.payload
      }
    case SET_TARGET_NAME:
      return {
        ...state,
        loading: false,
        targetName: action.payload
      }
    case SET_TARGET_DATE_IS_IN_THE_PAST:
      return {
        ...state,
        loading: false,
        targetDateIsInThePast: action.payload
      }
    case SET_TARGET_DATE_IS_IN_THE_FUTURE:
      return {
        ...state,
        loading: false,
        targetDateIsInTheFuture: action.payload
      }
    case SET_TARGET_YEAR_DEFINED:
      return {
        ...state,
        loading: false,
        targetYearDefined: action.payload,
      }
    case SET_TARGET_MONTH_DEFINED:
      return {
        ...state,
        loading: false,
        targetMonthDefined: action.payload,
      }
    case SET_TARGET_DAY_DEFINED:
      return {
        ...state,
        loading: false,
        targetDayDefined: action.payload,
      }
    case SET_TARGET_MONTH_DAY_COUNT:
      return {
        ...state,
        loading: false,
        targetMonthDayCount: action.payload
      }
    // Set
    case SET_TARGET_YEAR:
      return {
        ...state,
        loading: false,
        targetYear: action.payload,
      }
    case SET_TARGET_MONTH:
      return {
        ...state,
        loading: false,
        targetMonth: action.payload
      }
    case SET_TARGET_WEEK:
      return {
        ...state,
        loading: false,
        targetWeek: action.payload
      }
    case SET_TARGET_DAY:
      return {
        ...state,
        loading: false,
        targetDay: action.payload
      }
    case SET_TARGET_HOUR:
      return {
        ...state,
        loading: false,
        targetHour: action.payload
      }
    case SET_TARGET_MINUTE:
      return {
        ...state,
        loading: false,
        targetMinute: action.payload
      }
    case SET_TARGET_SECOND:
      return {
        ...state,
        loading: false,
        targetSecond: action.payload
      }
    // Set & reset
    case SET_AND_RESET_TARGET_YEAR:
      return {
        ...state,
        loading: false,
        // Note that we can't set 'targetYearDefined: true' here,
        // as this is an input field that needs to be validated. Because of that
        // we should use 'SET_TARGET_YEAR_DEFINED' instead
        targetYear: action.payload,
        targetMonth: '',
        targetMonthDefined: false,
        targetMonthDayCount: null,
        targetDay: '',
        targetDayDefined: false,
        targetHour: '',
        targetMinute: '',
        targetSecond: '',
      }
    case SET_AND_RESET_TARGET_MONTH:
      return {
        ...state,
        loading: false,
        targetMonthDefined: true,
        targetMonth: action.payload,
        targetDay: '',
        targetDayDefined: false,
        targetHour: '',
        targetMinute: '',
        targetSecond: '',
      }
    case SET_AND_RESET_TARGET_WEEK:
      return {
        ...state,
        loading: false,
        targetWeekDefined: true,
        targetWeek: action.payload,
        targetHour: '',
        targetMinute: '',
        targetSecond: '',
      }
    case SET_AND_RESET_TARGET_DAY:
      return {
        ...state,
        loading: false,
        targetDayDefined: true,
        targetDay: action.payload,
        targetHour: '',
        targetMinute: '',
        targetSecond: '',
      }
    case SET_AND_RESET_TARGET_HOUR:
      return {
        ...state,
        loading: false,
        targetHour: action.payload,
        targetMinute: '',
        targetSecond: '',
      }
    case SET_AND_RESET_TARGET_MINUTE:
      return {
        ...state,
        loading: false,
        targetMinute: action.payload,
        targetSecond: '',
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
// ------- ActionTypes - now
export const setNowDateAction = (action) => ({ type: SET_NOW_DATE, payload: action })
export const setNowYearAction = (action) => ({ type: SET_NOW_YEAR, payload: action });
export const setNowMonthAction = (action) => ({ type: SET_NOW_MONTH, payload: action });
export const setNowWeekAction = (action) => ({ type: SET_NOW_WEEK, payload: action });
export const setNowDayAction = (action) => ({ type: SET_NOW_DAY, payload: action });
export const setNowHourAction = (action) => ({ type: SET_NOW_HOUR, payload: action });
export const setNowMinuteAction = (action) => ({ type: SET_NOW_MINUTE, payload: action });
export const setNowSecondAction = (action) => ({ type: SET_NOW_SECOND, payload: action });
// ------- ActionTypes - base
// Misc
export const setBaseDateAction = (action) => ({ type: SET_BASE_DATE, payload: action });
export const setBaseNameAction = (action) => ({ type: SET_BASE_NAME, payload: action });
export const setBaseDateIsInThePastAction = (action) => ({ type: SET_BASE_DATE_IS_IN_THE_PAST, payload: action });
export const setBaseDateIsInTheFutureAction = (action) => ({ type: SET_BASE_DATE_IS_IN_THE_FUTURE, payload: action });
export const setBaseYearDefinedAction = (action) => ({ type: SET_BASE_YEAR_DEFINED, payload: action });
export const setBaseMonthDefinedAction = (action) => ({ type: SET_BASE_MONTH_DEFINED, payload: action });
export const setBaseDayDefinedAction = (action) => ({ type: SET_BASE_DAY_DEFINED, payload: action });
export const setBaseMonthDayCountAction = (action) => ({ type: SET_BASE_MONTH_DAY_COUNT, payload: action })
// Set
export const setBaseYearAction = (action) => ({ type: SET_BASE_YEAR, payload: action });
export const setBaseMonthAction = (action) => ({ type: SET_BASE_MONTH, payload: action });
export const setBaseWeekAction = (action) => ({ type: SET_BASE_WEEK, payload: action });
export const setBaseDayAction = (action) => ({ type: SET_BASE_DAY, payload: action });
export const setBaseHourAction = (action) => ({ type: SET_BASE_HOUR, payload: action });
export const setBaseMinuteAction = (action) => ({ type: SET_BASE_MINUTE, payload: action });
export const setBaseSecondAction = (action) => ({ type: SET_BASE_SECOND, payload: action });
// Set & reset
export const setAndResetBaseYearAction = (action) => ({ type: SET_AND_RESET_BASE_YEAR, payload: action });
export const setAndResetBaseMonthAction = (action) => ({ type: SET_AND_RESET_BASE_MONTH, payload: action });
export const setAndResetBaseWeekAction = (action) => ({ type: SET_AND_RESET_BASE_WEEK, payload: action });
export const setAndResetBaseDayAction = (action) => ({ type: SET_AND_RESET_BASE_DAY, payload: action });
export const setAndResetBaseHourAction = (action) => ({ type: SET_AND_RESET_BASE_HOUR, payload: action });
export const setAndResetBaseMinuteAction = (action) => ({ type: SET_AND_RESET_BASE_MINUTE, payload: action });
// ------- ActionTypes - target
// Misc
export const setTargetDateAction = (action) => ({ type: SET_TARGET_DATE, payload: action });
export const setTargetNameAction = (action) => ({ type: SET_TARGET_NAME, payload: action });
export const setTargetDateIsInThePastAction = (action) => ({ type: SET_TARGET_DATE_IS_IN_THE_PAST, payload: action });
export const setTargetDateIsInTheFutureAction = (action) => ({ type: SET_TARGET_DATE_IS_IN_THE_FUTURE, payload: action });
export const setTargetYearDefinedAction = (action) => ({ type: SET_TARGET_YEAR_DEFINED, payload: action });
export const setTargetMonthDefinedAction = (action) => ({ type: SET_TARGET_MONTH_DEFINED, payload: action });
export const setTargetDayDefinedAction = (action) => ({ type: SET_TARGET_DAY_DEFINED, payload: action });
export const setTargetMonthDayCountAction = (action) => ({ type: SET_TARGET_MONTH_DAY_COUNT, payload: action })
// Set
export const setTargetYearAction = (action) => ({ type: SET_TARGET_YEAR, payload: action });
export const setTargetMonthAction = (action) => ({ type: SET_TARGET_MONTH, payload: action });
export const setTargetWeekAction = (action) => ({ type: SET_TARGET_WEEK, payload: action });
export const setTargetDayAction = (action) => ({ type: SET_TARGET_DAY, payload: action });
export const setTargetHourAction = (action) => ({ type: SET_TARGET_HOUR, payload: action });
export const setTargetMinuteAction = (action) => ({ type: SET_TARGET_MINUTE, payload: action });
export const setTargetSecondAction = (action) => ({ type: SET_TARGET_SECOND, payload: action });
// Set & reset
export const setAndResetTargetYearAction = (action) => ({ type: SET_AND_RESET_TARGET_YEAR, payload: action });
export const setAndResetTargetMonthAction = (action) => ({ type: SET_AND_RESET_TARGET_MONTH, payload: action });
export const setAndResetTargetWeekAction = (action) => ({ type: SET_AND_RESET_TARGET_WEEK, payload: action });
export const setAndResetTargetDayAction = (action) => ({ type: SET_AND_RESET_TARGET_DAY, payload: action });
export const setAndResetTargetHourAction = (action) => ({ type: SET_AND_RESET_TARGET_HOUR, payload: action });
export const setAndResetTargetMinuteAction = (action) => ({ type: SET_AND_RESET_TARGET_MINUTE, payload: action });
// ------- ActionTypes - add to base
export const setAddToBaseYearsAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_YEARS, payload: action });
export const setAddToBaseMonthsAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_MONTHS, payload: action });
export const setAddToBaseWeeksAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_WEEKS, payload: action });
export const setAddToBaseDaysAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_DAYS, payload: action });
export const setAddToBaseHoursAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_HOURS, payload: action });
export const setAddToBaseMinutesAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_MINUTES, payload: action });
export const setAddToBaseSecondsAction = (action) => ({ type: SET_ADD_TO_BASE_DATE_SECONDS, payload: action });
// ActionTypes - frontend
export const setMobileMenuStatusAction = (action) => ({ type: SET_MOBILE_MENU_STATUS, payload: action });
