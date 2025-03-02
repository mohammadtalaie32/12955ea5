import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Layout = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <main className='w-[100%] lg:w-[30rem] h-[100%] lg:max-h-[50rem] overflow-auto shadow-lg rounded-xl'>
        <Header />
        <Outlet />
      </main>
    </div>
    
  );
};

export default Layout;
