# Tienda con Carrito de Compras

Aplicación desarrollada con **Next.js (React + TypeScript) y Node.js con express.js**.  
Permite ver una lista de productos, agregarlos a un carrito, calcular la mejor combinación dentro de un presupuesto y eliminar el carrito.

## Tecnologías usadas
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Express.js, Node.js

## Instalación

### Clonar el repositorio
```bash
git clone https://github.com/usuario/repo.git
cd repo
```

### Instalar Backend
```bash
cd backend
npm install
```

### Instalar Frontend
```bash
cd frontend
npm install
```

### Ejecutar servidor Backend
```bash
cd backend
npm run dev
```

### Ejecutar Frontend
```bash
cd frontend
npm run dev
```

## Funcionalidades
- Ver lista de productos
- Agregar productos al carrito
- Eliminar productos del carrito
- Calcular la mejor combinación de productos sin exceder un presupuesto

## Endpoints
- GET	/products - Obtiene la lista de productos
- POST	/cart -	Agrega un producto al carrito
- GET	/cart	- Obtiene el carrito actual
- DELETE	/deletecart/ -	Elimina todos los productos del carrito
