'use server';

// import { getShows } from '@/api';
import Header from '@/components/Header';
import { Container } from '@mantine/core';

export default async function Home() {
  // const shows = await getShows();

  return (
    <Container size="lg">
      <Header />
    </Container>
  );
}
