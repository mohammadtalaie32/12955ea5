// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { useLayout } from '../contexts/LayoutContext';
import { routes } from '../../lib/utils/route';

const Header = () => {
  const { setCurrentPage, currentPage } = useLayout();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar className='flex justify-between relative'>
        <Typography variant="h6" className='rounded-br-full w-max' >
          {currentPage}
        </Typography>
        <Stack direction="row" spacing={2}>
          {
            routes.map((route) => (
              <Button 
                key={route.name}
                component={NavLink}
                to={route.path}
                color="inherit"
                sx={{ '&.active': { borderBottom: '2px solid currentColor' } }}
              >
                {route.title}
              </Button>
            ))
          }
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
