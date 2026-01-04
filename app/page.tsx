'use server';

import { getShows } from '@/api';
import Calendar from '@/components/Calendar';
import Contact from '@/components/Contact';
import Frame from '@/components/Frame';
import Header from '@/components/Header';
import { socials } from '@/constants';
import { Container, Flex } from '@mantine/core';
import Image from 'next/image';

import classes from './page.module.scss';

const instagram = socials.find(link => link.text === 'Instagram');

export default async function Home() {
  const shows = await getShows();

  return (
    <>
      <Header />

      <Container fluid px={{ base: '8px', md: '16px' }} className={classes.header}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'flex-start', md: 'space-between' }}
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Frame href={instagram!.href} className={classes.frame}>
            <Image
              src="/band-lowres2.jpg"
              alt="Photo of the band"
              fill={true}
              objectFit="contain"
            />
          </Frame>
          <Flex direction={{ base: 'column', md: 'row' }} className={classes.right}>
            <Contact />
            <Calendar {...shows}></Calendar>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
