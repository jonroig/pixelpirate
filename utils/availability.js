// really basic tool to figure out what's available for registration
// you'll need to get an API key from developer.godaddy.com to use the availablity API

const sqlite3 = require('sqlite3').verbose();
const rp = require('request-promise');
const sleep = require('sleep');

const db = new sqlite3.Database('../db/mdhp.db');

const apiKey = 'someApiKey';
const apiSecret = 'someApiSecret';

const checkAvailable = async (rowChunk) => {
    return new Promise((resolve, reject) => {
      sleep.sleep(55);
      const gdOptions = {
        uri: 'https://api.godaddy.com/v1/domains/available?checkType=FULL',
        method: 'POST',
        body: rowChunk,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          'Authorization' : 'sso-key ' + apiKey + ':' + apiSecret,
          },
        json: true // Automatically parses the JSON string in the response
      };

      try {
        rp(gdOptions).then((results) => {
          console.log(results);


          results.domains.forEach((domainObj) => {
            let price = 0;
            if (domainObj.available) {
              price = domainObj.price;
              console.log('price', price);
            }
            const deleteSQL = 'DELETE FROM availability WHERE domain = ? ';
            db.run(deleteSQL, [domainObj.domain], () => {
              const insertSQL = 'INSERT INTO availability (domain, available, cost) VALUES (?, ?, ?)';
              db.run(insertSQL, [domainObj.domain, domainObj.available, price])
            });
          });
          if (results.errors) {
            results.errors.forEach((domainObj) => {
              const deleteSQL = 'DELETE FROM availability WHERE domain = ? ';
              db.run(deleteSQL, [domainObj.domain], () => {
                const insertSQL = 'INSERT INTO availability (domain, available, cost) VALUES (?, ?, ?)';
                db.run(insertSQL, [domainObj.domain, 0, 0])
              });
            });
          }

          resolve();
        });
      } catch (err) {
          await checkAvailable(rowChunk);
        resolve();
      }
    });
};

const selectDomains = async () => {
  let count = 0;
  const selectSQL = "SELECT DISTINCT domain FROM pixelmap ORDER BY RANDOM()";
  db.all(selectSQL, [], async (err, rows) => {

    const lookupSize = 25;
    for (let i = 0; i < Math.ceil(rows.length/lookupSize); i++) {
      const begin = i * lookupSize;
      const end = (i * lookupSize) + lookupSize;
      console.log(`Checking ${begin} to ${end}`);
      const rowChunk = rows.slice(begin, end).map(row => (
        row.domain
      ));
      rowChunk.forEach(row => {
        count++;
        console.log(count, row);
      });

      let checked = false;

      await checkAvailable(rowChunk);
      
      
        // if (i > 1535) {
          // await checkAvailable(rows[i].domain);
        // }
    }

    console.log('done');
  });

};

selectDomains();
