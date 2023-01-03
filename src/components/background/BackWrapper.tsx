import {styled} from "@mui/material";
import Box from "@mui/material/Box";

const BackWrapper = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
}))

export default BackWrapper;
