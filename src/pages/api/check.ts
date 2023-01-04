// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Mock from 'mockjs'

type Data = string

const userList = [{
  uid: '123',
}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid, lang } = req.query

  const user = userList.find(user => user.uid === uid)
  // 后缀英文
  const suffix = lang === 'en' ? '-en' : ''

  const result = Mock.Random.integer(1, 8)
  if (user) {
    setTimeout(() => {
      res.status(200).json(`${result}${suffix}`)
    }, 2000)
  } else {
    res.status(403).json('0')
  }


}
