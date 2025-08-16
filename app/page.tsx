import headerBackground from '@/asset-src/photos/_DSF1177.jpg';
import heroLogo from '@/asset-src/upside down 2.svg';
import MailingList from '@/components/MailingList';
import Navigation from '@/components/Navigation';
import { Box, Container, Flex } from '@mantine/core';
import Image from 'next/image';

import classes from './Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={classes.header}>
        <Image
          src={headerBackground}
          alt="Picture of the band on a front porch"
          className={classes.background}
          fill={true}
          unoptimized={false}
        />

        <div className={classes.content}>
          {/* Mobile nav */}
          <Box hiddenFrom="md">
            <Navigation />
          </Box>
          {/* Desktop nav */}
          <Container visibleFrom="md" style={{ position: 'relative' }}>
            <Navigation />
          </Container>

          <Flex justify="center" align="center" direction="column" className={classes.hero}>
            <Flex
              justify="space-between"
              align="center"
              className={classes.inner}
              columnGap={28}
              rowGap={28}
            >
              <Image
                src={heroLogo}
                alt="As Above logo"
                unoptimized={false}
                className={classes.left}
              />
              <Flex direction="column" justify="space-between" className={classes.right} gap="md">
                <MailingList />
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7Mf1tcQAbGI?si=zbdLzhlEXkutoC3a"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className={classes.video}
                />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}
