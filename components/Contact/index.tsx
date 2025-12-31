import phone from '@/public/masked phone.png';
import { Stack } from '@mantine/core';
import cx from 'clsx';
import { Gaegu } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import classes from './Contact.module.scss';

const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Contact() {
  return (
    <Stack gap="xs" className={classes.root} align="center">
      <span className={cx(gaegu.className, classes.label)}>contact</span>
      <Link href="/contact">
        <Image src={phone} alt="Contact us" className={classes.img} />
      </Link>
    </Stack>
  );
}
