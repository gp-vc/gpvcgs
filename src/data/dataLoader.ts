import { MOCK_DATA } from './mockData';
import { Country, Winery, WineDetail } from "./types";

const WINE_DATA: Country[] = MOCK_DATA as Country[];

// get all countries data
export async function getAllCountries(): Promise<Country[]> {
    return Promise.resolve(WINE_DATA);
}

// getting specific country's data
export async function getCountryData(countrySlug: string): Promise<Country | undefined> {
    return Promise.resolve(WINE_DATA.find(c => c.countrySlug === countrySlug));
}

// get all the combs for winery slugs (for generateStaticParams)
export async function getAllWineriesPaths(): Promise<{ countrySlug: string; winerySlug: string }[]> {
    // const paths: { countrySlug: string; winerySlug: string }[] = [];
    
    // WINE_DATA.forEach(country => {
    //     country.wineries.forEach(winery => {
    //         paths.push({
    //             countrySlug: country.countrySlug,
    //             winerySlug: winery.winerySlug,
    //         });
    //     });
    // });
    // return paths;
    return Promise.resolve(WINE_DATA.flatMap(country =>
      country.wineries.map(winery => ({
        countrySlug: country.countrySlug,
        winerySlug: winery.winerySlug,
      }))
    ));
}

// get specific winery's data
export async function getWineryData(countrySlug: string, winerySlug: string): Promise<Winery | undefined> {
    const country = await getCountryData(countrySlug);
    if (!country) return undefined;
    return country.wineries.find(w => w.winerySlug === winerySlug);
}

// get all the combs for wine slugs (for generateStaticParams)
export async function getAllWinePaths(): Promise<{ countrySlug: string; winerySlug: string; wineSlug: string }[]> {
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
export async function getWineDetail(countrySlug: string, winerySlug: string, wineSlug: string): Promise<WineDetail | undefined> {
    const country = await getCountryData(countrySlug);
    const winery = await getWineryData(countrySlug, winerySlug);
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

