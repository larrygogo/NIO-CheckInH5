import BackWrapper from "./BackWrapper";
import TopRight from "./TopRight";
import Floor from "./Floor";
import TopLeft from "./TopLeft";

const Background = () => {
  return (
    <BackWrapper>
      <TopRight />
      <TopLeft />
      <Floor />
    </BackWrapper>
  )
}

export default Background
