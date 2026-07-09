export const countryAdminGeo: Record<string, { geoUrl: string; center: [number, number]; scale: number }> = {
  spain: { geoUrl: '/data/spain-provinces.json', center: [-3.7, 40.2], scale: 2600 },
  japan: { geoUrl: '/data/japan-prefectures.json', center: [138.5, 37.5], scale: 1300 },
};

export const wineryGeo: Record<string, { adminKey: string; coords: [number, number] }> = {
  'costers-del-siurana': { adminKey: 'es-t', coords: [0.83, 41.18] },
  'bodega-el-capricho': { adminKey: 'es-le', coords: [-5.85, 42.35] },
  'hamada-vineyard': { adminKey: 'jp-hk', coords: [142.5, 43.5] },
};
