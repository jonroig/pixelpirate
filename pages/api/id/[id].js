import { openDb } from '../../../lib/db';


// gimme that specific pixelblock!
export default async function getId(req, res) {
    const theId = req.query.id || 666;
    const db = await openDb();
    const theObject = await db.all(`
        SELECT pixelmap.*, 
        resolves.resolves, 
        availability.available, availability.cost
        FROM pixelmap, resolves, availability
        WHERE pixelmap.id = ?
        AND resolves.pixelmapId = pixelmap.id
        AND availability.domain = pixelmap.domain
    `, theId);

    const returnObj = theObject[0] || {};
    res.json(returnObj);
} 