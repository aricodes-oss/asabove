'use client';

import { chunk } from '@/utils';
import { calendar_v3 } from '@googleapis/calendar';
import {
  Button,
  Center,
  Table as MantineTable,
  Pagination,
  SegmentedControl,
  Spoiler,
  Stack,
  TableData,
  Text,
} from '@mantine/core';
// import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { titleCase } from 'title-case';

export interface ShowsProps {
  upcoming?: calendar_v3.Schema$Event[];
  past?: calendar_v3.Schema$Event[];
}

const segments = ['upcoming', 'past'].map(t => ({ label: titleCase(t), value: t }));

// const posterFor = (event: calendar_v3.Schema$Event) =>
//   event.attachments && event.attachments.length === 1 ? (
//     <Image src={event.attachments[0].iconLink as string} alt="Show poster" fill={true} />
//   ) : null;

export default function Shows(props: ShowsProps) {
  const [activePage, setPage] = useState(1);
  const [selected, setSelected] = useState<string>(segments[0].value);
  const events = props[selected as keyof ShowsProps];

  if (!events) {
    return null;
  }

  const chunks = chunk(events, 3);
  if (selected === segments[1].value) {
    chunks.reverse();
  }

  const data: TableData = {
    body: chunks[Math.min(activePage - 1, chunks.length - 1)].map(event => [
      event.start?.date,
      <Stack key={event.id}>
        <Text size="md" fw={700}>
          <Spoiler maxHeight={26} hideLabel="Less" showLabel="...">
            {event.summary}
          </Spoiler>
        </Text>
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
        {chunks.length > 1 && (
          <Pagination
            total={chunks.length}
            value={activePage}
            onChange={setPage}
            mt="xs"
            style={{ alignSelf: 'center' }}
          />
        )}
      </Stack>
    </Center>
  );
}
