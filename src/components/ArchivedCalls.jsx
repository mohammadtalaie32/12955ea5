import React, { useRef } from 'react';
import { useCalls } from '../contexts/CallsContext.js';
import { Stack, Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CallCard from './CallCard.jsx';
import LoadingSkeleton from './LoadingSkeleton.jsx';
import EmptyState from './EmptyState.jsx';

const ArchivedCalls = () => {
  const { state: { calls, loading } } = useCalls();
  const archivedCalls = calls.filter(call => call.is_archived);

  const nodeRefs = useRef({});

  archivedCalls.forEach((call) => {
    if (!nodeRefs.current[call.id]) {
      nodeRefs.current[call.id] = React.createRef();
    }
  });

  return (
    <Stack spacing={3} p={3} className='space-y-2'>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <TransitionGroup>
          {archivedCalls.map(call => (
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
      
      {!loading && archivedCalls.length === 0 && (
        <EmptyState message="No archived calls found" />
      )}
    </Stack>
  );
};

export default ArchivedCalls;