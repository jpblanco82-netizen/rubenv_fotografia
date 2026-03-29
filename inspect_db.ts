import { db } from './src/db';
import { photos } from './src/db/schema';
import { desc } from 'drizzle-orm';

async function inspect() {
  const result = await db.query.photos.findMany({
    orderBy: [desc(photos.id)], // Sort by ID to see the latest added
    limit: 5
  });
  console.log(JSON.stringify(result, null, 2));
}

inspect().catch(console.error);
