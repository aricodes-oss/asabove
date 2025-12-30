import clsx from 'clsx';
import { ReactNode } from 'react';

import classes from './Frame.module.scss';

export interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  horizontal?: boolean;
  children?: ReactNode;
  maxSize?: number;
}

export default function Frame({
  horizontal: vertical = false,
  maxSize = 480,
  children,
  className,
  ...props
}: FrameProps) {
  const style = {
    [`max${vertical ? 'Height' : 'Width'}`]: `${maxSize}px`,
  };
  const directional = vertical ? classes.vertical : classes.horizontal;

  return (
    <div className={clsx(classes.container, directional, className)}>
      <div className={clsx(classes.frame, directional)} style={style} {...props}>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
}
