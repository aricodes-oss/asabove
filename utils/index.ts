import { calendar_v3 } from '@googleapis/calendar';

const FALLBACK_DATE = '2005-06-07';

export const startTime = (show: calendar_v3.Schema$Event) => {
  if (show.start?.dateTime) {
    return new Date(new Date(show.start.dateTime).toLocaleDateString());
  }
  if (show.start?.date) {
    // Append time component so JS parses as local time, not UTC
    return new Date(show.start.date + 'T00:00:00');
  }
  return new Date(FALLBACK_DATE);
};

export function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}
