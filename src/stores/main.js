// eslint-disable-next-line import/no-extraneous-dependencies
import { derived, writable } from 'svelte/store';
import { getTimeDifferenceMemoized } from '../helpers/dates';

/**
 * Creates a writable that saves its value to localStorage
 *
 * @param {string} name
 * @param {any} initValue
 * @return {import('svelte/store').Writable}
 */
function persistedWritable(name, initValue) {
  const stored = localStorage.getItem(name);

  let elem;

  if (stored === null) {
    elem = writable(initValue);
  } else {
    const parsed = JSON.parse(stored);
    elem = writable(parsed);
  }

  elem.subscribe((val) => {
    localStorage.setItem(name, JSON.stringify(val));
  });

  return elem;
}

export const filter = writable('all');

export const days = persistedWritable('days', []);

export const processedDays = derived(days, ($days) => $days.map((item) => ({
  ...item,
  count: getTimeDifferenceMemoized(item.date),
})));
