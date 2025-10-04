'use client';

import { calendarId } from '@/constants';
import { Text } from '@mantine/core';
import { useEffect, useState } from 'react';

import Table from './Table';

interface CalendarEvent {
  start?: { date?: string; dateTime?: string };
  [key: string]: any;
}

const API_KEY = 'AIzaSyA6L78tfEYyBD7QcgFm5_wk3g3otJohoFg';
const FALLBACK_DATE = '2005-06-07';

const startTime = (show: CalendarEvent) =>
  new Date(show.start?.date ?? show.start?.dateTime ?? FALLBACK_DATE);

async function fetchCalendarEvents(maxResults = 1500) {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${API_KEY}&maxResults=${maxResults}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export default function Shows() {
  const [events, setEvents] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        const data = await fetchCalendarEvents(1500);
        setEvents(data);
      } catch (e) {
        console.error('CALENDAR', e);
        setError('Unable to pull show information, check back later!');
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return <Text>Loading shows...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  // If we have none, show some text
  if (!events?.items) {
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
}
