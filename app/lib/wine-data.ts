import { MOCK_DATA } from './gpvc-data/mockData';
import type { Country, Winery, Wine } from './gpvc-data/types';

export const countries = MOCK_DATA as Country[];

export function getCountryBySlug(countrySlug: string) {
  return countries.find((country) => country.countrySlug === countrySlug);
}

export function getWineryBySlug(countrySlug: string, winerySlug: string) {
  const country = getCountryBySlug(countrySlug);
  return country?.wineries.find((winery) => winery.winerySlug === winerySlug);
}

export function getWineBySlug(countrySlug: string, winerySlug: string, wineSlug: string) {
  const winery = getWineryBySlug(countrySlug, winerySlug);
  return winery?.wines.find((wine) => wine.wineSlug === wineSlug);
}

export function getAllCountryParams() {
  return countries.map((country) => ({ countrySlug: country.countrySlug }));
}

export function getAllWineryParams() {
  return countries.flatMap((country) =>
    country.wineries.map((winery) => ({
      countrySlug: country.countrySlug,
      winerySlug: winery.winerySlug,
    })),
  );
}

export function getAllWineParams() {
  return countries.flatMap((country) =>
    country.wineries.flatMap((winery) =>
      winery.wines.map((wine) => ({
        countrySlug: country.countrySlug,
        winerySlug: winery.winerySlug,
        wineSlug: wine.wineSlug,
      })),
    ),
  );
}

export function getFeaturedWines() {
  return countries.flatMap((country) => country.wineries.flatMap((winery) => winery.wines)).slice(0, 6);
}

export function getAllWinesFlat() {
  return countries.flatMap((country) =>
    country.wineries.flatMap((winery) =>
      winery.wines.map((wine) => ({
        wine,
        winery,
        country,
      })),
    ),
  );
}

const WHITE_GRAPE_SIGNALS = [
  '그르나슈 블랑카',
  '알렉산드리아 무스캇',
  '샤렐로',
  '마카부',
  '미카부',
  '소비뇽 블랑',
  'sauvignon blanc',
  '샤르도네',
  '샤도네이',
  'chardonnay',
  '피노 그리',
  '리슬링',
  'riesling',
  '케르너',
  '뮐러 트루가우',
  '피노 블랑',
  '세이벨',
  '몬트브라이트',
  '바쿠스',
  'palomino',
  'dona blanca',
  '골든 옐로우',
  '화이트 시트러스',
  '화이트 와인',
  '화이트와인',
  '화이트',
  'blanco',
  'blanc',
];

const RED_GRAPE_SIGNALS = [
  '카베르네 소비뇽',
  '그르나슈',
  '시라',
  '메를로',
  '까리녜냐',
  '템프라니요',
  'tempranillo',
  '가르나챠',
  '가르나차',
  'garnacha tintoera',
  'garnacha',
  '멘시아',
  'mencia',
  '프리에토 피쿠도',
  '프리에토 피쿠토',
  'prieto picudo',
  '피노 누아',
  'pinot noir',
  '츠바이겔트',
  'zweigelt',
  '루비 레드',
  '가넷 레드',
  '루비',
  '레드 와인',
  '레드와인',
  '레드',
  '붉은',
  'rouge',
  'negre',
  'tinto',
];

export type WineType = 'red' | 'white';

export function getWineType(wine: Wine): WineType {
  let text = `${wine.grape} ${wine.description} ${wine.tastingNote} ${wine.name}`.toLowerCase();

  let whiteScore = 0;
  for (const signal of WHITE_GRAPE_SIGNALS) {
    if (text.includes(signal)) {
      whiteScore += 1;
      text = text.split(signal).join(' ');
    }
  }

  let redScore = 0;
  for (const signal of RED_GRAPE_SIGNALS) {
    if (text.includes(signal)) {
      redScore += 1;
    }
  }

  return redScore >= whiteScore ? 'red' : 'white';
}

export function splitFirstSentence(text: string) {
  const match = text.match(/^(.+?[.!?])(?:\s|\n)+([\s\S]*)$/);
  if (!match) {
    return { quote: text, remainder: '' };
  }
  return { quote: match[1], remainder: match[2] };
}

export type { Country, Winery, Wine } from './gpvc-data/types';
