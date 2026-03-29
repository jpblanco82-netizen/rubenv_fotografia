import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const databaseUrl = process.env.TURSO_DATABASE_URL;

if (!databaseUrl) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('TURSO_DATABASE_URL is not defined in production');
  } else {
    console.warn('TURSO_DATABASE_URL is not defined. Database will not work.');
  }
}

const client = createClient({
  url: databaseUrl || 'libsql://local.db', // Fallback for build time if not in production
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
