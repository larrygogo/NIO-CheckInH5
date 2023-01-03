import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const GlobalWrapper = styled(Box)(({theme}) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}));

export default GlobalWrapper;
