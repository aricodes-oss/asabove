// See https://codepen.io/agoodwin/pen/NMJoER for original implementation
import classes from './SpaceBackground.module.scss';

export interface SpaceBackgroundProps {
  children?: React.ReactNode;
  stars?: boolean;
  twinkling?: boolean;
  clouds?: boolean;
}

export default function SpaceBackground({
  children,
  stars = true,
  twinkling = true,
  clouds = true,
}: SpaceBackgroundProps) {
  return (
    <>
      <div className={classes.container}>
        {stars && <div className={classes.stars} />}
        {twinkling && <div className={classes.twinkling} />}
        {clouds && <div className={classes.clouds} />}
      </div>
      {children}
    </>
  );
}
