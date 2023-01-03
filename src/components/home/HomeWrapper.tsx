import Box from "@mui/material/Box";
import {styled} from "@mui/material";

const HomeWrapper = styled(Box)(() => ({
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10vh',
  paddingLeft: '2vw',
  paddingRight: '2vw',
  zIndex: 2,
  gap: '5vh',
}))

export default HomeWrapper
