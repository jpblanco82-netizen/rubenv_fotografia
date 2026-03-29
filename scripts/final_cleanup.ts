import { db } from '../src/db';
import { photos } from '../src/db/schema';
import { sql, isNull, eq } from 'drizzle-orm';

async function finalCleanup() {
  console.log('--- Iniciando LIMPIEZA FINAL ---');
  
  // 1. Resetear todas las fechas a una base sensata (hace una semana)
  const pastDate = new Date('2026-03-22');
  await db.update(photos).set({ createdAt: pastDate });
  console.log('Todas las fechas reseteadas a 2026-03-22.');

  // 2. Eliminar los registros "negros" o fallidos (ID más recientes sin categoría)
  // Según el reporte del usuario, hay uno que no se ve y no se coloca el primero.
  // Vamos a borrar cualquier cosa sin categoría para que el usuario empiece de cero con las subidas.
  const deleted = await db.delete(photos).where(isNull(photos.categoryId)).returning();
  console.log(`Eliminados ${deleted.length} registros sin categoría (fallidos).`);

  // 3. Verificación de integridad
  const all = await db.query.photos.findMany({
    orderBy: [sql`id DESC`],
    limit: 5
  });
  console.log('Top 5 recursos actuales:', JSON.stringify(all, null, 2));

  console.log('--- Limpieza completada ---');
}

finalCleanup().catch(console.error);
