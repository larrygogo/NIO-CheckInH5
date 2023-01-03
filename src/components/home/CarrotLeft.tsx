import Box, {BoxProps} from "@mui/material/Box";

const CarrotLeft = (props: BoxProps) => {
  return (
    <Box {...props}>
      <img
        draggable="false"
        src="/images/left-carrot.svg"
        alt="left-carrot"
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  )
}

export default CarrotLeft
