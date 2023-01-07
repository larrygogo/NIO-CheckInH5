// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import RewardService from "../../service/RewardService";

type Data = string


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid, lang } = req.query

  const rewardService = new RewardService(uid as string, lang as string)
  const data = await rewardService.check()
  res.status(data.code).json(data.message)
}
