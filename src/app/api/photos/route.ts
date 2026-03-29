import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { photos } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const allPhotos = await db.query.photos.findMany({
      orderBy: [desc(photos.createdAt)],
    });
    return NextResponse.json(allPhotos);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener las fotos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, publicId, categoryId, title, description } = body;

    const newPhoto = await db.insert(photos).values({
      url,
      publicId,
      categoryId,
      title,
      description,
    }).returning();

    return NextResponse.json(newPhoto[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar la foto' }, { status: 500 });
  }
}
