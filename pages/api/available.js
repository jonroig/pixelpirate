import { openDb } from '../../lib/db';


// gimme them available pixelblocks!
export default async function getAvailable(req, res) {
    const db = await openDb();
    const available = await db.all(`
        SELECT pixelmap.*, 
        resolves.resolves, 
        availability.available, availability.cost
        FROM pixelmap, resolves, availability
        WHERE availability.available = 1
        AND resolves.pixelmapId = pixelmap.id
        AND availability.domain = pixelmap.domain
    `);
    res.json(available);
} 