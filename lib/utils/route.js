// lib/utils/routes.js
import { IoMdCall, IoIosArchive, IoIosSettings } from 'react-icons/io';

export const routes = [
  {
    name: 'active',
    title: 'Active',
    path: '/',
    icon: IoMdCall,
  },
  {
    name: 'archived',
    title: 'Archived',
    path: '/archived',
    icon: IoIosArchive,
  },
  {
    name: 'reset',
    title: 'Reset',
    path: '/reset',
    icon: IoIosSettings,
  },
];