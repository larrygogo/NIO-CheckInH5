import Box, {BoxProps} from "@mui/material/Box";

const LeftCarrot = (props: BoxProps) => {
  return (
    <Box {...props}>
      <img
        draggable="false"
        src="/images/right-carrot.svg"
        alt="left-carrot"
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  )
}

export default LeftCarrot
