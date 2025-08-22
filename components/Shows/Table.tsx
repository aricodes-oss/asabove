'use client';

import { calendar_v3 } from '@googleapis/calendar';
import {
  Button,
  Center,
  Table as MantineTable,
  SegmentedControl,
  Stack,
  TableData,
  Text,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { titleCase } from 'title-case';

interface TableProps {
  upcoming: calendar_v3.Schema$Event[];
  past: calendar_v3.Schema$Event[];
}

const segments = ['upcoming', 'past'].map(t => ({ label: titleCase(t), value: t }));

const posterFor = (event: calendar_v3.Schema$Event) =>
  event.attachments && event.attachments.length === 1 ? (
    <Image src={event.attachments[0].iconLink as string} alt="Show poster" fill={true} />
  ) : null;

export default function Table(props: TableProps) {
  const [selected, setSelected] = useState<string>(segments[0].value);
  const events = props[selected as keyof TableProps];

  if (!events) {
    return null;
  }

  const data: TableData = {
    body: events.map((event, idx) => [
      event.start?.date,
      <Stack key={event.id}>
        <Text size="lg" fw={700}>
          {event.summary}
        </Text>
        {idx === 0 && posterFor(event)}
      </Stack>,
      <Button component={Link} href={event.htmlLink as string} variant="subtle" key={event.id}>
        Details
      </Button>,
    ]),
  };

  return (
    <Center>
      <a id="shows" />
      <Stack>
        <SegmentedControl value={selected} onChange={setSelected} data={segments} />
        <MantineTable striped withRowBorders highlightOnHover withTableBorder data={data} />
      </Stack>
    </Center>
  );
}
