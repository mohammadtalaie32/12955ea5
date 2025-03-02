import React from 'react';
import { Typography, Stack } from '@mui/material';

const EmptyState = ({ message }) => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ p: 3 }}>
      <Typography variant="h6">{message}</Typography>
    </Stack>
  );
};

export default EmptyState;
