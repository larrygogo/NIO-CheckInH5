import Box from "@mui/material/Box";

const TopRight = () => {
  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      right: '6vw',
      zIndex: 1,
    }}>
      <img
        draggable="false"
        src="/images/bg-top-right.svg"
        alt="bg1"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  )
}

export default TopRight
