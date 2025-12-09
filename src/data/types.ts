export interface Wine {
    wineSlug: string;
    name: string;
    vintage: string;
    grape: string;
    alcohol: string;
    rating: string;
    description: string;
    tastingNote: string;
    imageUrl: string; // 와인병 path (public 기준)
    productionVolume?: number;
    tasteProfile: {
        body: number; // (1: light -> 5: bold)
        tannin: number; // (1: smooth -> 5: tannic)
        sweetness: number; // (1. dry -> 5: sweet)
        acidity: number; // (1. low -> 5: high)
    }
}

export interface Winery {
    winerySlug: string;
    wineryName: string;
    region: string;
    bgImageUrl: string;
    wines: Wine[];
}

export interface Country {
    countrySlug: string;
    countryName: string;
    wineries: Winery[];
}

export interface WineDetail extends Wine {
    country: string;
    winery: string;
}