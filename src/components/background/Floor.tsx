import * as React from "react"
import Box from "@mui/material/Box";

const Floor = () => (
  <Box sx={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    fontSize: 0,
  }}>
    <img
      draggable="false"
      src="/images/underground.svg"
      alt="underground"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  </Box>
)

export default Floor
