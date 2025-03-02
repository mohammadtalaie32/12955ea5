import React, { useState } from 'react';
import { fetchCalls, resetCalls } from '../services/api';
import { Button, Typography, Stack } from '@mui/material';
import { useCalls } from '../contexts/CallsContext';

const ResetCalls = () => {
  const [loading, setLoading] = useState(false);
  const { state: { calls }, dispatch } = useCalls();

  const handleReset = async () => {
    setLoading(true);
    const previousCalls = [...calls];

    dispatch({ type: 'RESET_CALLS', payload: [] });

    try {
      const response = await resetCalls();
      if (response.data) {
        dispatch({ type: 'RESET_CALLS', payload: response.data });
      }
      const { data } = await fetchCalls();
      dispatch({ type: 'SET_CALLS', payload: data });
    } catch (error) {
      console.error('Reset failed:', error);
      dispatch({ type: 'RESET_CALLS', payload: previousCalls });
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
