import dayjs from "dayjs";
import {compressDateRange} from "date-range-compressor";
import memoize from 'lodash/memoize';

export const dateFormat = 'YYYY-MM-DD';

export function getTimeDifference(datetime) {
  const now = dayjs();
  const nowFormatted = now.format(dateFormat);
  const parsedDate = dayjs(datetime, dateFormat);
  const isPast = parsedDate < now;
  let noYears, noMonths, noDays;

  const args = isPast ? [parsedDate, nowFormatted] : [nowFormatted, parsedDate];

  let dateRange = compressDateRange(...args);

  noYears = dateRange.years.length;
  noMonths = dateRange.months.length;
  noDays = dateRange.days.length - 1;

  while (noMonths > 12) {
    noYears += 1;
    noMonths = noMonths - 12;
  }

  while (noDays > 30) {
    noMonths += 1;
    noDays = noDays - 30;
  }

  let str = '';

  if (noYears > 0) {
    str += `${noYears} years `
  }

  if (noMonths > 0) {
    str += `${noMonths} months `;
  }

  if (noDays > 0) {
    str += `${noDays} days`;
  }

  return `${str} ${isPast ? 'ago' : 'to go'}`;
}

export const getTimeDifferenceMemoized = memoize(getTimeDifference)
