// See https://codepen.io/agoodwin/pen/NMJoER for original implementation
import Snow from './Snow';
import classes from './SpaceBackground.module.scss';

export interface SpaceBackgroundProps {
  children?: React.ReactNode;
  stars?: boolean;
  twinkling?: boolean;
  clouds?: boolean;
  snowing?: boolean;
}

export default function SpaceBackground({
  children,
  stars = true,
  twinkling = true,
  clouds = true,
  snowing = false,
}: SpaceBackgroundProps) {
  return (
    <>
      <div className={classes.container}>
        {stars && <div className={classes.stars} />}
        {twinkling && <div className={classes.twinkling} />}
        {clouds && <div className={classes.clouds} />}
        {snowing && <Snow />}
      </div>
      {children}
    </>
  );
}
