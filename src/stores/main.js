import { derived, writable, get } from "svelte/store";
import { getTimeDifferenceMemoized } from "../helpers/dates";
import { saveAs } from "file-saver";
import { readAsText } from "promise-file-reader";

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

export const filter = writable("all");

export const days = persistedWritable("days", []);

export const processedDays = derived(days, ($days) =>
  $days.map((item) => ({
    ...item,
    count: getTimeDifferenceMemoized(item.date),
  })),
);

export function exportDays() {
  var blob = new Blob([JSON.stringify(get(days))], {
    type: "text/json;charset=utf-8",
  });

  saveAs(blob, "deis.json");
}

export async function importDays(event) {
  const daysContent = await readAsText(event.target.files[0]);

  const parsedDays = JSON.parse(daysContent);

  days.set(parsedDays);
}

export function deleteDays() {
  const confirmation = confirm("Are you sure you want to reset data?");

  if (confirmation) {
    days.set([]);
  }
}
