import { MetadataRoute } from 'next';
import { getAllCountryParams, getAllWineryParams, getAllWineParams } from '@/app/lib/wine-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.gpvcgs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = ['/', '/portfolio', '/wines', '/press', '/contact', '/privacy'];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const countryEntries: MetadataRoute.Sitemap = getAllCountryParams().map(({ countrySlug }) => ({
    url: `${SITE_URL}/portfolio/${countrySlug}`,
    lastModified: now,
  }));

  const wineryEntries: MetadataRoute.Sitemap = getAllWineryParams().map(({ countrySlug, winerySlug }) => ({
    url: `${SITE_URL}/portfolio/${countrySlug}/${winerySlug}`,
    lastModified: now,
  }));

  const wineEntries: MetadataRoute.Sitemap = getAllWineParams().map(({ countrySlug, winerySlug, wineSlug }) => ({
    url: `${SITE_URL}/portfolio/${countrySlug}/${winerySlug}/${wineSlug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...countryEntries, ...wineryEntries, ...wineEntries];
}
