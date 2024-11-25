import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

// Cargar variables de entorno
dotenv.config();

// Crear la instancia de la aplicación
const app: Application = express();

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parsear JSON en las solicitudes

// Rutas de la API
app.use("/api", routes);

// Middleware
app.use(errorHandler);

export default app;
