import sofaImg from '@/public/masked sofa.png';
import Image from 'next/image';

import classes from './Sofa.module.scss';

export default function Sofa() {
  return <Image src={sofaImg} alt="Sofa" className={classes.root} />;
}
