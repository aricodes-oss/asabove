import headerBackground from '@/asset-src/photos/_DSF1177.jpg';
import heroLogo from '@/asset-src/upside down 2.svg';
// import MailingList from '@/components/MailingList';
import Navigation from '@/components/Navigation';
import PromoVideo from '@/components/PromoVideo';
// import Shows from '@/components/Shows';
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
              direction="column"
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
                <PromoVideo />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>

      {/* <Container size="sm">
        <Title order={1} mb="sm">
          Shows
        </Title>
        <Shows />

        <MailingList />
      </Container> */}
    </>
  );
}
