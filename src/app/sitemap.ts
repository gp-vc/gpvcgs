import { MetadataRoute } from "next";
import { getAllCountries, getAllWineriesPaths, getAllWinePaths, getCountryData, getWineryData, getWineDetail } from "@/src/data/dataLoader";

// 호스트(도메인) 설정: .env에 SITE_URL 또는 NEXT_PUBLIC_SITE_URL 설정 권장
const BASE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const fields: MetadataRoute.Sitemap = [];

  const now = new Date().toISOString();

  // static routes
  const staticPages = [
    '/',
    '/portfolio',
    '/contact',
    '/privacy-policy',
    // 필요시 추가: '/about', '/terms' 등
  ];
  staticPages.forEach(path => {
    fields.push({
      url: `${BASE_URL}${path}`,
      lastModified: now,
    });
  });

  // countries (from data loader)
  const countries = await getAllCountries();
  for (const country of countries) {
    fields.push({
      url: `${BASE_URL}/portfolio/${country.countrySlug}`,
      lastModified: now,
    });
  }

  // wineries
  const wineryPaths = await getAllWineriesPaths();
  for (const p of wineryPaths) {
    const winery = await getWineryData(p.countrySlug, p.winerySlug);
    const url = `${BASE_URL}/portfolio/${p.countrySlug}/${p.winerySlug}`;
    // create base entry then attach images using a temporary any-cast
    const entry = { url, lastModified: now } as unknown as MetadataRoute.Sitemap[number];
    if (winery?.bgImageUrl) {
      (entry as any).images = [
        {
          url: winery.bgImageUrl.startsWith('http') ? winery.bgImageUrl : `${BASE_URL}${winery.bgImageUrl}`,
          title: winery.wineryName,
        },
      ];
    }
    fields.push(entry);
  }

  // wines (detail pages)
  const winePaths = await getAllWinePaths();
  for (const p of winePaths) {
    const wine = await getWineDetail(p.countrySlug, p.winerySlug, p.wineSlug);
    const url = `${BASE_URL}/portfolio/${p.countrySlug}/${p.winerySlug}/${p.wineSlug}`;
    // create base entry then attach images using a temporary any-cast (avoids strict next types mismatch)
    const entryWine = { url, lastModified: now } as unknown as MetadataRoute.Sitemap[number];
    if (wine?.imageUrl) {
      (entryWine as any).images = [
        {
          url: wine.imageUrl.startsWith('http') ? wine.imageUrl : `${BASE_URL}${wine.imageUrl}`,
          title: wine.name,
        },
      ];
    }
    fields.push(entryWine);
  }

  return fields;
}

