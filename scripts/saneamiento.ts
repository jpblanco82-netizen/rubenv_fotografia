import { db } from '../src/db';
import { photos } from '../src/db/schema';
import { sql } from 'drizzle-orm';

async function globalFix() {
  console.log('--- Iniciando Saneamiento de EMERGENCIA ---');
  
  // 1. Resetear todas las fechas
  const pastDate = new Date('2026-03-24');
  await db.update(photos).set({ createdAt: pastDate });
  console.log('Reseteadas todas las fechas a Mar 24.');

  // 2. Ver TODOS los registros
  const all = await db.query.photos.findMany();
  console.log(`Analizando ${all.length} registros...`);

  const today = new Date();
  for (const p of all) {
    // Si la categoría es nula, vacía o "null" como string, es pendiente
    if (!p.categoryId || p.categoryId === 'null' || p.categoryId === '') {
      console.log(`Corrigiendo Pendiente: ID ${p.id}, Titulo: ${p.title}`);
      await db.update(photos).set({ 
        createdAt: today,
        categoryId: null 
      }).where(sql`id = ${p.id}`);
    }
  }

  console.log('--- Saneamiento finalizado ---');
}

globalFix().catch(console.error);
