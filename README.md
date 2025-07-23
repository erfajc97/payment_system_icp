# 🚀 Payment System ICP - Sistema de Pagos Descentralizado

Un sistema moderno de generación de botones de pago descentralizado utilizando **Internet Computer Protocol (ICP)** y **Bitcoin nativo**.

## 🎯 Características

- ✅ **Clean Architecture** con separación de capas
- ✅ **TypeScript** para tipado estático
- ✅ **Tailwind CSS** para estilos modernos
- ✅ **React 18** con hooks personalizados
- ✅ **Autenticación descentralizada** con Internet Identity
- 🔄 **Sistema de comercios** con sub-wallets
- 🔄 **Generación de QR codes** para pagos
- 🔄 **Integración Bitcoin** nativa
- 🔄 **Dashboard** completo para gestión

## 🏗️ Arquitectura

### Backend (Motoko)
- **Clean Architecture** con dominio, infraestructura y presentación
- **Módulos por features**: auth, merchants, payments, bitcoin
- **Persistencia** con Stable Storage
- **Validaciones** en todas las capas

### Frontend (React + TypeScript)
- **Arquitectura modular** por funcionalidades
- **Tailwind CSS** para estilos utilitarios
- **Hooks personalizados** para lógica de estado
- **TypeScript** para seguridad de tipos

## 🚀 Instalación Rápida

### 1. Instalar Dependencias
```bash
# Ejecutar el script de instalación
chmod +x install-dependencies.sh
./install-dependencies.sh
```

### 2. Configurar DFX
```bash
# Iniciar el entorno local de ICP
dfx start --background
```

### 3. Desplegar Canisters
```bash
# Desplegar los canisters al entorno local
dfx deploy
```

### 4. Ejecutar Frontend
```bash
# Navegar al directorio del frontend
cd src/payment_system_frontend

# Ejecutar en modo desarrollo
npm run start
```

## 📁 Estructura del Proyecto

```
payment-system-icp/
├── src/
│   ├── payment_system_backend/          # Backend en Motoko
│   │   ├── features/                 # Módulos por funcionalidad
│   │   │   ├── auth/                # Autenticación
│   │   │   ├── merchants/           # Gestión de comercios
│   │   │   ├── payments/            # Sistema de pagos
│   │   │   └── bitcoin/             # Integración Bitcoin
│   │   └── main.mo                  # Punto de entrada
│   └── payment_system_frontend/         # Frontend en React + TypeScript
│       ├── src/
│       │   ├── features/            # Módulos por funcionalidad
│       │   │   ├── auth/           # Autenticación
│       │   │   ├── merchants/      # Gestión de comercios
│       │   │   ├── payments/       # Sistema de pagos
│       │   │   └── dashboard/      # Dashboard principal
│       │   ├── shared/             # Código compartido
│       │   ├── App.tsx             # Componente principal
│       │   └── index.css           # Estilos con Tailwind
│       ├── tailwind.config.js      # Configuración Tailwind
│       └── package.json            # Dependencias
├── dfx.json                         # Configuración DFX
├── ARCHITECTURE.md                  # Documentación de arquitectura
└── install-dependencies.sh          # Script de instalación
```

## 🛠️ Tecnologías Utilizadas

### Backend
- **Motoko**: Lenguaje nativo de ICP
- **Internet Identity**: Autenticación descentralizada
- **Bitcoin Integration**: Transacciones BTC nativas
- **Stable Storage**: Persistencia de datos

### Frontend
- **React 18**: Framework de UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de estilos
- **@dfinity/agent**: Cliente ICP
- **Vite**: Build tool

## 🎨 Diseño y UX

- **Diseño moderno** con Tailwind CSS
- **Responsive** para todos los dispositivos
- **Componentes reutilizables** con clases utilitarias
- **Tema personalizado** con colores primarios y secundarios
- **Animaciones suaves** y transiciones

## 🔧 Scripts Disponibles

```bash
# Frontend
npm run start          # Ejecutar en desarrollo
npm run build          # Construir para producción
npm run format         # Formatear código

# Backend
dfx deploy             # Desplegar canisters
dfx generate           # Generar declaraciones TypeScript
dfx start              # Iniciar entorno local
```

## 📝 Estado del Proyecto

### ✅ Completado
- [x] Arquitectura Clean Architecture
- [x] Módulo de autenticación (backend)
- [x] Frontend con React + TypeScript
- [x] Tailwind CSS configurado
- [x] Sistema de autenticación básico
- [x] UI moderna y responsive
- [x] Conversión completa a TypeScript
- [x] Actualización de nombres del proyecto

### 🔄 En Desarrollo
- [ ] Integración completa con Internet Identity
- [ ] Módulo de comercios
- [ ] Generación de sub-wallets
- [ ] Integración Bitcoin
- [ ] Sistema de pagos
- [ ] Dashboard completo

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación en `ARCHITECTURE.md`
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de que DFX esté configurado correctamente
4. Abre un issue en el repositorio

---

**¡Construido con ❤️ usando Internet Computer Protocol!**
