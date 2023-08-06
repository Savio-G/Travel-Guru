import React, { createContext, useState } from 'react';
import Header1 from '../SharedPages/Header1';
import { Outlet } from 'react-router-dom';
export const BgProvider = createContext(null)
const Layout1 = () => {
  const [bgImage, setbgImage] = useState({})
  const bgInfo = {
    bgImage,
    setbgImage
  }
  return (
    <BgProvider.Provider value={bgInfo}>
      <div style={{
        backgroundImage: `url(${bgImage?.image})`,
        filter: `brightness(40%) blur(2px)`,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}>
      </div>
      <Header1></Header1>
      <Outlet></Outlet>

    </BgProvider.Provider >
  );
};

export default Layout1;