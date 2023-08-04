import React from 'react';
import Header1 from '../SharedPages/Header1';
import { Outlet } from 'react-router-dom';

const Layout1 = () => {
  return (
    <div>
      <Header1></Header1>

      <div className="mt-28">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default Layout1;