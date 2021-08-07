import { openDb } from '../../lib/db';


// gimme all them pixelbloxes
export default async function getAll(req, res) {
    const db = await openDb();

    const theObject = await db.all(`
        SELECT pixelmap.*, 
        resolves.resolves, 
        availability.available, availability.cost
        FROM pixelmap, resolves, availability
        WHERE resolves.pixelmapId = pixelmap.id
        AND availability.domain = pixelmap.domain
    `);

    // do a little cleanup
    res.json(theObject);
} 