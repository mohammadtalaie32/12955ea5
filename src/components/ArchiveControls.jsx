// src/components/ArchiveControls.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCalls } from '../contexts/CallsContext';
import { Button, Stack } from '@mui/material';
import { IoIosArchive } from 'react-icons/io';
import { GrUndo } from "react-icons/gr";
import { updateCall } from '../services/api';

const ArchiveControls = () => {
  const { state: { calls }, dispatch } = useCalls();
  const location = useLocation();
  const currentTab = location.pathname === '/archived' ? 'archived' : 'all';

  const handleBulkArchive = async (archive) => {
    try {
      const callsToUpdate = calls.filter(call =>
        archive ? !call.is_archived : call.is_archived
      );

      await Promise.all(
        callsToUpdate.map(call =>
          updateCall(call.id, archive).then(updatedCall =>
            dispatch({ type: 'UPDATE_CALL', payload: updatedCall })
          )
        )
      );
    } catch (error) {
    }
  };

  return (
    <Stack direction="row" spacing={2} mb={3}>
      {currentTab === 'all' && (
        <Button 
          variant="contained"
          onClick={() => handleBulkArchive(true)}
          startIcon={<IoIosArchive />}
        >
          Archive All
        </Button>
      )}

      {currentTab === 'archived' && (
        <Button
          variant="outlined"
          onClick={() => handleBulkArchive(false)}
          startIcon={<GrUndo />}
        >
          Unarchive All
        </Button>
      )}
    </Stack>
  );
};

export default ArchiveControls;
