'use client';

import headerBackground from '@/asset-src/photos/_DSF1177.jpg';
import heroLogo from '@/asset-src/upside down 2.svg';
// import MailingList from '@/components/MailingList';
import Navigation from '@/components/Navigation';
import PromoVideo from '@/components/PromoVideo';
// import Shows from '@/components/Shows';
import { Box, Container, Flex } from '@mantine/core';
import { useElementSize, useMergedRef, useMouse } from '@mantine/hooks';
import Image from 'next/image';
import { useMemo } from 'react';

import classes from './Header.module.scss';

const MAX_OFFSET = 35;
const TILT_SCALE = 4;

export default function Header() {
  const { ref: mouseRef, x, y } = useMouse();
  const { ref: sizeRef, width, height } = useElementSize();
  const ref = useMergedRef(mouseRef, sizeRef);

  const { xOffset, yOffset } = useMemo(
    () => ({
      xOffset: MAX_OFFSET / 2 - Math.min(1, Math.max(0, x / width)) * MAX_OFFSET,
      yOffset: Math.min(1, Math.max(0, y / height)) * MAX_OFFSET - MAX_OFFSET / 2,
    }),
    [x, y, width, height],
  );

  // Computed style declarations
  const translate = {
    transform: `translate(${-xOffset}px, ${-yOffset}px)`,
  };

  const tilt = {
    transform: `rotateX(calc(${-xOffset / TILT_SCALE} * 1deg)) rotateY(calc(${yOffset / (TILT_SCALE * 2)} * 1deg))`,
  };

  console.log(tilt.transform);

  return (
    <div className={classes.header} ref={ref}>
      <Image
        src={headerBackground}
        alt="Picture of the band on a front porch"
        className={classes.background}
        fill={true}
        unoptimized={false}
        style={tilt}
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
            style={translate}
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
  );
}
