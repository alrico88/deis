import dayjs from "dayjs";
import { compressDateRange } from "date-range-compressor";

export const dateFormat = "YYYY-MM-DD";

/**
 * Gets the time difference between a date and now
 *
 * @export
 * @param {string} datetime
 * @return {{years: number, months: number, days: number, append: string}}
 */
export function getTimeDifference(datetime) {
  const now = dayjs();
  const nowFormatted = now.format(dateFormat);
  const parsedDate = dayjs(datetime, dateFormat).format(dateFormat);

  if (parsedDate === nowFormatted) {
    return "Today";
  }

  const isPast = parsedDate < nowFormatted;
  let noYears;
  let noMonths;
  let noDays;

  const args = isPast ? [parsedDate, nowFormatted] : [nowFormatted, parsedDate];

  // @ts-ignore
  const dateRange = compressDateRange(...args);

  noYears = dateRange.years.length;
  noMonths = dateRange.months.length;
  noDays = dateRange.days.length - 1;

  while (noMonths > 12) {
    noYears += 1;
    noMonths -= 12;
  }

  while (noDays > 30) {
    noMonths += 1;
    noDays -= 30;
  }

  let str = "";

  return {
    append: isPast ? "ago" : "to go",
    days: noDays,
    months: noMonths,
    years: noYears,
  };
}
