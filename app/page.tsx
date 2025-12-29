'use server';

import { getShows } from '@/api';
import Frame from '@/components/Frame';
import Header from '@/components/Header';
import MailingList from '@/components/MailingList';
import { Container } from '@mantine/core';

export default async function Home() {
  const shows = await getShows();

  return (
    <>
      <div>
        <Frame>Hello!</Frame>
      </div>

      <Header shows={shows!} />
      <Container size="sm">
        <MailingList />
      </Container>
    </>
  );
}
