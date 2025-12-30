'use server';

// import { getShows } from '@/api';
import Contact from '@/components/Contact';
import Frame from '@/components/Frame';
import Header from '@/components/Header';
import { socials } from '@/constants';
import { Container, Group } from '@mantine/core';
import Image from 'next/image';

import classes from './page.module.scss';

const instagram = socials.find(link => link.text === 'Instagram');

export default async function Home() {
  // const shows = await getShows();

  return (
    <>
      <Header />
      <div className={classes.frame}>
        <Frame href={instagram!.href}>
          <Image src="/band-lowres.jpg" alt="Photo of the band" fill={true} objectFit="contain" />
        </Frame>
      </div>

      <Container fluid>
        <Group justify="flex-end" wrap="nowrap">
          <Contact />
        </Group>
      </Container>
    </>
  );
}
