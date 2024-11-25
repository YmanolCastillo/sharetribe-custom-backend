import { Request, Response } from "express";
import { fetchListings } from "../services/listingService";

export const getListings = async (req: Request, res: Response) => {
  try {
    const listings = await fetchListings();
    res.status(200).json(listings);
  } catch (error) {
    console.error("Error al obtener los listados:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
