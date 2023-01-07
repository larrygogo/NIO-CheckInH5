import {RowDataPacket} from "mysql2";

export interface Reward extends RowDataPacket {
  id: number;
  name: string;
  type: string;
  count: number;
  used: number;
  url: string;
  eUrl: string;
}
