import React from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, IconButton, Stack, Typography } from '@mui/material';
import { IoIosArchive } from "react-icons/io";
import { useCalls } from '../contexts/CallsContext';
import { updateCall } from '../services/api';
import moment from 'moment';
import CallTypeIcon from './CallTypeIcon.jsx';


const CallCard = memo(({ call, className = '' }) => {
  const navigate = useNavigate();
  const { dispatch } = useCalls();
  
  const handleArchive = async (e) => {
    e.stopPropagation();
    dispatch({
      type: 'OPTIMISTIC_ARCHIVE',
      payload: { id: call.id, status: !call.is_archived }
    });
    
    try {
      await updateCall(call.id, !call.is_archived);
    } catch (error) {
      console.log({error});
      dispatch({
        type: 'OPTIMISTIC_ARCHIVE',
        payload: { id: call.id, status: call.is_archived }
      });
    }
  };

  return (
    <Card 
      sx={{ p: 2, cursor: 'pointer' }}
      onClick={() => navigate(`/call/${call.id}`)}
      className={`${className} bg-red-900`}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <CallTypeIcon type={call.call_type} direction={call.direction} />
        
        <Stack flex={1}>
          <Typography variant="subtitle1">
            {call.direction === 'inbound' ? call.from : call.to}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {moment(call.created_at).format('MMM d, yyyy h:mm a')}
          </Typography>
        </Stack>
        
        <IconButton 
          onClick={handleArchive}
          color={call.is_archived ? 'secondary' : 'primary'}
        >
          <IoIosArchive />
        </IconButton>
      </Stack>
    </Card>
  );
});

export default CallCard;