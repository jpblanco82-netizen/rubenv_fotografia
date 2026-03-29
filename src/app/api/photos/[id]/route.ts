import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { photos } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { categoryId, title, description, order, type, url } = await request.json();

    const updatedPhoto = await db.update(photos)
      .set({ 
        categoryId, 
        title: title !== undefined ? title : undefined, 
        description: description !== undefined ? description : undefined,
        order: order !== undefined ? order : undefined,
        type: type !== undefined ? type : undefined,
        url: url !== undefined ? url : undefined
      })
      .where(eq(photos.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedPhoto[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('--- Iniciando proceso de borrado ---');
    console.log('ID solicitado:', id);
    
    // 1. Buscar la foto
    const photo = await db.query.photos.findFirst({
      where: eq(photos.id, parseInt(id)),
    });

    if (!photo) {
      console.error('No se encontró la foto en la base de datos');
      return NextResponse.json({ error: 'La foto no existe en la base de datos' }, { status: 404 });
    }

    console.log('Recurso encontrado. Tipo:', photo.type, 'PublicId:', photo.publicId);

    // 2. Intentar borrar de Cloudinary solo si es una imagen y tiene publicId
    if (photo.type === 'image' && photo.publicId) {
      try {
        console.log('Borrando de Cloudinary...');
        const cloudDest = await cloudinary.uploader.destroy(photo.publicId);
        console.log('Resultado Cloudinary:', cloudDest);
      } catch (cloudErr: any) {
        console.error('Error al borrar de Cloudinary:', cloudErr.message);
        // Continuamos borrando de la DB aunque falle en Cloudinary
      }
    }

    // 3. Borrar de la DB
    await db.delete(photos).where(eq(photos.id, parseInt(id)));
    console.log('✅ Borrado de la DB completado');
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ ERROR FATAL AL ELIMINAR:', error.message);
    return NextResponse.json({ error: 'Error interno del servidor: ' + error.message }, { status: 500 });
  }
}
