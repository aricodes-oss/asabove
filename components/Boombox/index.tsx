import boombox from '@/public/masked boombox.png';
import { Stack } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import classes from './Boombox.module.scss';

export interface BoomboxProps {
  href: string;
}

export default function Boombox({ href, ...props }: BoomboxProps) {
  return (
    <Stack align="center">
      <span style={{ fontSize: '48px' }}>music</span>
      <Link href={href} {...props}>
        <Image src={boombox} alt="Boombox bandcamp link" className={classes.root} />
      </Link>
    </Stack>
  );
}
