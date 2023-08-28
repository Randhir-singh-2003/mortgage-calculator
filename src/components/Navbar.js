import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { blue, red } from '@mui/material/colors';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="lg">
        <Toolbar>
          
          
          <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
            Bank of React
          </Typography>
          
        </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Navbar