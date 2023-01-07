import {RowDataPacket} from "mysql2";

export interface User extends RowDataPacket {
  uid: string;
  name: string;
  eName: string;
  reward: number;
  isCheck: number;
  isReward: number;
  rewardType: number;
}
