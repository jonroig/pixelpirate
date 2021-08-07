import { openDb } from '../../lib/db';


// gimme them unavailable pixelblocks!
export default async function getUnavailable(req, res) {
    const db = await openDb();

    const unavailable = await db.all(`
        SELECT pixelmap.*, 
        resolves.resolves, 
        availability.available, availability.cost
        FROM pixelmap, resolves, availability
        WHERE availability.available = 0
        AND resolves.pixelmapId = pixelmap.id
        AND availability.domain = pixelmap.domain
    `);

    res.json(unavailable);
} 