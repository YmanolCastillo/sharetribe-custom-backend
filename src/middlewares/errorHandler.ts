import { Request, Response, NextFunction } from "express";
import { CustomError } from "./types";

// Middleware de manejo de errores
export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[ERROR]: ${err.message}`);

  const statusCode = err.statusCode || 500;

  // Respuesta de error estándarizada
  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || "Error interno del servidor",
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    },
  });
};
