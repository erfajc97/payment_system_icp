# 🚀 Múltiples Frontends en ICP

## 📋 Resumen

Este documento explica cómo configurar y gestionar múltiples frontends en un proyecto ICP, incluyendo landing pages, dashboards administrativos y aplicaciones principales.

## 🎯 Opciones Disponibles

### **Opción 1: Múltiples Canisters de Assets (Recomendado)**

```
payment-system-icp/
├── src/
│   ├── payment_system_backend/          # Backend principal
│   ├── payment_system_frontend/         # App principal (puerto 3000)
│   ├── landing_frontend/             # Landing page (puerto 3001)
│   └── admin_frontend/               # Dashboard admin (puerto 3002)
├── dfx.json                          # Configuración de canisters
└── package.json                      # Dependencias globales
```

**Ventajas:**
- ✅ Separación completa de responsabilidades
- ✅ Diferentes tecnologías por frontend
- ✅ Despliegue independiente
- ✅ URLs únicas por aplicación
- ✅ Escalabilidad independiente

**URLs resultantes:**
- `https://payment-system-frontend.ic0.app` - App principal
- `https://landing-frontend.ic0.app` - Landing page
- `https://admin-frontend.ic0.app` - Dashboard admin

### **Opción 2: Subdirectorios en un Solo Frontend**

```
src/payment_system_frontend/
├── src/
│   ├── pages/
│   │   ├── app/                      # App principal
│   │   ├── landing/                  # Landing page
│   │   └── admin/                    # Dashboard admin
│   ├── shared/                       # Componentes compartidos
│   └── App.tsx                       # Router principal
```

**Ventajas:**
- ✅ Código compartido fácil
- ✅ Un solo despliegue
- ✅ Menor complejidad

**Desventajas:**
- ❌ Menos flexibilidad
- ❌ Tecnologías limitadas
- ❌ Escalabilidad limitada

### **Opción 3: Micro-frontends con Module Federation**

```
src/
├── mi_proyecto_backend/
├── shell/                            # Aplicación contenedora
├── payment-app/                      # Micro-frontend pagos
├── landing-app/                      # Micro-frontend landing
└── admin-app/                        # Micro-frontend admin
```

**Ventajas:**
- ✅ Máxima flexibilidad
- ✅ Tecnologías independientes
- ✅ Despliegue independiente

**Desventajas:**
- ❌ Mayor complejidad
- ❌ Overhead de configuración

## 🏗️ Implementación Actual (Opción 1)

### **Configuración en dfx.json**

```json
{
  "canisters": {
    "payment_system_backend": {
      "main": "src/payment_system_backend/main.mo",
      "type": "motoko"
    },
    "payment_system_frontend": {
      "dependencies": ["payment_system_backend"],
      "source": ["src/payment_system_frontend/dist"],
      "type": "assets",
      "workspace": "payment_system_frontend"
    },
    "landing_frontend": {
      "dependencies": ["payment_system_backend"],
      "source": ["src/landing_frontend/dist"],
      "type": "assets",
      "workspace": "landing_frontend"
    },
    "admin_frontend": {
      "dependencies": ["payment_system_backend"],
      "source": ["src/admin_frontend/dist"],
      "type": "assets",
      "workspace": "admin_frontend"
    }
  }
}
```

### **Estructura de Carpetas**

```
src/
├── payment_system_backend/              # Backend Motoko
│   ├── features/
│   │   ├── auth/
│   │   ├── merchants/
│   │   ├── payments/
│   │   └── bitcoin/
│   └── main.mo
├── payment_system_frontend/             # App Principal
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── merchants/
│   │   │   ├── payments/
│   │   │   └── dashboard/
│   │   ├── shared/
│   │   ├── App.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── landing_frontend/                 # Landing Page
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
└── admin_frontend/                   # Dashboard Admin
    ├── src/
    │   ├── features/
    │   │   ├── analytics/
    │   │   ├── users/
    │   │   └── transactions/
    │   ├── App.tsx
    │   └── index.css
    ├── package.json
    └── vite.config.ts
```

## 🚀 Scripts de Desarrollo

### **Desarrollo Local**

```bash
# Terminal 1: Backend
dfx start --background

# Terminal 2: App Principal
cd src/payment_system_frontend
npm run start  # Puerto 3000

# Terminal 3: Landing Page
cd src/landing_frontend
npm run start  # Puerto 3001

# Terminal 4: Admin Dashboard
cd src/admin_frontend
npm run start  # Puerto 3002
```

### **Despliegue**

```bash
# Desplegar todo
dfx deploy --all

# Desplegar frontend específico
dfx deploy payment_system_frontend
dfx deploy landing_frontend
dfx deploy admin_frontend
```

## 🎨 Temas y Estilos

### **App Principal**
- **Tema**: Profesional y funcional
- **Colores**: Azul primario, gris secundario
- **Enfoque**: UX/UI para comercios

### **Landing Page**
- **Tema**: Marketing y conversión
- **Colores**: Gradientes, acentos morados
- **Enfoque**: SEO, conversión, branding

### **Admin Dashboard**
- **Tema**: Analítico y técnico
- **Colores**: Verde para éxito, rojo para alertas
- **Enfoque**: Datos, métricas, gestión

## 🔗 Navegación Entre Frontends

### **Enlaces Cruzados**

```typescript
// En landing page
const goToApp = () => {
  window.location.href = 'https://payment-system-frontend.ic0.app';
};

// En app principal
const goToLanding = () => {
  window.location.href = 'https://landing-frontend.ic0.app';
};
```

### **Compartir Estado**

```typescript
// Usar localStorage para datos compartidos
const setSharedData = (data: any) => {
  localStorage.setItem('payment-system-data', JSON.stringify(data));
};

const getSharedData = () => {
  return JSON.parse(localStorage.getItem('payment-system-data') || '{}');
};
```

## 📊 Monitoreo y Analytics

### **Google Analytics**

```typescript
// Configuración por frontend
const analyticsConfig = {
  'payment-system-frontend': 'GA-XXXXXXXX-1',
  'landing-frontend': 'GA-XXXXXXXX-2',
  'admin-frontend': 'GA-XXXXXXXX-3'
};
```

### **Error Tracking**

```typescript
// Sentry por frontend
Sentry.init({
  dsn: 'https://xxx@sentry.io/xxx',
  environment: 'production',
  tags: {
    frontend: 'payment-system'
  }
});
```

## 🔐 Seguridad

### **CORS Configuration**

```typescript
// En cada frontend
const corsConfig = {
  origin: [
    'https://payment-system-frontend.ic0.app',
    'https://landing-frontend.ic0.app',
    'https://admin-frontend.ic0.app'
  ],
  credentials: true
};
```

### **Autenticación Compartida**

```typescript
// Usar Internet Identity para todos los frontends
const identityProvider = 'https://identity.ic0.app';
```

## 📈 Escalabilidad

### **Optimizaciones**

1. **Lazy Loading**: Cargar componentes bajo demanda
2. **Code Splitting**: Dividir bundles por rutas
3. **Caching**: Cachear assets estáticos
4. **CDN**: Usar CDN para assets globales

### **Monitoreo de Performance**

```typescript
// Web Vitals por frontend
const reportWebVitals = (metric: any) => {
  console.log(metric);
  // Enviar a analytics
};
```

## 🧪 Testing

### **E2E Testing**

```bash
# Test app principal
npm run test:e2e -- --project=payment-system

# Test landing page
npm run test:e2e -- --project=landing

# Test admin dashboard
npm run test:e2e -- --project=admin
```

### **Component Testing**

```typescript
// Tests compartidos
import { render, screen } from '@testing-library/react';
import { SharedComponent } from '../shared/SharedComponent';

test('shared component works', () => {
  render(<SharedComponent />);
  expect(screen.getByText('Shared')).toBeInTheDocument();
});
```

---

## 🎯 Próximos Pasos

1. **Implementar landing page completa**
2. **Crear dashboard administrativo**
3. **Configurar navegación entre frontends**
4. **Implementar analytics compartidos**
5. **Optimizar performance**

**¡Esta arquitectura te permite escalar tu proyecto de manera profesional y mantenible!** 