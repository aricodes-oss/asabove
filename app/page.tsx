'use server';

// import { getShows } from '@/api';
import Frame from '@/components/Frame';
import Header from '@/components/Header';
import { socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const instagram = socials.find(link => link.text === 'Instagram');

export default async function Home() {
  // const shows = await getShows();

  return (
    <>
      <Header />
      <Link href={instagram!.href}>
        <Frame>
          <Image src="/band-lowres.jpg" alt="Photo of the band" fill={true} objectFit="contain" />
        </Frame>
      </Link>
    </>
  );
}
