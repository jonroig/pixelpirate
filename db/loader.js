const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");

const contents = fs.readFileSync('../public/milliondollarhomepage.json');
const mdhpArray = JSON.parse(contents);

const db = new sqlite3.Database('./mdhp.db');

const deleteSQL = 'DELETE FROM pixelmap';
db.run(deleteSQL);


mdhpArray.forEach((mdhpObj) => {
  console.log(mdhpObj);
    const insertSQL = `
      INSERT INTO pixelmap
      (title, x1, x2, y1, y2, href, domain, size)
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(insertSQL, [
      mdhpObj.title,
      mdhpObj.coords.x1,
      mdhpObj.coords.x2,
      mdhpObj.coords.y1,
      mdhpObj.coords.y2,
      mdhpObj.href,
      mdhpObj.domain,
      mdhpObj.size,
    ]);
});
