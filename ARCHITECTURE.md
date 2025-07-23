# 🏗️ Arquitectura del Sistema de Pagos Descentralizado

## 📋 Resumen del Proyecto

Este proyecto implementa un sistema de generación de botones de pago descentralizado utilizando **Internet Computer Protocol (ICP)** y **Bitcoin nativo**. El sistema permite a comercios crear botones de pago que generan QR codes o links para recibir pagos en BTC.

## 🎯 Objetivos

- ✅ Autenticación con Internet Identity
- 🔄 Registro de comercios con wallets
- 🔄 Generación de sub-wallets únicas
- 🔄 Creación de botones de pago con QR/Links
- 🔄 Monitoreo de transacciones Bitcoin
- 🔄 Sistema de comisiones automático
- 🔄 Dashboard para gestión de transacciones

## 🏛️ Arquitectura Clean Architecture

### Backend (Motoko)

```
src/payment_system_backend/
├── features/                    # Módulos por funcionalidad
│   ├── auth/                   # Autenticación y usuarios
│   │   ├── domain/            # Lógica de negocio
│   │   │   ├── entities/      # Entidades del dominio
│   │   │   ├── repositories/  # Interfaces de repositorios
│   │   │   └── usecases/      # Casos de uso
│   │   ├── infrastructure/    # Implementaciones técnicas
│   │   │   └── repositories/  # Implementación de repositorios
│   │   └── presentation/      # Controladores y APIs
│   │       └── controllers/   # Controladores de presentación
│   ├── merchants/             # Gestión de comercios
│   ├── payments/              # Sistema de pagos
│   └── bitcoin/               # Integración Bitcoin
├── shared/                    # Código compartido
│   ├── domain/               # Entidades compartidas
│   ├── infrastructure/       # Servicios compartidos
│   └── utils/                # Utilidades
└── main.mo                   # Punto de entrada
```

### Frontend (React + TypeScript)

```
src/payment_system_frontend/src/
├── features/                  # Módulos por funcionalidad
│   ├── auth/                 # Autenticación
│   │   ├── components/       # Componentes React
│   │   ├── hooks/           # Hooks personalizados
│   │   ├── services/        # Servicios de API
│   │   └── types/           # Tipos TypeScript
│   ├── merchants/           # Gestión de comercios
│   ├── payments/            # Sistema de pagos
│   └── dashboard/           # Dashboard principal
├── shared/                   # Código compartido
│   ├── components/          # Componentes reutilizables
│   ├── hooks/              # Hooks compartidos
│   ├── services/           # Servicios compartidos
│   ├── types/              # Tipos compartidos
│   └── utils/              # Utilidades
└── App.tsx                 # Componente principal
```

## 🔧 Tecnologías Utilizadas

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

## 🚀 Estado Actual del Proyecto

### ✅ Completado (Paso 1)
- [x] Estructura de Clean Architecture
- [x] Módulo de autenticación (backend)
- [x] Entidades y repositorios de usuarios
- [x] Casos de uso de autenticación
- [x] Controladores de presentación
- [x] Frontend con React y TypeScript
- [x] Sistema de autenticación básico
- [x] UI moderna y responsive
- [x] Conversión completa a TypeScript
- [x] Actualización de nombres del proyecto

### 🔄 Próximos Pasos
1. **Paso 2**: Integración con Internet Identity
2. **Paso 3**: Módulo de comercios
3. **Paso 4**: Generación de sub-wallets
4. **Paso 5**: Integración Bitcoin
5. **Paso 6**: Sistema de pagos
6. **Paso 7**: Dashboard completo

## 📁 Estructura de Archivos Actual

```
payment-system-icp/
├── dfx.json                          # Configuración DFX
├── package.json                      # Dependencias del proyecto
├── ARCHITECTURE.md                   # Esta documentación
├── src/
│   ├── payment_system_backend/
│   │   ├── features/
│   │   │   └── auth/
│   │   │       ├── domain/
│   │   │       │   ├── entities/User.mo
│   │   │       │   ├── repositories/UserRepository.mo
│   │   │       │   └── usecases/AuthUseCase.mo
│   │   │       ├── infrastructure/
│   │   │       │   └── repositories/UserRepositoryImpl.mo
│   │   │       └── presentation/
│   │   │           └── controllers/AuthController.mo
│   │   └── main.mo
│   └── payment_system_frontend/
│       ├── src/
│       │   ├── features/
│       │   │   └── auth/
│       │   │       ├── components/LoginForm.tsx
│       │   │       ├── hooks/useAuth.tsx
│       │   │       ├── services/auth.service.ts
│       │   │       └── types/auth.types.ts
│       │   ├── App.tsx
│       │   └── index.css
│       └── package.json
```

## 🎨 Principios de Diseño

### Clean Architecture
- **Independencia de frameworks**: El código de negocio no depende de frameworks externos
- **Testabilidad**: Cada capa puede ser testeada independientemente
- **Independencia de UI**: La lógica de negocio no depende de la interfaz
- **Independencia de base de datos**: El dominio no conoce detalles de persistencia

### Screaming Architecture
- **Organización por features**: Cada funcionalidad tiene su propia carpeta
- **Nombres descriptivos**: Los nombres de archivos y carpetas describen su propósito
- **Separación de responsabilidades**: Cada capa tiene una responsabilidad específica

## 🔐 Seguridad

- **Autenticación descentralizada**: Uso de Internet Identity
- **Validación de datos**: Validaciones en todas las capas
- **Manejo seguro de claves**: Las claves privadas nunca se almacenan en texto plano
- **Transacciones seguras**: Todas las transacciones Bitcoin son verificadas

## 📈 Escalabilidad

- **Arquitectura modular**: Fácil agregar nuevas features
- **Persistencia eficiente**: Uso de Stable Storage para datos críticos
- **Caché inteligente**: Minimización de llamadas al canister
- **Lazy loading**: Carga de componentes bajo demanda

## 🧪 Testing

- **Unit tests**: Para casos de uso y entidades
- **Integration tests**: Para repositorios y servicios
- **E2E tests**: Para flujos completos de usuario
- **Contract tests**: Para APIs del canister

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Configurar DFX
dfx start --background

# Desplegar canisters
dfx deploy

# Ejecutar frontend
npm run start
```

## 📝 Notas de Desarrollo

- El proyecto sigue las mejores prácticas de ICP
- La arquitectura permite fácil extensión para nuevas features
- El código está documentado y es mantenible
- Se prioriza la seguridad y escalabilidad

---

**Próximo paso**: Implementar la integración completa con Internet Identity para el sistema de autenticación descentralizada. 