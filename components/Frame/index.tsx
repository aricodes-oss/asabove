import clsx from 'clsx';
import { ReactNode } from 'react';

import classes from './Frame.module.scss';

export interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  horizontal?: boolean;
  children?: ReactNode;
}

export default function Frame({ horizontal = false, children, className, ...props }: FrameProps) {
  return (
    <div
      className={clsx(classes.frame, horizontal ? classes.horizontal : classes.vertical, className)}
      {...props}
    >
      <div className={classes.content}>{children}</div>
    </div>
  );
}
