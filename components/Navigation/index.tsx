'use client';

import { Button, Flex, Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './Navigation.module.scss';

const links = [
  { text: 'Home', href: '/' },
  { text: 'Shows', href: '/schedule' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={classes.root}>
      <Flex direction="row" align="center" justify="flex-start" gap="xs">
        <Text component={Link} className={classes.brand} href="/">
          As Above
        </Text>
        {links.map(link => (
          <Button
            variant="subtle"
            color={pathname === link.href ? 'orange' : 'white'}
            component={Link}
            href={link.href}
            key={link.href}
          >
            {link.text}
          </Button>
        ))}
      </Flex>
    </div>
  );
}
