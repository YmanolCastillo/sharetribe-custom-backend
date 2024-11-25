import { Request, Response } from "express";
import { fetchTransactions } from "../services/transactionService";

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const transactions = await fetchTransactions(Number(page), Number(perPage));
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
