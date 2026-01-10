import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

import classes from './Frame.module.scss';

export interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  children?: ReactNode;
  maxSize?: number;
  href?: string;
}

export default function Frame({
  vertical = false,
  maxSize = 480,
  href = '',
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
      <Link href={href} className={classes.link}>
        <div className={clsx(classes.frame, directional)} style={style} {...props}>
          <div className={classes.content}>{children}</div>
        </div>
      </Link>
    </div>
  );
}
