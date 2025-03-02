import React from 'react';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { fetchCalls } from '../services/api';

const CallsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CALLS':
      return { ...state, calls: action.payload, loading: false };
    case 'UPDATE_CALL':
      return {
        ...state,
        calls: state.calls.map(call => 
          call.id === action.payload.id ? action.payload : call
        )
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'BULK_UPDATE_CALLS':
      return { ...state, calls: action.payload };
    case 'OPTIMISTIC_ARCHIVE':
      return {
        ...state,
        calls: state.calls.map(call =>
          call.id === action.payload.id 
            ? { ...call, is_archived: action.payload.status }
            : call
        )
      };
    default:
      return state;
  }
};

export const CallsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    calls: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchCalls();
        dispatch({ type: 'SET_CALLS', payload: data });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };
    loadData();
  }, []);

  return (
    <CallsContext.Provider value={{ state, dispatch }}>
      {children}
    </CallsContext.Provider>
  );
};

export const useCalls = () => useContext(CallsContext);