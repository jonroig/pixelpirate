const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
    return sqlite.open({
      filename: './mdhp.db',
      driver: sqlite3.Database,
    });
}

async function setup() {
    const db = await openDb();
    const pixels = await db.all('SELECT * FROM pixelmap ORDER BY id ASC');
    console.log('ALL PIXELS', JSON.stringify(pixels, null, 2));
}

setup();