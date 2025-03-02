// src/components/LoadingSkeleton.jsx
import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" height={80} />
      <Skeleton variant="rectangular" height={80} />
      <Skeleton variant="rectangular" height={80} />
    </Stack>
  );
};

export default LoadingSkeleton;
