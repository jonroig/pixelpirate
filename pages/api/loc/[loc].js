import { openDb } from '../../../lib/db';


// gimme that specific pixelblock!
export default async function getId(req, res) {
    const theLoc = req.query.loc || '666,666';
    let theLocArray = theLoc.split(',');
    if (theLocArray.length !== 2) {
        theLocArray = [666,666];
    }

    const locX = theLocArray[0];
    const locY = theLocArray[1];

    const db = await openDb();
    const theObject = await db.all(`
        SELECT pixelmap.*, 
        resolves.resolves, 
        availability.available, availability.cost
        FROM pixelmap, resolves, availability
        WHERE resolves.pixelmapId = pixelmap.id
        AND availability.domain = pixelmap.domain
        AND ? >= pixelmap.x1 
        AND ? <= pixelmap.x2
        AND ? >= pixelmap.y1 
        AND ? <= pixelmap.y2
    `, locX, locX, locY, locY);

    // do a little cleanup
    const returnObj = theObject[0] || {};
    res.json(returnObj);
} 