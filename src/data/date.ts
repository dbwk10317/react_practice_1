import { DateTime } from 'luxon';

export const makeRandomPastDate = () => {
  const v = new Date().valueOf();
  const n = 100000;
  return new Date(v - Math.floor(Math.random() * n * n));
};

export const makeRelativeDate = (date: Date) => DateTime.fromJSDate(date).startOf('day').toRelative();

export const makeDayMonthYear = (date: Date) => DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_FULL);

export const makeRandomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate());
