import path from 'path';
import sqlite, {open} from 'sqlite';
import sqlite3 from 'sqlite3';

// connect to the db
export async function openDb() {
    const thePath = path.join(process.cwd(), 'db', 'mdhp.db')
    return open({
      filename: thePath,
      driver: sqlite3.Database,
    });
}
