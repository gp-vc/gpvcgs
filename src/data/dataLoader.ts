import { MOCK_DATA } from './mockData';
import { Country, Winery, WineDetail } from "./types";

const WINE_DATA: Country[] = MOCK_DATA as Country[];

// get all countries data
export function getAllCountries(): Country[] {
    return WINE_DATA;
}

// getting specific country's data
export function getCountryData(countrySlug: string): Country | undefined {
    return WINE_DATA.find(c => c.countrySlug === countrySlug);
}

// get all the combs for winery slugs (for generateStaticParams)
export function getAllWineriesPaths(): { countrySlug: string; winerySlug: string }[] {
    const paths: { countrySlug: string; winerySlug: string }[] = [];
    
    WINE_DATA.forEach(country => {
        country.wineries.forEach(winery => {
            paths.push({
                countrySlug: country.countrySlug,
                winerySlug: winery.winerySlug,
            });
        });
    });
    return paths;
}

// get specific winery's data
export function getWineryData(countrySlug: string, winerySlug: string): Winery | undefined {
    const country = getCountryData(countrySlug);
    if (!country) return undefined;
    return country.wineries.find(w => w.winerySlug === winerySlug);
}

// get all the combs for wine slugs (for generateStaticParams)
export function getAllWinePaths(): { countrySlug: string; winerySlug: string; wineSlug: string }[] {
  const paths: { countrySlug: string; winerySlug: string; wineSlug: string }[] = [];
  WINE_DATA.forEach(country => {
    country.wineries.forEach(winery => {
      winery.wines.forEach(wine => {
        paths.push({
          countrySlug: country.countrySlug,
          winerySlug: winery.winerySlug,
          wineSlug: wine.wineSlug,
        });
      });
    });
  });
  return paths;
}

// get specific wine data
export function getWineDetail(countrySlug: string, winerySlug: string, wineSlug: string): WineDetail | undefined {
    const country = getCountryData(countrySlug);
    const winery = getWineryData(countrySlug, winerySlug);
    if (!country || !winery) return undefined;

    const wine = winery.wines.find(w => w.wineSlug === wineSlug);

    if (wine) {
        return {
            ...wine,
            country: country.countryName,
            winery: winery.wineryName,
        };
    }
    return undefined;
}

