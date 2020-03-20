#!/usr/bin/env node

const packageJSON = require('./package.json');
const getCityBoundaries = require('./getCityBoundaries');

const [city] = process.argv.slice(2);

if (!city) {
  process.stdout.write(`get-city-boundaries@${packageJSON.version}\n`);
  process.stdout.write('Usage: get-city-boundaries CITY\n');
  process.exit(-1);
}

getCityBoundaries(city)
  .then((featureCollection) => {
    process.stdout.write(JSON.stringify(featureCollection, null, 2));
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(-1);
  });
