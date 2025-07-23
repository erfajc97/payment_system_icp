#!/bin/bash

echo "🚀 Instalando dependencias del proyecto Payment System ICP..."

# Instalar dependencias del frontend
echo "📦 Instalando dependencias del frontend..."
cd src/payment_system_frontend
npm install

# Instalar dependencias del backend (si es necesario)
echo "🔧 Configurando backend..."
cd ../..
npm install

# Generar declaraciones de TypeScript
echo "📝 Generando declaraciones de TypeScript..."
dfx generate payment_system_backend

echo "✅ ¡Todas las dependencias han sido instaladas!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ejecutar: dfx start --background"
echo "2. Ejecutar: dfx deploy"
echo "3. Ejecutar: npm run start (en src/payment_system_frontend)"
echo ""
echo "🎉 ¡El proyecto Payment System ICP está listo para usar!" 