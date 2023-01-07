// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from "../../configs/mysql";

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {uid} = req.query

  const connection = await pool.getConnection()

  if (uid) {
    const sql = 'SELECT u.uid, u.isCheck, u.rewardType, u.name as name, u.eName, r.name as rewardName FROM `user` as u LEFT JOIN `reward` r ON u.reward = r.id  WHERE u.uid = ?'
    const [rows] = await connection.query(sql, [uid]);
    res.status(200).json(rows)

  } else {
    const sql = 'SELECT u.uid, u.isCheck, u.rewardType, u.name as name, u.eName, r.name as rewardName FROM `user` u LEFT JOIN `reward` r ON u.reward = r.id';
    const [rows] = await connection.query(sql, [uid]);
    res.status(200).json(rows)

  }


}
