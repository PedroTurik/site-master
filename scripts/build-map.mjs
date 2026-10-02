// Generates src/data/world-dots.json: a dot-matrix world map (equirectangular, cropped)
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

const topo = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf8'));
const land = feature(topo, topo.objects.land);
const STEP = 2.6; // degrees between dots
const LAT_MAX = 72, LAT_MIN = -56;
const dots = [];
for (let lat = LAT_MAX; lat >= LAT_MIN; lat -= STEP) {
  for (let lon = -168; lon <= 180; lon += STEP) {
    if (geoContains(land, [lon, lat])) dots.push([+lon.toFixed(2), +lat.toFixed(2)]);
  }
}
writeFileSync('src/data/world-dots.json', JSON.stringify({ step: STEP, latMax: LAT_MAX, latMin: LAT_MIN, lonMin: -168, lonMax: 180, dots }));
console.log(dots.length, 'dots');
