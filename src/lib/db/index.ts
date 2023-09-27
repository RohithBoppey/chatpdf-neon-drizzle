// using Drizzle ORM with Neon DB

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true; // makes the connection secure

if(!process.env.NEON_CONNECTION_URL){
    throw new Error('Database not found')
}

const sql = neon(process.env.NEON_CONNECTION_URL);

export const db = drizzle(sql);