'use client';

import { ActionIcon, Burger, Button, Flex, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandBandcamp,
  IconBrandInstagramFilled,
  IconBrandLinktree,
  IconBrandSpotifyFilled,
  IconBrandYoutubeFilled,
  IconCalendarEvent,
  IconHome,
} from '@tabler/icons-react';
import cx from 'clsx';
import { Orbitron } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MobileDrawer from './MobileDrawer';
import classes from './Navigation.module.scss';

const brandFont = Orbitron({ weight: ['400'], subsets: ['latin'] });

const links = [
  { text: 'Home', href: '/', icon: IconHome },
  { text: 'Shows', href: '/schedule', icon: IconCalendarEvent },
];

const socials = [
  {
    icon: IconBrandLinktree,
    text: 'Linktree',
    href: 'https://linktr.ee/asabovesound?fbclid=PAZXh0bgNhZW0CMTEAAacn_qCh0CH1GQIrvKQAtOdgI6YHUgKpahlul9vYFJaGQBug90C9hzPOH_4GWA_aem_q4gnEo-EPRejOvjdvmLjJQ',
  },
  {
    text: 'Youtube',
    icon: IconBrandYoutubeFilled,
    href: 'https://www.youtube.com/channel/UCRTPZZ2yVwt0gt4N45bGNGw',
  },
  {
    text: 'Instagram',
    icon: IconBrandInstagramFilled,
    href: 'https://www.instagram.com/asabovesound/',
  },
  { text: 'Bandcamp', icon: IconBrandBandcamp, href: 'https://asabovesound.bandcamp.com/' },
  {
    text: 'Spotify',
    icon: IconBrandSpotifyFilled,
    href: 'https://open.spotify.com/artist/2LRlqAqErJBfCwwbbNI3BZ?si=G2_B6MubSyycooyCG9-qig',
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [opened, { close, toggle }] = useDisclosure();

  // Shared by all
  const mobileNavProps = {
    component: Link,
    onClick: close,
  };

  return (
    <div className={cx(classes.root)}>
      <Flex direction="row" align="center" justify="space-between">
        <Flex direction="row" align="center" justify="flex-start" gap="sm">
          <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" hiddenFrom="md" />
          <Text component={Link} className={cx(classes.brand, brandFont.className)} href="/">
            As Above
          </Text>
          {links.map(link => (
            <Button
              variant="subtle"
              color={pathname === link.href ? 'orange' : 'white'}
              component={Link}
              href={link.href}
              key={link.href}
              visibleFrom="md"
            >
              {link.text}
            </Button>
          ))}
        </Flex>
        <Group visibleFrom="md" gap="md">
          {socials.map(link => (
            <ActionIcon
              color="white"
              key={link.href}
              aria-label={link.text}
              component={Link}
              href={link.href}
              variant="subtle"
            >
              <link.icon />
            </ActionIcon>
          ))}
        </Group>
      </Flex>

      <MobileDrawer
        opened={opened}
        close={close}
        mobileNavProps={mobileNavProps}
        links={links}
        socials={socials}
      />
    </div>
  );
}
