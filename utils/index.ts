import { calendar_v3 } from '@googleapis/calendar';

const FALLBACK_DATE = '2005-06-07';

export const startTime = (show: calendar_v3.Schema$Event) =>
  new Date(show.start?.date ?? show.start?.dateTime ?? FALLBACK_DATE);

export function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}
