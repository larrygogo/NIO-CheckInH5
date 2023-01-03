import HomeWrapper from "./HomeWrapper";
import Logo from "src/components/home/Logo";
import Title from "src/components/home/Title";
import SubTitle from "src/components/home/SubTitle";
import Box from "@mui/material/Box";
import {Button, OutlinedInput} from "@mui/material";
import MainImage from "./MainImage";
import CarrotLeft from "./CarrotLeft";
import CarrotRight from "./CarrotRight";

const Home = () => {
  return (
    <HomeWrapper>
      <Logo/>
      <Box>
        <Title/>
        <SubTitle/>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '200px',
        gap: '2vh',
      }}>
        <OutlinedInput size="medium"/>
        <Button variant="contained" size="large">确认</Button>
      </Box>
      <MainImage/>
      <CarrotLeft sx={{
        position: 'absolute',
        top: '34vh',
        left: '6vw'
      }}/>
      <CarrotRight sx={{
        position: 'absolute',
        top: '32vh',
        right: '4vw'
      }}/>
    </HomeWrapper>
  )
}

export default Home
