import { Anchor, Group } from '@mantine/core';
import cx from 'clsx';
import { Gaegu } from 'next/font/google';
import Link from 'next/link';

import Socials from '../Socials';
import classes from './Header.module.scss';

const gaegu = Gaegu({
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <>
      <Anchor component={Link} href="/" underline="never">
        <div className={cx(classes.root, gaegu.className)}>
          <span className={classes.left}>
            welcome to
            <br />
          </span>
          <span className={classes.right}>
            <span className={classes.name}>As Above</span>
            's website
          </span>
        </div>
      </Anchor>
      <Group justify="center" gap="md" className={classes.socials}>
        <Socials />
      </Group>
    </>
  );
}
