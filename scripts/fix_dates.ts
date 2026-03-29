import { db } from '../src/db';
import { photos } from '../src/db/schema';
import { isNull } from 'drizzle-orm';

async function fixDates() {
  console.log('--- Iniciando corrección de fechas ---');
  
  // Buscar registros sin fecha
  const nullDates = await db.select().from(photos).where(isNull(photos.createdAt));
  console.log(`Encontrados ${nullDates.length} registros sin fecha.`);

  if (nullDates.length === 0) {
    console.log('No hay nada que corregir.');
    return;
  }

  // Asignar una fecha pasada (1 año atrás) para que lo nuevo siempre esté arriba
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);

  for (const p of nullDates) {
    await db.update(photos)
      .set({ createdAt: pastDate })
      .where(isNull(photos.createdAt)) // O .where(eq(photos.id, p.id))
      .limit(1); // Para ir uno por uno si es necesario, o solo un update masivo
    console.log(`Actualizado recurso ID: ${p.id}`);
  }

  // O simplemente masivo:
  // await db.update(photos).set({ createdAt: pastDate }).where(isNull(photos.createdAt));

  console.log('--- Corrección finalizada ---');
}

fixDates().catch(console.error);
