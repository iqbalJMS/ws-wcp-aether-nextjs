// remove folder on .next/cache/fetch-cache periodically for 1 minute

const fs = require('fs');
const path = require('path');

const cachePath = path.join(process.cwd(), '.next/cache/fetch-cache');
console.log(cachePath)
const cachePurgeInterval = 60 * 1000;

function purgeCache() {
    fs.rm(cachePath, { recursive: true }, (err) => {
        if (!err) {
            console.log('Cache purged');
        }
    });
}

setInterval(() => {
    purgeCache();
}, cachePurgeInterval);