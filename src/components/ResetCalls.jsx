// src/components/ResetCalls.jsx
import React, { useState } from 'react';
import { resetCalls } from '../services/api';
import { Button, Typography, Stack } from '@mui/material';
import { useCalls } from '../contexts/CallsContext';

const ResetCalls = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useCalls();

  const handleReset = async () => {
    setLoading(true);
    try {
      await resetCalls();
      // Optionally, dispatch an action to update your calls context:
      dispatch({ type: 'RESET_CALLS' });
    } catch (error) {
      console.error('Reset failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={2} p={3}>
      <Typography variant="h5">Reset Calls</Typography>
      <Button variant="contained" onClick={handleReset} disabled={loading}>
        {loading ? 'Resetting...' : 'Reset Calls'}
      </Button>
    </Stack>
  );
};

export default ResetCalls;