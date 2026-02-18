'use server';

import { calendar, calendarId } from '@/calendar';
import { startTime } from '@/utils';
import { cacheLife } from 'next/cache';
import { connection } from 'next/server';

const timerRegex = /\s?:timer:\s?/i;

const isTimer = (label: string) => timerRegex.test(label);

const mkDaysUntil = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (date: Date) => Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

export async function getEvents() {
  'use cache';
  cacheLife('events');

  const daysUntil = mkDaysUntil();
  const events = await calendar.events.list({ calendarId, maxResults: 1500 });

  if (!events.data.items) {
    return null;
  }

  // Sort into upcoming and past
  return events.data.items.toSorted((a, b) => daysUntil(startTime(a)) - daysUntil(startTime(b)));
}

export async function getShows() {
  await connection();
  const daysUntil = mkDaysUntil();
  let shows = await getEvents();
  if (!shows) {
    return null;
  }

  shows = shows.filter(e => !isTimer(e.summary!));

  const upcoming = shows?.filter(show => daysUntil(startTime(show)) >= 0);
  const past = shows?.filter(show => daysUntil(startTime(show)) < 0);

  return { upcoming, past };
}

export async function getCountdowns() {
  await connection();
  const daysUntil = mkDaysUntil();
  let events = await getEvents();
  if (!events) {
    return null;
  }

  events = events.filter(e => isTimer(e.summary!));

  const upcoming = events
    ?.filter(event => daysUntil(startTime(event)) >= 0)
    .map(e => ({ ...e, summary: e.summary!.replace(timerRegex, '') }));
  const past = events
    ?.filter(event => daysUntil(startTime(event)) < 0)
    .map(e => ({ ...e, summary: e.summary!.replace(timerRegex, '') }));

  return { upcoming, past };
}
