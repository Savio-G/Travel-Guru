import React from 'react';
import Header1 from '../SharedPages/Header1';
import { Outlet } from 'react-router-dom';

const Layout1 = () => {
  return (
    <div>
      <Header1></Header1>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout1;