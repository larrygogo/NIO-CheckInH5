import Box from "@mui/material/Box";

const TopRight = () => {
  return (
    <Box sx={{
      position: 'absolute',
      left: 0,
      // 48.96 / 43 = 1.13
      top: '1.13rem',
      zIndex: 1,
    }}>
      <img
        draggable="false"
        src="/images/bg-top-left.svg"
        alt="bg-top-left"
        style={{
          // 92.45 / 43 = 2.14
          width: '2.14rem',
          objectFit: 'contain',
        }}
      />
    </Box>
  )
}

export default TopRight
