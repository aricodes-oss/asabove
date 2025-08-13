import Image from 'next/image';

import whiteClover from '../../asset-src/clover-white.svg';
import blackClover from '../../asset-src/clover.svg';
import classes from './Clover.module.css';

interface Props {
  dark?: boolean;
}

const defaultProps = {
  dark: false,
};

export default function Clover({ dark, ...props }: Props = defaultProps) {
  return (
    <Image
      src={dark ? blackClover : whiteClover}
      alt="Clover icon"
      className={classes.root}
      {...props}
    />
  );
}
