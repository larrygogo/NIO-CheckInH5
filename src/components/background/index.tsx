import BackWrapper from "./BackWrapper";
import TopRight from "./TopRight";
import Floor from "./Floor";
import TopLeft from "./TopLeft";
import CarrotLeft from "./CarrotLeft";
import CarrotRight from "./CarrotRight";
import MainImage from "./MainImage";

const Background = () => {
  return (
    <BackWrapper>
      <TopRight />
      <TopLeft />
      <CarrotLeft />
      <CarrotRight />
      <Floor />
      <MainImage />
    </BackWrapper>
  )
}

export default Background
