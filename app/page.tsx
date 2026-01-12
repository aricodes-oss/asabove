'use server';

import { getCountdowns, getShows } from '@/api';
import Calendar from '@/components/Calendar';
import Contact from '@/components/Contact';
import Countdown from '@/components/Countdown';
import Frame from '@/components/Frame';
import Header from '@/components/Header';
import TV from '@/components/TV';
import { socials } from '@/constants';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { Box, Container, Flex } from '@mantine/core';
import Image from 'next/image';

import classes from './page.module.scss';

const instagram = socials.find(link => link.text === 'Instagram');
export default async function Home() {
  const shows = await getShows();
  const countdowns = await getCountdowns();
  let countTo = null;

  if (countdowns?.upcoming?.length) {
    countTo = countdowns.upcoming[0];
  }

  return (
    <>
      <Header />

      <Container fluid px={{ base: '8px', lg: '16px' }} className={classes.header}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={{ base: 'flex-start', lg: 'space-between' }}
          align={{ base: 'center', lg: 'flex-start' }}
          gap="md"
        >
          <Flex direction="column" style={{ flexGrow: 1, flexShrink: 0 }}>
            <Frame href={instagram!.href} className={classes.frame}>
              <Image
                src="/band-lowres2.jpg"
                alt="Photo of the band"
                fill={true}
                className={classes.img}
              />
            </Frame>
            <Box visibleFrom="sm" px={16}>
              {countTo && (
                <Countdown to={new Date(countTo.start!.date as string)} title={countTo.summary} />
              )}
            </Box>
          </Flex>
          <Flex direction={{ base: 'column', lg: 'row' }} className={classes.right}>
            <Contact />
            <Calendar {...shows}></Calendar>
          </Flex>
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'flex-start' }}
        >
          <div style={{ flexGrow: 1 }}>
            <TV />
          </div>
        </Flex>
      </Container>
    </>
  );
}
