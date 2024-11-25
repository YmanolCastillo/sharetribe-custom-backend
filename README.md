Custom Backend using **Sharetribe API** - Ymanol Martinez

## Instalación

1. **Clona el repositorio**:

   git clone https://github.com/YmanolCastillo/sharetribe-custom-backend.git

    cd sharetribe-custom-backend

    npm install o npm install
3. **Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables**:   

   SHARETRIBE_CLIENT_ID=your-client-id

   SHARETRIBE_CLIENT_SECRET=your-client-secret

    PORT=4000
4. **Inicia el servidor: Para correr el servidor en desarrollo:**  

   npm run dev o yarn dev

**Estructura del proyecto:**

```
sharetribe_backend/
│
├── src/
│   ├── app.ts                # Configuración de la app (Express)
│   ├── server.ts             # Entrada principal del servidor
│   ├── routes/
│   │   ├── index.ts          # Archivo de rutas principal
│   │   ├── listingRoutes.ts  # Rutas de listados
│   │   ├── userRoutes.ts     # Rutas de usuarios
│   │   ├── transactionRoutes.ts # Rutas de transacciones
│   ├── controllers/
│   │   ├── listingController.ts  # Controlador para listados
│   │   ├── userController.ts     # Controlador para usuarios
│   │   ├── transactionController.ts # Controlador para transacciones
│   ├── services/
│   │   ├── sharetribeService.ts   # Configuración de cliente Sharetribe
│   │   ├── listingService.ts      # Lógica para listados
│   │   ├── userService.ts         # Lógica para usuarios
│   │   ├── transactionService.ts  # Lógica para transacciones
│   ├── middlewares/
│   │   ├── errorHandler.ts        # Middleware de manejo de errores
│   ├── config/
│   │   ├── envConfig.ts           # Carga de variables de entorno
│   └── types/
│       ├── Listing.ts             # Tipos para listados
│       ├── User.ts                # Tipos para usuarios
│       ├── Transaction.ts         # Tipos para transacciones
│
├── .env                          # Variables de entorno
├── .gitignore                    # Archivos a ignorar por Git
├── tsconfig.json                 # Configuración de TypeScript
├── package.json                  # Configuración del proyecto
├── yarn.lock                     # Lockfile para Yarn
└── README.md                     # Documentación del proyecto
```
