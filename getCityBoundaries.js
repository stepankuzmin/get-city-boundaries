const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');

const getCityBoundaries = async (query, options = {}) => {
  const url = new URL(options.url || 'https://nominatim.openstreetmap.org/search');
  const params = { q: query, format: options.format || 'json', polygon_geojson: 1 };
  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const results = await response.json();
  const { geojson } = results[0];
  return geojson;
};

module.exports = getCityBoundaries;
