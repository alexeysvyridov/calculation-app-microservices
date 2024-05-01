import { Request, Response } from "express";
import {pool} from '../db/postgresql.js';

export const getAllCarsController = async (req: Request,res:Response) => {
  try {
   const resp = await pool.query('SELECT * FROM cars');
   res.status(200).send(resp.rows)
  } catch (error) {
    res.status(500).send({message: error})
  }

}