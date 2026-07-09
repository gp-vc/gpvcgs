'use client';

import { useRouter } from 'next/navigation';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { countryAdminGeo, wineryGeo } from '@/app/lib/geo';
import type { Winery } from '@/app/lib/wine-data';

type RegionMapProps = {
  countrySlug: string;
  wineries: Winery[];
};

export default function RegionMap({ countrySlug, wineries }: RegionMapProps) {
  const router = useRouter();
  const admin = countryAdminGeo[countrySlug];

  if (!admin) {
    return null;
  }

  const wineryByAdminKey = new Map(
    wineries
      .filter((winery) => wineryGeo[winery.winerySlug])
      .map((winery) => [wineryGeo[winery.winerySlug].adminKey, winery] as const),
  );

  return (
    <div className="relative border border-swiss-line bg-swiss-bg">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: admin.center, scale: admin.scale }}
        width={800}
        height={520}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <Geographies geography={admin.geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const adminKey = geo.properties['hc-key'];
              const winery = wineryByAdminKey.get(adminKey);
              const isActive = Boolean(winery);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (winery) {
                      router.push(`/portfolio/${countrySlug}/${winery.winerySlug}`);
                    }
                  }}
                  style={{
                    default: {
                      fill: isActive ? 'rgba(17,17,17,0.06)' : '#ffffff',
                      stroke: '#111111',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: isActive ? '#8a1f1a' : '#ffffff',
                      stroke: '#111111',
                      strokeWidth: 0.5,
                      outline: 'none',
                      cursor: isActive ? 'pointer' : 'default',
                    },
                    pressed: {
                      fill: isActive ? '#8a1f1a' : '#ffffff',
                      stroke: '#111111',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        {wineries.map((winery) => {
          const geo = wineryGeo[winery.winerySlug];
          if (!geo) {
            return null;
          }
          return (
            <Marker
              key={winery.winerySlug}
              coordinates={geo.coords}
              onClick={() => router.push(`/portfolio/${countrySlug}/${winery.winerySlug}`)}
              style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: { cursor: 'pointer' } }}
            >
              <circle r={5} fill="#8a1f1a" stroke="#ffffff" strokeWidth={1.5} />
              <text
                textAnchor="middle"
                y={-11}
                className="pointer-events-none select-none"
                style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fill: '#111111' }}
              >
                {winery.wineryName}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
