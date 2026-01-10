import Image from 'next/image';

import classes from './TV.module.scss';

export interface TVProps {
  width?: number;
  height?: number;
}

export default function TV({ width, height }: TVProps) {
  return <div className={classes.root}></div>;
}
