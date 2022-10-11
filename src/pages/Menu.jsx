import React from 'react';
import { Header, MenuSection } from '../sections';
import Copyright from './../components/Copyright';

const Menu = () => {
  return (
    <div className=" bg-black">
      <div>
        <Header />
        <MenuSection />
      </div>

      <Copyright />
    </div>
  );
};

export default Menu;
