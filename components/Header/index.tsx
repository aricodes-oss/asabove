'use client';

import { Anchor, Container, Group } from '@mantine/core';
import Link from 'next/link';

import Socials from '../Socials';
import classes from './Header.module.scss';

export default function Header() {
  return (
    <Container size="lg">
      <Anchor component={Link} href="/" underline="never">
        <div className={classes.root}>
          <span className={classes.left}>
            welcome to
            <br />
          </span>
          <span className={classes.right}>
            <span className={classes.name}>As Above</span>
            &apos;s website
          </span>
        </div>
      </Anchor>
      <Group justify="center" gap="md" className={classes.socials}>
        <Socials />
      </Group>
    </Container>
  );
}
