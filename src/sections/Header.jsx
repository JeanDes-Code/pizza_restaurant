import React from 'react';

const Header = () => {
  return (
    <div className="bg-black flex justify-between items-center px-6 pt-4 pb-3">
      <div className="flex-1">
        <h1 className="text-white uppercase font-body font-semibold cursor-pointer">
          La Caravana
        </h1>
      </div>
      <div className="flex justify-between h-8">
        <a
          className="text-white mr-8 font-body uppercase hover:border-b border-gold"
          href="#home"
          title="Home"
        >
          {' '}
          Home{' '}
        </a>
        <a
          className="text-white mr-8 font-body uppercase hover:border-b border-gold"
          href="#about"
          title="About Us"
        >
          {' '}
          About Us{' '}
        </a>
        <a
          className="text-white mr-8 font-body uppercase hover:border-b border-gold"
          href="#menu"
          title="Menu"
        >
          {' '}
          Menu{' '}
        </a>
        <a
          className="text-white mr-8 font-body uppercase  hover:border-b border-gold"
          href="#contact"
          title="Contact"
        >
          {' '}
          Contact{' '}
        </a>
      </div>
    </div>
  );
};

export default Header;
