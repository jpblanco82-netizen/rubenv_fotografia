"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  descripcion: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { nombre, telefono, email, descripcion } = formData;

    if (!nombre || !email || !descripcion) {
      return { error: 'Faltan campos requeridos' };
    }

    // Nota: 'onboarding@resend.dev' es la dirección por defecto para pruebas. 
    // Una vez verificado el dominio, se puede cambiar a algo como 'contacto@rubenvela.com'
    const { data, error } = await resend.emails.send({
      from: 'Rubén Vela <onboarding@resend.dev>',
      to: ['rubenvelaphoto@gmail.com'],
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
              background-color: #000; 
              color: #fff; 
              margin: 0; 
              padding: 0; 
              -webkit-font-smoothing: antialiased;
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto; 
              padding: 40px; 
              border: 1px solid rgba(255,255,255,0.1);
              background-color: #0a0a0a;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 1px solid rgba(255,255,255,0.1);
              padding-bottom: 20px;
            }
            .header h1 {
              font-weight: 200;
              letter-spacing: 0.3em;
              text-transform: uppercase;
              font-size: 20px;
              margin: 0;
            }
            .content {
              line-height: 1.6;
              font-weight: 300;
            }
            .field {
              margin-bottom: 24px;
            }
            .label {
              font-size: 10px;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: rgba(255,255,255,0.4);
              display: block;
              margin-bottom: 4px;
            }
            .value {
              font-size: 15px;
              letter-spacing: 0.05em;
              color: #fff;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid rgba(255,255,255,0.1);
              text-align: center;
              font-size: 10px;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: rgba(255,255,255,0.3);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Rubén Vela</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nombre</span>
                <span class="value">${nombre}</span>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Teléfono</span>
                <span class="value">${telefono || 'No proporcionado'}</span>
              </div>
              <div class="field">
                <span class="label">Mensaje</span>
                <div class="value" style="white-space: pre-wrap;">${descripcion}</div>
              </div>
            </div>
            <div class="footer">
              Portfolio de Fotografía &copy; 2026
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('Error de Resend:', error);
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('Error enviando email:', err);
    return { error: 'Error inesperado al enviar el mensaje' };
  }
}
