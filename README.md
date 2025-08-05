# Abogado SAS Ecuador - Sitio Web

Sitio web profesional para servicios legales especializados en constitución de Sociedades por Acciones Simplificada (SAS) en Ecuador.

## 🚀 Características

- **Diseño Responsive**: Optimizado para dispositivos móviles y desktop
- **Tecnología Moderna**: Next.js 15 con React y TypeScript
- **Estilizado con Tailwind CSS**: Diseño profesional y moderno
- **Formulario de Contacto**: Sistema de contacto integrado
- **Integración WhatsApp**: Botón flotante para comunicación directa
- **SEO Optimizado**: Meta tags y estructura optimizada para buscadores
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework de React
- [React 18](https://reactjs.org/) - Biblioteca de JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript

## 📋 Secciones del Sitio

1. **Header**: Navegación responsive con menú móvil
2. **Hero**: Presentación principal con llamadas a la acción
3. **Servicios**: Descripción detallada de servicios ofrecidos
4. **Proceso**: Timeline del proceso de constitución de SAS
5. **Contacto**: Formulario de contacto e información
6. **Footer**: Enlaces adicionales e información de contacto
7. **WhatsApp Float**: Botón flotante para contacto directo

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. El deployment se realizará automáticamente

### Otros Providers

La aplicación puede desplegarse en cualquier proveedor que soporte Next.js:
- Netlify
- AWS Amplify
- Heroku
- Railway

## 📱 Personalización

### Información de Contacto

Actualiza la información de contacto en:
- `src/components/Contact.tsx` - Información y formulario
- `src/components/Footer.tsx` - Enlaces del footer
- `src/components/WhatsAppFloat.tsx` - Número de WhatsApp

### Contenido

Modifica el contenido en los respectivos componentes:
- `src/components/Hero.tsx` - Sección principal
- `src/components/Services.tsx` - Servicios ofrecidos
- `src/components/Process.tsx` - Proceso de constitución

### Estilos

Los estilos están en:
- `src/app/globals.css` - Estilos globales
- Tailwind CSS - Clases de utilidad en componentes

## 📧 Configuración del Formulario

Para que el formulario de contacto funcione completamente, necesitas:

1. **Backend API**: Implementar endpoint para recibir mensajes
2. **Servicio de Email**: Configurar servicio como EmailJS, SendGrid, etc.
3. **Base de Datos**: Para almacenar consultas (opcional)

### Ejemplo de implementación con EmailJS:

```bash
npm install @emailjs/browser
```

```typescript
// En Contact.tsx
import emailjs from '@emailjs/browser';

const sendEmail = async (formData: FormData) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
```

## 🔧 Variables de Entorno

Crea un archivo `.env.local` para configurar variables:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=593999999999
NEXT_PUBLIC_COMPANY_EMAIL=info@abogadosas.ec
NEXT_PUBLIC_COMPANY_PHONE=+59322345678
```

## 📈 SEO y Analytics

### Meta Tags

Los meta tags están configurados en `src/app/layout.tsx` para:
- Title y Description optimizados
- Open Graph para redes sociales
- Twitter Cards
- Robots meta tags

### Google Analytics

Para agregar Google Analytics:

```typescript
// En layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas sobre el sitio web:
- Email: info@abogadosas.ec
- WhatsApp: +593 99 999-9999

---

Desarrollado con ❤️ para AbogadoSAS Ecuador
