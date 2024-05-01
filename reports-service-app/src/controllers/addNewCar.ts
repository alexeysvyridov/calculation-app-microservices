import { Request, Response } from "express";
import {pool} from '../db/postgresql.js';

export const addNewCarController = async (req: Request,res:Response) => {
  const {model, brand, year} = req.body;
  console.log('req.body', req.body);
  if(!model || !brand || !year) res.status(400).send({message: "One from property of car is wrong"});

  try {
    const query = `
    INSERT INTO cars (brand, model, year)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;
    const values = [model, brand, year];
   const resp = await pool.query(query, values);
   res.status(200).send(resp.rows)
  } catch (error) {
    res.status(500).send({message: error})
  }

}