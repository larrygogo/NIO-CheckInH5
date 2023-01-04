import HomeWrapper from "./HomeWrapper";
import Logo from "src/components/home/Logo";
import Title from "src/components/home/Title";
import SubTitle from "src/components/home/SubTitle";
import {useState} from "react";
import LangSelect from "./LangSelect";
import NameInput from "./NameInput";
import {Zoom, Box, IconButton} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Translations from "../../@core/layouts/components/Translations";
import {Close} from "mdi-material-ui";

type AppProps = {
  step: number;
  setStep: (step: number) => void;
}

const Home = () => {
  const theme = useTheme();
  const [step, setStep] = useState<number>(1);

  return (
    <HomeWrapper>
      <Logo/>
      <Title/>
      <SubTitle/>
      {step === 1 && <LangSelect step={step} setStep={setStep}/>}
      {step !== 1 && <NameInput step={step} setStep={setStep}/>}
      <Zoom in={step === 3}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'relative',
              boxShadow: theme.shadows[5],
              width: '80%',
              borderRadius: '0.5rem',
              fontSize: 0,
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                fontSize: '0.5rem',
              }}
            >
              <IconButton onClick={() => setStep(2)}>
                <Close sx={{fontSize: '1rem'}} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0,
                height: '1rem',
                width: '100%',
                background: '#FF6010',
                color: '#ffffff',
                fontSize: '0.38rem',
              }}
            >
              <Translations text="save.text"/>
            </Box>
            <Box
              component="img"
              draggable={false}
              src="/images/pics/1.png"
              alt="pic1"
              sx={{
                width: '100%',
              }}
            />
          </div>
        </div>
      </Zoom>
    </HomeWrapper>
  )
}

export default Home
