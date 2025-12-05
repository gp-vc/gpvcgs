// src/assets/logos/index.ts
// This file exports all logo imports for easy management

// Import all SVG, png files as static assets
import closDeLobac from './clos-de-lobac.svg';
import elCaprichoLogo from './el-capricho.png';

// Export all logos with metadata
export const wineryLogos = [
    {
        name: "Clos de L'obac",
        src: closDeLobac,
        alt: "Clos de L'obac Logo",
    },
    {
        name: 'El Capricho',
        src: elCaprichoLogo,
        alt: 'El Capricho Logo',
    }
] as const;

export {
    closDeLobac,
    elCaprichoLogo,
};
