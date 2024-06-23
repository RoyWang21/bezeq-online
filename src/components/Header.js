import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, marginRight: 2 }}>
          Logo
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit">Design</Button>
          <Button color="inherit">Calculate</Button>
        </Box>
        <Button color="inherit">Upgrade</Button>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;