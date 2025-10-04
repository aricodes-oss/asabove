'use cache';

import { getCalendarEvents } from '@/constants';
import { Text } from '@mantine/core';

import Table from './Table';

interface CalendarEvent {
  start?: { date?: string; dateTime?: string };
  [key: string]: any;
}

const FALLBACK_DATE = '2005-06-07';

const startTime = (show: CalendarEvent) =>
  new Date(show.start?.date ?? show.start?.dateTime ?? FALLBACK_DATE);

export default async function Shows() {
  // Fetch all events we can see
  try {
    const events = await getCalendarEvents(1500);

    // If we have none, show some text
    if (!events.items) {
      return <Text>Unable to pull show information, check back later!</Text>;
    }

    // Otherwise, sort into upcoming and past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysUntil = (date: Date) =>
      Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const shows = events.items.toSorted(
      (a: CalendarEvent, b: CalendarEvent) => daysUntil(startTime(a)) - daysUntil(startTime(b)),
    );

    const upcoming = shows.filter(show => daysUntil(startTime(show)) >= 0);
    const past = shows.filter(show => daysUntil(startTime(show)) < 0);

    return <Table {...{ upcoming, past }} />;
  } catch (e) {
    console.error('CALENDAR', e);
    console.error('CALENDAR', process.env.GOOGLE_CALENDAR_API_KEY);
    return <Text>Unable to pull show information, check back later!</Text>;
  }
}
