import { IoMdCall, IoIosArchive, IoIosSettings } from 'react-icons/io';

export const routes = [
  {
    name: 'Active Calls',
    title: 'Active',
    path: '/',
    icon: IoMdCall,
  },
  {
    name: 'Archived',
    title: 'Archived',
    path: '/archived',
    icon: IoIosArchive,
  },
  {
    name: 'Reset',
    title: 'Reset',
    path: '/reset',
    icon: IoIosSettings,
  },
];