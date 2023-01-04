// ** React Imports
import { ReactNode } from 'react'

// ** Next Import

// ** MUI Components
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'


const Error401 = () => {
  return (
    <Box className='content-center'>
      Not Found
    </Box>
  )
}

Error401.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error401
