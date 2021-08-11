// cuts up the milliondollarhomepage into its component pieces
// ya might need to consult this: https://github.com/Automattic/node-canvas

const sqlite3 = require('sqlite3').verbose();
const Clipper = require('image-clipper');
const Canvas = require('canvas');

Clipper.configure({
    canvas: Canvas
});

const db = new sqlite3.Database('../db/mdhp.db');

const clipPixelblock = async (id, x1, x2, y1, y2) => {
    return new Promise((resolve, reject) => {
      if (id === 283) {
        x1 = 0;
        x2 = 10;
      }
      const width = x2 - x1;
      const height = y2 - y1;
      Clipper('../public/images/milliondollarhomepage.png', () => {})
        .crop(x1, y1, width, height)
        .quality(100)
        .toFile(`../public/images/pixelblocks/${id}.png`, () => {
           console.log(`saved ../public/pixelblocks/${id}.png`);
           resolve();
       });


    });
};

const selectDomains = async () => {
  const selectSQL = 'SELECT * FROM pixelmap';
  db.all(selectSQL, [], async (err, rows) => {
    let count = 0;

    for (let i = 0; i < rows.length; i++) {
      console.log(`Clipping ${rows[i].title} ${i} of ${rows.length}`);
      console.log(rows[i]);
      await clipPixelblock(rows[i].id, rows[i].x1, rows[i].x2, rows[i].y1, rows[i].y2);
    }

    console.log('done');
  });

};

selectDomains();
