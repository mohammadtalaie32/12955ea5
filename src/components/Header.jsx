import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { useLayout } from '../contexts/LayoutContext';
import { routes } from '../../lib/utils/route';
import { FaPhoneSquare } from "react-icons/fa";


const Header = () => {
  const { setCurrentPage, currentPage } = useLayout();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar className="flex justify-between relative h-[5rem]">
        <Typography variant="h6" className="rounded-br-full w-max flex items-center space-x-2">
          <FaPhoneSquare />
          <h1>{currentPage} </h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          {routes.map((route) => (
            <Button
              key={route.name}
              component={NavLink}
              to={route.path}
              color="inherit"
              onClick={() => handlePageChange(route.name)}
              sx={{ '&.active': { borderBottom: '2px solid currentColor' } }}
            >
              {route.title}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
