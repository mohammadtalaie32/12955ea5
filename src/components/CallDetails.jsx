import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCallDetails } from '../services/api';
import { Card, Stack, Typography, CircularProgress } from '@mui/material';

const CallDetails = () => {
  const { id } = useParams();
  const [call, setCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCallDetails = async () => {
      try {
        const { data } = await fetchCallDetails(id);
        setCall(data);
      } catch (err) {
        setError('Failed to load call details');
      } finally {
        setLoading(false);
      }
    };

    getCallDetails();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Card sx={{ p: 3, m: 3 }}>
      <Typography variant="h5" gutterBottom>
        Call Detail
      </Typography>
      <Stack spacing={2}>
        <Typography><strong>ID:</strong> {call.id}</Typography>
        <Typography><strong>From:</strong> {call.from}</Typography>
        <Typography><strong>To:</strong> {call.to}</Typography>
        <Typography><strong>Call Type:</strong> {call.call_type}</Typography>
        <Typography><strong>Date:</strong> {call.created_at}</Typography>
      </Stack>
    </Card>
  );
};

export default CallDetails;
