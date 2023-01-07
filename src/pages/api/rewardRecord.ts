// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import pool from "../../configs/mysql";

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const connection = await pool.getConnection()

  const sql = 'SELECT * FROM `reward`';
  const [rows] = await connection.query(sql);
  res.status(200).json(rows)
}
