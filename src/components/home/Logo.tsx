import Box from "@mui/material/Box";
import Image from "next/image";

const Logo = () => {
  // 获取屏幕宽度像素
  const width = 177;

  return (
    <Image
      width={width}
      height={61}
      draggable="false"
      src="/images/logo.svg"
      alt="logo"
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export default Logo
