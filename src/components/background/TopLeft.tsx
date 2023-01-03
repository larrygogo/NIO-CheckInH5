import Box from "@mui/material/Box";

const TopRight = () => {
  return (
    <Box sx={{
      position: 'absolute',
      left: 0,
      top: '6vh',
      zIndex: 1,
    }}>
      <img
        draggable="false"
        src="/images/bg-top-left.svg"
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
