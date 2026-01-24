'use server';

import { portlandGeo } from '@/constants';
import { cacheLife } from 'next/cache';
import { fetchWeatherApi } from 'openmeteo';

// Fetches current meteorological data for Portland
export async function currentForecast() {
  'use cache';
  cacheLife('weather');

  const params = {
    latitude: [portlandGeo.latitude],
    longitude: [portlandGeo.longitude],
    current: ['precipitation', 'cloud_cover'],
  };

  const responses = await fetchWeatherApi('https://api.open-meteo.com/v1/forecast', params);
  const response = responses[0];
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;

  return {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    precipitation: current.variables(0)!.value(),
    cloud_cover: current.variables(1)!.value(),
  };
}
