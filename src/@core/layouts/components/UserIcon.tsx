import React from "react";
import {IconParkIconElement} from "../types";

type Props = {
  name?: string;
  size?: string;
  width?: string;
  height?: string;
  color?: string;
  stroke?: string;
  fill?: string;
  rtl?: string;
  spin?: string;
}

const UserIcon = (props: Props) => {

  // @ts-ignore
  return <iconpark-icon {...props} />
}

export default UserIcon;
