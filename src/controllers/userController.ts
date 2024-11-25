import { Request, Response } from "express";
import { fetchUsers } from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const users = await fetchUsers(Number(page), Number(perPage));
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
