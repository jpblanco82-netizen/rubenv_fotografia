import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { photos } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const allPhotos = await db.query.photos.findMany({
      orderBy: [desc(photos.createdAt), desc(photos.id)],
    });
    return NextResponse.json(allPhotos);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener las fotos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, publicId, categoryId, title, description, type } = body;

    console.log(`[API Photos] Intentando guardar:`, { type, categoryId, url });

    const newResource = await db.insert(photos).values({
      url,
      publicId: publicId || null,
      categoryId: categoryId || null,
      type: type || 'image',
      title: title || null,
      description: description || null,
      createdAt: new Date(), // EXPLICITO
    }).returning();

    return NextResponse.json(newResource[0], { status: 201 });
  } catch (error: any) {
    console.error(`[API Photos] Error al guardar:`, error.message);
    return NextResponse.json({ error: 'Error al guardar el recurso: ' + error.message }, { status: 500 });
  }
}
