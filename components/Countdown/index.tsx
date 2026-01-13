'use client';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import classes from './Countdown.module.scss';

interface CountdownProps {
  to: Date;
  title?: string;
}

export default function Countdown({ to, title, ...props }: CountdownProps) {
  return (
    <>
      {title && <span style={{ fontSize: '48px' }}>{title}</span>}
      <FlipClockCountdown to={to} {...props} className={classes.root} />
    </>
  );
}
