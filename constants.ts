import {
  IconBrandBandcamp,
  IconBrandInstagramFilled,
  IconBrandLinktree,
  IconBrandSpotifyFilled,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';

// import { google } from 'googleapis';

// export const calendar = google.calendar({
//   version: 'v3',
//   auth: process.env.GOOGLE_CALENDAR_API_KEY,
// });

// export const calendarId =
//   'fbc714e9d21a84a2aae6a1099fb244c25f9226e411725b8852bce9a172a137b6@group.calendar.google.com';

export const socials = [
  {
    icon: IconBrandLinktree,
    text: 'Linktree',
    href: 'https://linktr.ee/asabovesound?fbclid=PAZXh0bgNhZW0CMTEAAacn_qCh0CH1GQIrvKQAtOdgI6YHUgKpahlul9vYFJaGQBug90C9hzPOH_4GWA_aem_q4gnEo-EPRejOvjdvmLjJQ',
  },
  {
    text: 'Youtube',
    icon: IconBrandYoutubeFilled,
    href: 'https://www.youtube.com/channel/UCRTPZZ2yVwt0gt4N45bGNGw',
  },
  {
    text: 'Instagram',
    icon: IconBrandInstagramFilled,
    href: 'https://www.instagram.com/asabovesound/',
  },
  { text: 'Bandcamp', icon: IconBrandBandcamp, href: 'https://asabovesound.bandcamp.com/' },
  {
    text: 'Spotify',
    icon: IconBrandSpotifyFilled,
    href: 'https://open.spotify.com/artist/2LRlqAqErJBfCwwbbNI3BZ?si=G2_B6MubSyycooyCG9-qig',
  },
];
