import Box from "@mui/material/Box";

const TopRight = () => {

  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      // 28.99 / 43 = 0.67
      right: '0.67rem',
      zIndex: 1,
    }}>
      <img
        draggable="false"
        src="/images/bg-top-right.svg"
        alt="bg1"
        style={{
          // 123.6 / 43 = 2.87
          width: '2.87rem',
          // 106.22 / 43 = 2.46
          height: '2.46rem',
        }}
      />
    </Box>
  )
}

export default TopRight
