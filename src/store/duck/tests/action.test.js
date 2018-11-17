import {
  reducerMain,
  loadingAction,
  errorAction,
  clearStateAction,
  setModeAction,
  setNowDateAction,
  setNowDailyDateAction,
  setNowYearAction,
  setNowMonthAction,
  setNowWeekAction,
  setNowDayAction,
  setNowHourAction,
  setNowMinuteAction,
  setNowSecondAction,
  setBaseDateAction,
  setBaseNameAction,
  setBaseDateIsInThePastAction,
  setBaseDateIsInTheFutureAction,
  setBaseYearDefinedAction,
  setBaseMonthDefinedAction,
  setBaseDayDefinedAction,
  setBaseMonthDayCountAction,
  setBaseYearAction,
  setBaseMonthAction,
  setBaseWeekAction,
  setBaseDayAction,
  setBaseHourAction,
  setBaseMinuteAction,
  setBaseSecondAction,
  setAndResetBaseYearAction,
  setAndResetBaseMonthAction,
  setAndResetBaseWeekAction,
  setAndResetBaseDayAction,
  setAndResetBaseHourAction,
  setAndResetBaseMinuteAction,
  setTargetDateAction,
  setTargetNameAction,
  setTargetDateIsInThePastAction,
  setTargetDateIsInTheFutureAction,
  setTargetYearDefinedAction,
  setTargetMonthDefinedAction,
  setTargetDayDefinedAction,
  setTargetMonthDayCountAction,
  setTargetYearAction,
  setTargetMonthAction,
  setTargetWeekAction,
  setTargetDayAction,
  setTargetHourAction,
  setTargetMinuteAction,
  setTargetSecondAction,
  setAndResetTargetYearAction,
  setAndResetTargetMonthAction,
  setAndResetTargetWeekAction,
  setAndResetTargetDayAction,
  setAndResetTargetHourAction,
  setAndResetTargetMinuteAction,
  setAddToBaseYearsAction,
  setAddToBaseMonthsAction,
  setAddToBaseWeeksAction,
  setAddToBaseDaysAction,
  setAddToBaseHoursAction,
  setAddToBaseMinutesAction,
  setAddToBaseSecondsAction,
  setMobileMenuStatusAction,
} from '../ducks';

import props from './../../../test/mockData';

describe('Actions', () => {
  describe('loadingAction', () => {
    it('should fire an action with type equal LOADING', () => {
      const actionResult = loadingAction({}).type;
      expect(actionResult).toEqual('LOADING');
    }),
    it('should fire action and update store', () => {
      const mockPayload = {...props};
      const mockResponse = {'loading': true};
      const actionPayload = loadingAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('errorAction', () => {
    it('should fire an action with type equal ERROR', () => {
      const actionResult = errorAction({}).type;
      expect(actionResult).toEqual('ERROR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = {errorCode: 'THIS_IS_AN_ERROR_CODE', errorId: '7', errorMessage: 'This is a technical error message, for logging', errorMessageTitle: 'This is a user-friendly error title', errorMessageFriendly: 'This is a user-friendly error description'};
      const mockResponse = {'error': true, 'errorCode': 'THIS_IS_AN_ERROR_CODE', 'errorId': '7', 'errorMessage': 'This is a technical error message, for logging', 'errorMessageTitle': 'This is a user-friendly error title', 'errorMessageFriendly': 'This is a user-friendly error description', 'loading': false};
      const actionPayload = errorAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('clearStateAction', () => {
    it('should fire an action with type equal CLEAR_STATE', () => {
      const actionResult = clearStateAction({}).type;
      expect(actionResult).toEqual('CLEAR_STATE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = {...props};
      const mockResponse = {'loading': false, 'error': false, 'errorId': '', 'errorCode': '', 'errorMessage': '', 'errorMessageTitle': '', 'errorMessageFriendly': '', 'mode': '', 'nowDate': '', 'nowDailyDate': '', 'nowYear': '', 'nowMonth': '', 'nowDay': '', 'nowHour': '', 'nowMinute': '', 'nowSecond': '', 'baseDate': '', 'baseDateName': '', 'baseDateIsInThePast': false, 'baseDateIsInTheFuture': false, 'baseYearDefined': false, 'baseMonthDefined': false, 'baseDayDefined': false, 'baseYear': '', 'baseMonth': '', 'baseMonthDayCount': null, 'baseDay': '', 'baseHour': '', 'baseMinute': '', 'baseSecond': '', 'targetDate': '', 'targetDateName': '', 'targetDateIsInThePast': false, 'targetDateIsInTheFuture': false, 'targetYearDefined': false, 'targetMonthDefined': false, 'targetDayDefined': false, 'targetYear': '', 'targetMonth': '', 'targetMonthDayCount': null, 'targetDay': '', 'targetHour': '', 'targetMinute': '', 'targetSecond': '', 'addToBaseDateYears': null, 'addToBaseDateMonths': null, 'addToBaseDateWeeks': null, 'addToBaseDateDays': null, 'addToBaseDateHours': null, 'addToBaseDateMinutes': null, 'addToBaseDateSeconds': null, 'frontend': { 'mobileMenuStatus': false}};
      const actionPayload = clearStateAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setModeAction', () => {
    it('should fire an action with type equal SET_MODE', () => {
      const actionResult = setModeAction({}).type;
      expect(actionResult).toEqual('SET_MODE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 'betweenTwoDates';
      const mockResponse = {'mode': 'betweenTwoDates', 'loading': false};
      const actionPayload = setModeAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowDateAction', () => {
    it('should fire an action with type equal SET_NOW_DATE', () => {
      const actionResult = setNowDateAction({}).type;
      expect(actionResult).toEqual('SET_NOW_DATE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowDate;
      const mockResponse = {'loading': false, 'nowDate': 'November 16th 2018, 19:11:56'};
      const actionPayload = setNowDateAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowDailyDateAction', () => {
    it('should fire an action with type equal SET_NOW_DAILY_DATE', () => {
      const actionResult = setNowDailyDateAction({}).type;
      expect(actionResult).toEqual('SET_NOW_DAILY_DATE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowDailyDate;
      const mockResponse = {'loading': false, 'nowDailyDate': 'November 16th 2018'};
      const actionPayload = setNowDailyDateAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowYearAction', () => {
    it('should fire an action with type equal SET_NOW_YEAR', () => {
      const actionResult = setNowYearAction({}).type;
      expect(actionResult).toEqual('SET_NOW_YEAR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowYear;
      const mockResponse = {'loading': false, 'nowYear': '2018'};
      const actionPayload = setNowYearAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowMonthAction', () => {
    it('should fire an action with type equal SET_NOW_MONTH', () => {
      const actionResult = setNowMonthAction({}).type;
      expect(actionResult).toEqual('SET_NOW_MONTH');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowMonth;
      const mockResponse = {'loading': false, 'nowMonth': 'November'};
      const actionPayload = setNowMonthAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowWeekAction', () => {
    it('should fire an action with type equal SET_NOW_WEEK', () => {
      const actionResult = setNowWeekAction({}).type;
      expect(actionResult).toEqual('SET_NOW_WEEK');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 333;
      const mockResponse = {'loading': false, 'nowWeek': 333};
      const actionPayload = setNowWeekAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowDayAction', () => {
    it('should fire an action with type equal SET_NOW_DAY', () => {
      const actionResult = setNowDayAction({}).type;
      expect(actionResult).toEqual('SET_NOW_DAY');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowDay;
      const mockResponse = {'loading': false, 'nowDay': '16'};
      const actionPayload = setNowDayAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowHourAction', () => {
    it('should fire an action with type equal SET_NOW_HOUR', () => {
      const actionResult = setNowHourAction({}).type;
      expect(actionResult).toEqual('SET_NOW_HOUR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowHour;
      const mockResponse = {'loading': false, 'nowHour': '19'};
      const actionPayload = setNowHourAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowMinuteAction', () => {
    it('should fire an action with type equal SET_NOW_MINUTE', () => {
      const actionResult = setNowMinuteAction({}).type;
      expect(actionResult).toEqual('SET_NOW_MINUTE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowMinute;
      const mockResponse = {'loading': false, 'nowMinute': '11'};
      const actionPayload = setNowMinuteAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setNowSecondAction', () => {
    it('should fire an action with type equal SET_NOW_SECOND', () => {
      const actionResult = setNowSecondAction({}).type;
      expect(actionResult).toEqual('SET_NOW_SECOND');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.nowSecond;
      const mockResponse = {'loading': false, 'nowSecond': '55'};
      const actionPayload = setNowSecondAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseDateAction', () => {
    it('should fire an action with type equal SET_BASE_DATE', () => {
      const actionResult = setBaseDateAction({}).type;
      expect(actionResult).toEqual('SET_BASE_DATE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseDate;
      const mockResponse = {'baseDate': 'May 22nd 2017, 00:22:00', 'loading': false};
      const actionPayload = setBaseDateAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseNameAction', () => {
    it('should fire an action with type equal SET_BASE_NAME', () => {
      const actionResult = setBaseNameAction({}).type;
      expect(actionResult).toEqual('SET_BASE_NAME');
    }),
    it('should fire action and update store', () => {
      const mockPayload = '22.222.222 Minutes';
      const mockResponse = {'baseName': '22.222.222 Minutes', 'loading': false};
      const actionPayload = setBaseNameAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseDateIsInThePastAction', () => {
    it('should fire an action with type equal SET_BASE_DATE_IS_IN_THE_PAST', () => {
      const actionResult = setBaseDateIsInThePastAction({}).type;
      expect(actionResult).toEqual('SET_BASE_DATE_IS_IN_THE_PAST');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseDateIsInThePast;
      const mockResponse = {'baseDateIsInThePast': false, 'loading': false};
      const actionPayload = setBaseDateIsInThePastAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseDateIsInTheFutureAction', () => {
    it('should fire an action with type equal SET_BASE_DATE_IS_IN_THE_FUTURE', () => {
      const actionResult = setBaseDateIsInTheFutureAction({}).type;
      expect(actionResult).toEqual('SET_BASE_DATE_IS_IN_THE_FUTURE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseDateIsInTheFuture;
      const mockResponse = {'baseDateIsInTheFuture': false, 'loading': false};
      const actionPayload = setBaseDateIsInTheFutureAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseYearDefinedAction', () => {
    it('should fire an action with type equal SET_BASE_YEAR_DEFINED', () => {
      const actionResult = setBaseYearDefinedAction({}).type;
      expect(actionResult).toEqual('SET_BASE_YEAR_DEFINED');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseYearDefined;
      const mockResponse = {'baseYearDefined': true, 'loading': false};
      const actionPayload = setBaseYearDefinedAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseMonthDefinedAction', () => {
    it('should fire an action with type equal SET_BASE_MONTH_DEFINED', () => {
      const actionResult = setBaseMonthDefinedAction({}).type;
      expect(actionResult).toEqual('SET_BASE_MONTH_DEFINED');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseMonthDefined;
      const mockResponse = {'baseMonthDefined': true, 'loading': false};
      const actionPayload = setBaseMonthDefinedAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseDayDefinedAction', () => {
    it('should fire an action with type equal SET_BASE_DAY_DEFINED', () => {
      const actionResult = setBaseDayDefinedAction({}).type;
      expect(actionResult).toEqual('SET_BASE_DAY_DEFINED');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseDayDefined;
      const mockResponse = {'baseDayDefined': true, 'loading': false};
      const actionPayload = setBaseDayDefinedAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseMonthDayCountAction', () => {
    it('should fire an action with type equal SET_BASE_MONTH_DAY_COUNT', () => {
      const actionResult = setBaseMonthDayCountAction({}).type;
      expect(actionResult).toEqual('SET_BASE_MONTH_DAY_COUNT');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseMonthDayCount;
      const mockResponse = {'baseMonthDayCount': 31, 'loading': false};
      const actionPayload = setBaseMonthDayCountAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseYearAction', () => {
    it('should fire an action with type equal SET_BASE_YEAR', () => {
      const actionResult = setBaseYearAction({}).type;
      expect(actionResult).toEqual('SET_BASE_YEAR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseYear;
      const mockResponse = {'baseYear': '2017', 'loading': false};
      const actionPayload = setBaseYearAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseMonthAction', () => {
    it('should fire an action with type equal SET_BASE_MONTH', () => {
      const actionResult = setBaseMonthAction({}).type;
      expect(actionResult).toEqual('SET_BASE_MONTH');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseMonth;
      const mockResponse = {'baseMonth': 'May', 'loading': false};
      const actionPayload = setBaseMonthAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseWeekAction', () => {
    it('should fire an action with type equal SET_BASE_WEEK', () => {
      const actionResult = setBaseWeekAction({}).type;
      expect(actionResult).toEqual('SET_BASE_WEEK');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 333;
      const mockResponse = {'baseWeek': 333, 'loading': false};
      const actionPayload = setBaseWeekAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseDayAction', () => {
    it('should fire an action with type equal SET_BASE_DAY', () => {
      const actionResult = setBaseDayAction({}).type;
      expect(actionResult).toEqual('SET_BASE_DAY');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseDay;
      const mockResponse = {'baseDay': '22', 'loading': false};
      const actionPayload = setBaseDayAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseHourAction', () => {
    it('should fire an action with type equal SET_BASE_HOUR', () => {
      const actionResult = setBaseHourAction({}).type;
      expect(actionResult).toEqual('SET_BASE_HOUR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseHour;
      const mockResponse = {'baseHour': '0', 'loading': false};
      const actionPayload = setBaseHourAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseMinuteAction', () => {
    it('should fire an action with type equal SET_BASE_MINUTE', () => {
      const actionResult = setBaseMinuteAction({}).type;
      expect(actionResult).toEqual('SET_BASE_MINUTE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseMinute;
      const mockResponse = {'baseMinute': '22', 'loading': false};
      const actionPayload = setBaseMinuteAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setBaseSecondAction', () => {
    it('should fire an action with type equal SET_BASE_SECOND', () => {
      const actionResult = setBaseSecondAction({}).type;
      expect(actionResult).toEqual('SET_BASE_SECOND');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseSecond;
      const mockResponse = {'baseSecond': '0', 'loading': false};
      const actionPayload = setBaseSecondAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetBaseYearAction', () => {
    it('should fire an action with type equal SET_AND_RESET_BASE_YEAR', () => {
      const actionResult = setAndResetBaseYearAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_BASE_YEAR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseYear;
      const mockResponse = {'baseDay': '', 'baseDayDefined': false, 'baseHour': '', 'baseMinute': '', 'baseMonth': '', 'baseMonthDayCount': null, 'baseMonthDefined': false, 'baseSecond': '', 'baseYear': '2017', 'loading': false};
      const actionPayload = setAndResetBaseYearAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetBaseMonthAction', () => {
    it('should fire an action with type equal SET_AND_RESET_BASE_MONTH', () => {
      const actionResult = setAndResetBaseMonthAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_BASE_MONTH');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseMonth;
      const mockResponse = {'baseDay': '', 'baseDayDefined': false, 'baseHour': '', 'baseMinute': '', 'baseMonth': 'May', 'baseMonthDefined': true, 'baseSecond': '', 'loading': false};
      const actionPayload = setAndResetBaseMonthAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetBaseWeekAction', () => {
    it('should fire an action with type equal SET_AND_RESET_BASE_WEEK', () => {
      const actionResult = setAndResetBaseWeekAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_BASE_WEEK');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 333;
      const mockResponse = {'baseHour': '', 'baseMinute': '', 'baseSecond': '', 'baseWeek': 333, 'baseWeekDefined': true, 'loading': false};
      const actionPayload = setAndResetBaseWeekAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetBaseDayAction', () => {
    it('should fire an action with type equal SET_AND_RESET_BASE_DAY', () => {
      const actionResult = setAndResetBaseDayAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_BASE_DAY');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseDay;
      const mockResponse = {'baseDay': '22', 'baseDayDefined': true, 'baseHour': '', 'baseMinute': '', 'baseSecond': '', 'loading': false};
      const actionPayload = setAndResetBaseDayAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetBaseHourAction', () => {
    it('should fire an action with type equal SET_AND_RESET_BASE_HOUR', () => {
      const actionResult = setAndResetBaseHourAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_BASE_HOUR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseHour;
      const mockResponse = {'baseHour': '0', 'baseMinute': '', 'baseSecond': '', 'loading': false};
      const actionPayload = setAndResetBaseHourAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetBaseMinuteAction', () => {
    it('should fire an action with type equal SET_AND_RESET_BASE_MINUTE', () => {
      const actionResult = setAndResetBaseMinuteAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_BASE_MINUTE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.baseMinute;
      const mockResponse = {'baseMinute': '22', 'baseSecond': '', 'loading': false};
      const actionPayload = setAndResetBaseMinuteAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetDateAction', () => {
    it('should fire an action with type equal SET_TARGET_DATE', () => {
      const actionResult = setTargetDateAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_DATE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetDate;
      const mockResponse = {'loading': false, 'targetDate': 'February 19th 1975, 21:00:00'};
      const actionPayload = setTargetDateAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetNameAction', () => {
    it('should fire an action with type equal SET_TARGET_NAME', () => {
      const actionResult = setTargetNameAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_NAME');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetName;
      const mockResponse = {'loading': false, };
      const actionPayload = setTargetNameAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetDateIsInThePastAction', () => {
    it('should fire an action with type equal SET_TARGET_DATE_IS_IN_THE_PAST', () => {
      const actionResult = setTargetDateIsInThePastAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_DATE_IS_IN_THE_PAST');
    }),
    it('should fire action and update store', () => {
      const mockPayload = true;
      const mockResponse = {'loading': false, 'targetDateIsInThePast': true};
      const actionPayload = setTargetDateIsInThePastAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetDateIsInTheFutureAction', () => {
    it('should fire an action with type equal SET_TARGET_DATE_IS_IN_THE_FUTURE', () => {
      const actionResult = setTargetDateIsInTheFutureAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_DATE_IS_IN_THE_FUTURE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = true;
      const mockResponse = {'loading': false, 'targetDateIsInTheFuture': true};
      const actionPayload = setTargetDateIsInTheFutureAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetYearDefinedAction', () => {
    it('should fire an action with type equal SET_TARGET_YEAR_DEFINED', () => {
      const actionResult = setTargetYearDefinedAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_YEAR_DEFINED');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetYearDefined;
      const mockResponse = {'loading': false, 'targetYearDefined': true};
      const actionPayload = setTargetYearDefinedAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetMonthDefinedAction', () => {
    it('should fire an action with type equal SET_TARGET_MONTH_DEFINED', () => {
      const actionResult = setTargetMonthDefinedAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_MONTH_DEFINED');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetMonthDefined;
      const mockResponse = {'loading': false, 'targetMonthDefined': true};
      const actionPayload = setTargetMonthDefinedAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetDayDefinedAction', () => {
    it('should fire an action with type equal SET_TARGET_DAY_DEFINED', () => {
      const actionResult = setTargetDayDefinedAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_DAY_DEFINED');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetDayDefined;
      const mockResponse = {'loading': false, 'targetDayDefined': true};
      const actionPayload = setTargetDayDefinedAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetMonthDayCountAction', () => {
    it('should fire an action with type equal SET_TARGET_MONTH_DAY_COUNT', () => {
      const actionResult = setTargetMonthDayCountAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_MONTH_DAY_COUNT');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetMonthDayCount;
      const mockResponse = {'loading': false, 'targetMonthDayCount': 28};
      const actionPayload = setTargetMonthDayCountAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetYearAction', () => {
    it('should fire an action with type equal SET_TARGET_YEAR', () => {
      const actionResult = setTargetYearAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_YEAR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetYear;
      const mockResponse = {'loading': false, 'targetYear': '1975'};
      const actionPayload = setTargetYearAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetMonthAction', () => {
    it('should fire an action with type equal SET_TARGET_MONTH', () => {
      const actionResult = setTargetMonthAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_MONTH');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetMonth;
      const mockResponse = {'loading': false, 'targetMonth': 'February'};
      const actionPayload = setTargetMonthAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetWeekAction', () => {
    it('should fire an action with type equal SET_TARGET_WEEK', () => {
      const actionResult = setTargetWeekAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_WEEK');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetWeek;
      const mockResponse = {'loading': false, };
      const actionPayload = setTargetWeekAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetDayAction', () => {
    it('should fire an action with type equal SET_TARGET_DAY', () => {
      const actionResult = setTargetDayAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_DAY');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetDay;
      const mockResponse = {'loading': false, 'targetDay': '19'};
      const actionPayload = setTargetDayAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetHourAction', () => {
    it('should fire an action with type equal SET_TARGET_HOUR', () => {
      const actionResult = setTargetHourAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_HOUR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetHour;
      const mockResponse = {'loading': false, 'targetHour': '21'};
      const actionPayload = setTargetHourAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetMinuteAction', () => {
    it('should fire an action with type equal SET_TARGET_MINUTE', () => {
      const actionResult = setTargetMinuteAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_MINUTE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetMinute;
      const mockResponse = {'loading': false, 'targetMinute': '0'};
      const actionPayload = setTargetMinuteAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setTargetSecondAction', () => {
    it('should fire an action with type equal SET_TARGET_SECOND', () => {
      const actionResult = setTargetSecondAction({}).type;
      expect(actionResult).toEqual('SET_TARGET_SECOND');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetSecond;
      const mockResponse = {'loading': false, 'targetSecond': '0'};
      const actionPayload = setTargetSecondAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetTargetYearAction', () => {
    it('should fire an action with type equal SET_AND_RESET_TARGET_YEAR', () => {
      const actionResult = setAndResetTargetYearAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_TARGET_YEAR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetYear;
      const mockResponse = {'loading': false, 'targetDay': '', 'targetDayDefined': false, 'targetHour': '', 'targetMinute': '', 'targetMonth': '', 'targetMonthDayCount': null, 'targetMonthDefined': false, 'targetSecond': '', 'targetYear': '1975'};
      const actionPayload = setAndResetTargetYearAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetTargetMonthAction', () => {
    it('should fire an action with type equal SET_AND_RESET_TARGET_MONTH', () => {
      const actionResult = setAndResetTargetMonthAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_TARGET_MONTH');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetMonth;
      const mockResponse = {'loading': false, 'targetDay': '', 'targetDayDefined': false, 'targetHour': '', 'targetMinute': '', 'targetMonth': 'February', 'targetMonthDefined': true, 'targetSecond': ''};
      const actionPayload = setAndResetTargetMonthAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetTargetWeekAction', () => {
    it('should fire an action with type equal SET_AND_RESET_TARGET_WEEK', () => {
      const actionResult = setAndResetTargetWeekAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_TARGET_WEEK');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 333;
      const mockResponse = {'loading': false, 'targetHour': '', 'targetMinute': '', 'targetSecond': '', 'targetWeek': 333, 'targetWeekDefined': true};
      const actionPayload = setAndResetTargetWeekAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetTargetDayAction', () => {
    it('should fire an action with type equal SET_AND_RESET_TARGET_DAY', () => {
      const actionResult = setAndResetTargetDayAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_TARGET_DAY');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetDay;
      const mockResponse = {'loading': false, 'targetDay': '19', 'targetDayDefined': true, 'targetHour': '', 'targetMinute': '', 'targetSecond': ''};
      const actionPayload = setAndResetTargetDayAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetTargetHourAction', () => {
    it('should fire an action with type equal SET_AND_RESET_TARGET_HOUR', () => {
      const actionResult = setAndResetTargetHourAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_TARGET_HOUR');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetHour;
      const mockResponse = {'loading': false, 'targetHour': '21', 'targetMinute': '', 'targetSecond': ''};
      const actionPayload = setAndResetTargetHourAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAndResetTargetMinuteAction', () => {
    it('should fire an action with type equal SET_AND_RESET_TARGET_MINUTE', () => {
      const actionResult = setAndResetTargetMinuteAction({}).type;
      expect(actionResult).toEqual('SET_AND_RESET_TARGET_MINUTE');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.targetMinute;
      const mockResponse = {'loading': false, 'targetMinute': '0', 'targetSecond': ''};
      const actionPayload = setAndResetTargetMinuteAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseYearsAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_YEARS', () => {
      const actionResult = setAddToBaseYearsAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_YEARS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 7;
      const mockResponse = {'addToBaseDateYears': 7, 'loading': false};
      const actionPayload = setAddToBaseYearsAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseMonthsAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_MONTHS', () => {
      const actionResult = setAddToBaseMonthsAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_MONTHS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 77;
      const mockResponse = {'addToBaseDateMonths': 77, 'loading': false};
      const actionPayload = setAddToBaseMonthsAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseWeeksAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_WEEKS', () => {
      const actionResult = setAddToBaseWeeksAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_WEEKS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 777;
      const mockResponse = {'addToBaseDateWeeks': 777, 'loading': false};
      const actionPayload = setAddToBaseWeeksAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseDaysAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_DAYS', () => {
      const actionResult = setAddToBaseDaysAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_DAYS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 7777;
      const mockResponse = {'addToBaseDateDays': 7777, 'loading': false};
      const actionPayload = setAddToBaseDaysAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseHoursAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_HOURS', () => {
      const actionResult = setAddToBaseHoursAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_HOURS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 77777;
      const mockResponse = {'addToBaseDateHours': 77777, 'loading': false};
      const actionPayload = setAddToBaseHoursAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseMinutesAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_MINUTES', () => {
      const actionResult = setAddToBaseMinutesAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_MINUTES');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 777777;
      const mockResponse = {'addToBaseDateMinutes': 777777, 'loading': false};
      const actionPayload = setAddToBaseMinutesAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setAddToBaseSecondsAction', () => {
    it('should fire an action with type equal SET_ADD_TO_BASE_DATE_SECONDS', () => {
      const actionResult = setAddToBaseSecondsAction({}).type;
      expect(actionResult).toEqual('SET_ADD_TO_BASE_DATE_SECONDS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = 7777777;
      const mockResponse = {'addToBaseDateSeconds': 7777777, 'loading': false};
      const actionPayload = setAddToBaseSecondsAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  }),
  describe('setMobileMenuStatusAction', () => {
    it('should fire an action with type equal SET_MOBILE_MENU_STATUS', () => {
      const actionResult = setMobileMenuStatusAction({}).type;
      expect(actionResult).toEqual('SET_MOBILE_MENU_STATUS');
    }),
    it('should fire action and update store', () => {
      const mockPayload = props.frontend.mobileMenuStatus;
      const mockResponse = {'loading': false, 'frontend': {'mobileMenuStatus': false}};
      const actionPayload = setMobileMenuStatusAction(mockPayload);
      const storePayload = reducerMain([], actionPayload);
      const result = mockResponse;
      expect(storePayload).toEqual(result);
    })
  })
});
