import headerBackground from '@/asset-src/photos/_DSF1177.jpg';
import Navigation from '@/components/Navigation';
import { Box, Container } from '@mantine/core';
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
          <Box hiddenFrom="md">
            <Navigation />
          </Box>
          <Container>
            <Box visibleFrom="md">
              <Navigation />
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}
