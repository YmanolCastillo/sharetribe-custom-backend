Custom Backend using **Sharetribe API** - Ymanol Martinez

**Estructura del proyecto:**

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
