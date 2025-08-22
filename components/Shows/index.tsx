'use cache';

import { calendar, calendarId } from '@/constants';
import { calendar_v3 } from '@googleapis/calendar';
import { Text } from '@mantine/core';

import Table from './Table';

const FALLBACK_DATE = '2005-06-07';

const startTime = (show: calendar_v3.Schema$Event) =>
  new Date(show.start?.date ?? show.start?.dateTime ?? FALLBACK_DATE);

export default async function Shows() {
  'use cache';
  // Fetch all events we can see
  const events = await calendar.events.list({ calendarId, maxResults: 2500 });

  // If we have none, show some text
  if (!events.data.items) {
    return <Text>Unable to pull show information, check back later!</Text>;
  }

  // Otherwise, sort into upcoming and past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysUntil = (date: Date) =>
    Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const shows = events.data.items.toSorted(
    (a, b) => daysUntil(startTime(a)) - daysUntil(startTime(b)),
  );

  const upcoming = shows.filter(show => daysUntil(startTime(show)) >= 0);
  const past = shows.filter(show => daysUntil(startTime(show)) < 0);

  return <Table {...{ upcoming, past }} />;
}
