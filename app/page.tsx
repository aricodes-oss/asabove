'use server';

import { getShows } from '@/api';
import Header from '@/components/Header';
import MailingList from '@/components/MailingList';
import Shows from '@/components/Shows';
import { Container, Title } from '@mantine/core';

export default async function Home() {
  const shows = await getShows();

  return (
    <>
      <Header shows={shows!} />
      <Container size="sm">
        <MailingList />
      </Container>
    </>
  );
}
