const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");
const puppeteer = require('puppeteer');

const db = new sqlite3.Database('../db/mdhp.db');

let theBrowser = null;
const fetchBrowser = async () => {
  if (theBrowser) {
    return theBrowser;
  }
  theBrowser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome-stable',
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const browserVersion = await theBrowser.version();
  console.log('Launched browser', browserVersion);
  return theBrowser;
}

const closeBrowser = async () => {
  if (theBrowser) {
    await theBrowser.close();
    theBrowser = null;
    console.log('closed browser');
  }
};

const grabPage = async (row) => {
  // return new Promise(async (resolve, reject) => {
    const theBrowser = await fetchBrowser();

    const page = await theBrowser.newPage({
      waitUntil: 'domcontentloaded',
      timeout: 10000,
    });

    // set the viewport...
    const viewport = {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
    };

    await page.setViewport(viewport);

    // set the user agent
    const userAgent = await theBrowser.userAgent();
    await page.setUserAgent('PixelPirate.club - MillionDollarHomepage Status/bot');
    await page.evaluate('navigator.userAgent');

    try {
      console.log(`Navigating to ${row.href}`);
      const response = await page.goto(row.href, { timeout: 10000 });
      // const chain = response.request().redirectChain();
      // console.log(chain);

      const content = await page.content();
      // console.log(content);

      if (!content.includes('Cox Communications')) {
        // const opts = {
        //   path: `../public/images/screenshots/${row.id}.png`,
        //   // omitBackground: true
        //   clip: {
        //     x: 0,
        //     y: 0,
        //     width: 1024,
        //     height: 768,
        //   },
        // };

        // await page.screenshot(opts);

        const deleteSQL = 'DELETE FROM resolves WHERE pixelmapId = ? ';
        db.run(deleteSQL, [row.id], () => {
          const insertSQL = 'INSERT INTO resolves (pixelmapId, resolves ) VALUES (?, 1)';
          db.run(insertSQL, [row.id])
        });
      } else {
        const deleteSQL = 'DELETE FROM resolves WHERE pixelmapId = ? ';
        db.run(deleteSQL, [row.id], () => {
          const insertSQL = 'INSERT INTO resolves (pixelmapId, resolves ) VALUES (?, 0)';
          db.run(insertSQL, [row.id])
        });
      }
    } catch (err) {
      console.log(err);

      const deleteSQL = 'DELETE FROM resolves WHERE pixelmapId = ? ';
      db.run(deleteSQL, [row.id], () => {
        const insertSQL = 'INSERT INTO resolves (pixelmapId, resolves ) VALUES (?, 0)';
        db.run(insertSQL, [row.id])
      });

    }

    await page.close();
  //   resolve();
  // });
};

const selectScreenshots = async () => {
  await fetchBrowser();
  const selectSQL = 'SELECT * FROM pixelmap';
  db.all(selectSQL, [], async (err, rows) => {
    let count = 0;

    for (let i = 0; i < rows.length; i++) {
      console.log(`Checking ${rows[i].href} ${i} of ${rows.length}`);
      await grabPage(rows[i]);
    }

    closeBrowser();
    console.log('done');
  });

}

selectScreenshots();
