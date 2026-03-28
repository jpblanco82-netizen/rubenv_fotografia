import { v2 as cloudinary } from 'cloudinary';
import { createClient } from '@libsql/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const categories = ['nocturna', 'paisajes', 'aerea'];

async function migrate() {
  console.log('🚀 Iniciando migración final...');

  for (const cat of categories) {
    const dir = path.join(process.cwd(), 'public', 'images', cat);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
    console.log(`\n📁 Procesando ${cat} (${files.length} fotos)`);

    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        console.log(`  📤 Subiendo: ${file}...`);
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `rubenvela/${cat}`,
        });

        await client.execute({
          sql: 'INSERT INTO photos (url, public_id, category_id, title, created_at) VALUES (?, ?, ?, ?, ?)',
          args: [result.secure_url, result.public_id, cat, file.split('.')[0], Date.now()]
        });
        
        console.log(`  ✅ Completado: ${file}`);
      } catch (error) {
        console.error(`  ❌ Error en ${file}:`, error.message);
      }
    }
  }

  console.log('\n✨ ¡Migración terminada con éxito!');
  process.exit(0);
}

migrate();
