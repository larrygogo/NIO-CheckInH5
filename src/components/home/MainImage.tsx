import Box from "@mui/material/Box";
import Image from "next/image";

const MainImage = () => {
  // 获取屏幕宽度像素

  return (
    <img
      draggable="false"
      src="/images/main.svg"
      alt="mainImage"
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export default MainImage
