// ActivityFeed.jsx
import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useCalls } from '../contexts/CallsContext.js';
import { Stack, Typography } from '@mui/material';
import CallCard from './CallCard.jsx';
import ArchiveControls from './ArchiveControls.jsx';
import LoadingSkeleton from './LoadingSkeleton.jsx';
import EmptyState from './EmptyState.jsx';

const ActivityFeed = () => {
  const { state: { calls, loading } } = useCalls();

  const nodeRefs = useRef({});

  calls.forEach((call) => {
    if (!nodeRefs.current[call.id]) {
      nodeRefs.current[call.id] = React.createRef();
    }
  });

  const activeCalls = calls.filter(call => !call.is_archived);

  return (
    <Stack spacing={3} p={3}>
      <Typography variant="h4" gutterBottom>
        Activity Feed
      </Typography>
      
      <ArchiveControls onArchiveAll={() => { /* handle bulk archive logic */ }} />
      
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <TransitionGroup>
          {activeCalls.map(call => (
            <CSSTransition
              key={call.id}
              timeout={300}
              classNames="call"
              nodeRef={nodeRefs.current[call.id]}
            >
              <div ref={nodeRefs.current[call.id]}>
                <CallCard call={call} className="mb-2" />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      
      {!loading && activeCalls.length === 0 && (
        <EmptyState message="No active calls found" />
      )}
    </Stack>
  );
};

export default ActivityFeed;
