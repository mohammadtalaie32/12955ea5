import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchCalls = () => API.get('/activities');
export const fetchCallDetails = (id) => API.get(`/activities/${id}`);
export const updateCall = (id, isArchived) => 
  API.patch(`/activities/${id}`, { is_archived: isArchived });
export const resetCalls = () => API.patch('/reset');