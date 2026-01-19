'use client';

import { getShows } from '@/api';
import { calendar_v3 } from '@googleapis/calendar';
import { Flex } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import classes from './Calendar.module.scss';

export interface CalendarProps {
  upcoming?: calendar_v3.Schema$Event[];
  past?: calendar_v3.Schema$Event[];
}
const FALLBACK_DATE = '2005-06-07';

const startTime = (show: calendar_v3.Schema$Event) => {
  const res = new Date(show.start?.date ?? show.start?.dateTime ?? FALLBACK_DATE);
  res.setDate(res.getDate() + 1);
  return res;
};

export default function Calendar(props: CalendarProps = { upcoming: [], past: [] }) {
  const showQuery = useQuery({ queryKey: ['shows'], queryFn: getShows, initialData: props });
  const { upcoming } = showQuery.data!;

  if (!upcoming || upcoming.length < 1) {
    return null;
  }

  const next = upcoming[0];
  const startsAt = startTime(next);

  return (
    <Flex direction="column" justify="center" align="center">
      <span className={classes.heading}>next show</span>
      <Link href={next.htmlLink ?? '/'} target="_blank">
        <div className={classes.root}>
          <div className={classes.background} />
          <span className={classes.month}>
            {startsAt.toLocaleString('en-US', { month: 'long' })}
          </span>
          <span className={classes.day}>{startsAt.getDate()}</span>
          <span className={classes.location}>{next.location ?? 'DM for addr'}</span>
        </div>
      </Link>
    </Flex>
  );
}
