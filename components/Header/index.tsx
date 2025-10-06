'use client';

import headerBackground from '@/asset-src/photos/_DSF1177.jpg';
import heroLogo from '@/asset-src/upside down 2.svg';
import Navigation from '@/components/Navigation';
import PromoVideo from '@/components/PromoVideo';
import { Box, Container, Flex, Paper, Title } from '@mantine/core';
import { useElementSize, useMergedRef, useMouse } from '@mantine/hooks';
import { IconCircleArrowDown } from '@tabler/icons-react';
import Image from 'next/image';

import Shows, { type ShowsProps } from '../Shows';
import classes from './Header.module.scss';

export interface HeaderProps {
  shows: ShowsProps;
}

const MAX_OFFSET = 35;
const TILT_SCALE = 2.5;

interface TranslationInput {
  x: number;
  y: number;
  width: number;
  height: number;
  scale?: number;
}

const translateFor = ({ x, y, width, height, scale = 1 }: TranslationInput) => ({
  xOffset: (MAX_OFFSET / 2 - Math.min(1, Math.max(0, x / width)) * MAX_OFFSET) / scale,
  yOffset: (Math.min(1, Math.max(0, y / height)) * MAX_OFFSET - MAX_OFFSET / 2) / scale,
});

export default function Header({ shows }: HeaderProps) {
  const { ref: mouseRef, x, y } = useMouse();
  const { ref: sizeRef, width, height } = useElementSize();
  const ref = useMergedRef(mouseRef, sizeRef);

  const { xOffset, yOffset } = translateFor({ x, y, width, height });

  // Computed style declarations
  const foreground = {
    transform: `translate(${xOffset}px, ${-yOffset}px)`,
  };

  const background = {
    transform: `translate(${xOffset / TILT_SCALE}px, 0)`,
  };

  return (
    <div className={classes.header} ref={ref}>
      <Image
        src={headerBackground}
        alt="Picture of the band on a front porch"
        className={classes.background}
        fill={true}
        unoptimized={false}
        style={background}
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

        {/* Desktop hero (Logo, shows. mailing list) */}
        <Flex
          justify="space-between"
          align="center"
          direction="row"
          visibleFrom="md"
          style={{ height: '100%', ...foreground }}
        >
          <Image src={heroLogo} alt="As Above logo" unoptimized={false} />
          <Flex justify="space-between" align="center" direction="column">
            <Container size="xs">
              <Paper p="sm" shadow="xl" mr="xl" mb="xl">
                <Title order={2} mb="sm">
                  Shows
                </Title>
                <Shows {...shows} />
              </Paper>
            </Container>
            <PromoVideo />
          </Flex>
        </Flex>

        {/* Mobile stacked header */}
        <Flex
          justify="center"
          align="center"
          direction="column"
          className={classes.hero}
          hiddenFrom="md"
          style={foreground}
        >
          <Image src={heroLogo} alt="As Above logo" unoptimized={false} className={classes.left} />
          <Container size="xs">
            <Paper p="sm" shadow="sm" my="sm">
              <Title order={2} mb="sm">
                Shows
              </Title>
              <Shows {...shows} />
            </Paper>
          </Container>
        </Flex>
      </div>
    </div>
  );
}
