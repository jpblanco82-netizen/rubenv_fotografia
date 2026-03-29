import { db } from './src/db';
import { photos } from './src/db/schema';
import { desc } from 'drizzle-orm';

async function finalInspect() {
  const all = await db.query.photos.findMany({
    orderBy: [desc(photos.id)],
    limit: 10
  });
  
  for (const p of all) {
    console.log(`ID: ${p.id} | Cat: ${p.categoryId} | Type: ${p.type} | URL: ${p.url?.substring(0, 50)}... | Date: ${p.createdAt}`);
  }
}

finalInspect().catch(console.error);
