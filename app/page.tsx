'use server';

import { getCountdowns, getShows } from '@/api';
import Boombox from '@/components/Boombox';
import Calendar from '@/components/Calendar';
import Contact from '@/components/Contact';
import Countdown from '@/components/Countdown';
import Frame from '@/components/Frame';
import Header from '@/components/Header';
import TV from '@/components/TV';
import { socials } from '@/constants';
import { calendar_v3 } from '@googleapis/calendar';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { Box, Container, Flex } from '@mantine/core';
import Image from 'next/image';

import classes from './page.module.scss';

const instagram = socials.find(link => link.text === 'Instagram');
const bandcamp = socials.find(link => link.text === 'Bandcamp');

const FALLBACK_DATE = '2005-06-07';

const startTime = (show: calendar_v3.Schema$Event) => {
  const res = new Date(show.start?.date ?? show.start?.dateTime ?? FALLBACK_DATE);
  res.setDate(res.getDate() + 1);
  return res;
};

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
              {countTo && <Countdown to={startTime(countTo)} title={countTo.summary} />}
            </Box>
          </Flex>
          <Flex direction={{ base: 'column', lg: 'row' }} className={classes.right}>
            <Contact />
            <Calendar {...shows}></Calendar>
          </Flex>
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'flex-end' }}
          justify={{ base: 'center', lg: 'flex-start' }}
          gap={{ base: 'md', lg: 'xs' }}
        >
          <TV />
          <Boombox href={bandcamp!.href} />
        </Flex>
      </Container>
    </>
  );
}
