import {User} from "../types/user";
import pool from "../configs/mysql";
import {Reward} from "../types/reward";

class RewardService {
  uid: string
  lang: string
  url: string = ''

  constructor(uid: string, lang: string) {
    this.uid = uid
    this.lang = lang
    console.log(this.uid, this.lang)
  }

  async check() {
    // @ts-ignore
    const connection = await pool.getConnection()
    try {
      await connection.beginTransaction()
      const [rows] = await connection.query<User[]>('SELECT * FROM `user` WHERE `uid` = ?', [this.uid])
      if (rows.length === 0) {
        return {
          code: 404,
          message: this.lang === 'en' ? 'UID not found' : '用户不存在'
        }
      }
      const user = rows[0]
      if (user.isCheck !== 1) {
        // 更新 isCheck 为 1
        await connection.query('UPDATE `user` SET `isCheck` = 1 WHERE `uid` = ?', [this.uid])
      }

      if(user.reward) {
        const [rows] = await connection.query<Reward[]>('SELECT * FROM `reward` WHERE `id` = ?', [user.reward])
        if (rows.length === 0) {
          return {
            code: 404,
            message: this.lang === 'en' ? 'User Reward not found' : '用户的奖品不存在'
          }
        }
        const reward = rows[0]
        this.url = this.lang === 'en' ? reward.eUrl : reward.url
      } else {
        // 名单类型
        // 1 给予实物奖励
        // 2 给予 888 or 999 积分 or 剩余实物 线上参与的委员
        // 3 给予 666 积分
        // 4 给予 88 or 99 or 666 积分, 666 少于 4 份 价值小组群+领奖人

        if (user.rewardType === 2) {
          // 2 给予 888 or 999 积分 or 剩余实物 线上参与的委员
          const [rows] = await connection.query<Reward[]>('SELECT * FROM `reward` WHERE `type` = 2 AND `used` < `count` ORDER BY RAND()')
          if (rows.length === 0) {
            return {
              code: 404,
              message: this.lang === 'en' ? 'Reward not found' : '奖品不存在'
            }
          }
          // 优先实物奖励 id = 13 14 15
          const rewards = rows.filter(reward => {
            return reward.id === 13 || reward.id === 14 || reward.id === 15
          })

          let reward: Reward
          console.log(rows, rewards)
          if (rewards.length > 0) {
            // 从实物奖励中随机抽取一个
            reward = rewards[0]
          } else {
            // 从剩余奖励中随机抽取一个
            reward = rows[0]
          }

          this.url = this.lang === 'en' ? reward.eUrl : reward.url
          await connection.query('UPDATE `reward` SET `used` = `used` + 1 WHERE `id` = ?', [reward.id])
          await connection.query('UPDATE `user` SET `reward` = ? WHERE `uid` = ?', [reward.id, this.uid])
        } else {
          const [rows] = await connection.query<Reward[]>('SELECT * FROM `reward` WHERE `used` < `count` AND `type` = ? ORDER BY RAND() LIMIT 1', [user.rewardType])
          if (rows.length === 0) {
            return {
              code: 404,
              message: this.lang === 'en' ? 'No reward' : '奖品已经发完了'
            }
          }
          const reward = rows[0]
          await connection.query('UPDATE `reward` SET `used` = `used` + 1 WHERE `id` = ?', [reward.id])
          await connection.query('UPDATE `user` SET `reward` = ? WHERE `uid` = ?', [reward.id, this.uid])
          this.url = this.lang === 'en' ? reward.eUrl : reward.url
        }
      }

      connection.commit()
      return {
        code: 200,
        message: this.url,
      }
    } catch (e: any) {
      console.log(e)
      connection.rollback()
      return {
        code: 500,
        message: e.message
      }
    } finally {
      await connection.release()
    }
  }

}

export default RewardService
