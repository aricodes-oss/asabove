import { Container, Typography } from '@mantine/core';
import Image from 'next/image';

import headerBackground from '../asset-src/photos/_DSF1177.jpg';
import classes from './Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={classes.root}>
        <Image
          src={headerBackground}
          alt="Picture of the band"
          className={classes.img}
          fill={true}
          unoptimized={false}
        />

        <Container>
          <Typography variant="h1">As Above</Typography>
        </Container>
      </div>
    </>
  );
}
