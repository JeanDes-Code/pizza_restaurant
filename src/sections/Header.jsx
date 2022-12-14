import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="bg-black flex justify-between items-center px-6 pt-4 pb-3">
        <div className="flex-1">
          <h1 className="text-white uppercase font-body font-semibold cursor-pointer">
            <a
              className="text-white mr-8 font-body uppercase"
              href="/"
              title="Home"
            >
              <Link to="/"> La Caravana </Link>
            </a>
          </h1>
        </div>
        <div className="hidden md:flex justify-between h-8">
          <a
            className="text-white mr-8 font-body uppercase hover:border-b border-gold"
            href="/"
            title="Home"
          >
            <Link to="/"> Home </Link>
          </a>

          <a
            className="text-white mr-8 font-body uppercase hover:border-b border-gold"
            href="#aboutus"
            title="About Us"
          >
            {' '}
            About Us{' '}
          </a>
          <a
            className="text-white mr-8 font-body uppercase hover:border-b border-gold"
            href="/menu"
            title="Menu"
          >
            <Link to="/menu"> Menu </Link>
          </a>
          <a
            className="text-white mr-8 font-body uppercase  hover:border-b border-gold"
            href="#"
            title="Contact"
          >
            <Link
              to="/"
              className="text-white mr-8 font-body uppercase  hover:border-b border-gold"
            >
              {' '}
              Contact{' '}
            </Link>
          </a>
        </div>
        <div className="block md:hidden ">
          <button
            type="button"
            onClick={() => {
              console.log(openMenu);
              setOpenMenu((prevState) => {
                setOpenMenu(!prevState);
              });
            }}
          >
            <GiHamburgerMenu
              size={20}
              color="white"
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="flex fixed justify-between align-center right-0 top-0 w-6/12 p-10 z-50 bg-black">
          <div className="flex flex-col space-y-4">
            <a
              className="text-white mr-8 font-body uppercase hover:border-b border-gold"
              href="/"
              title="Home"
            >
              <Link to="/"> Home </Link>
            </a>

            <a
              className="text-white mr-8 font-body uppercase hover:border-b border-gold"
              href="#aboutus"
              title="About Us"
            >
              {' '}
              About Us{' '}
            </a>
            <a
              className="text-white mr-8 font-body uppercase hover:border-b border-gold"
              href="/menu"
              title="Menu"
            >
              <Link to="/menu"> Menu </Link>
            </a>
            <a
              className="text-white mr-8 font-body uppercase  hover:border-b border-gold"
              href="#"
              title="Contact"
            >
              <Link
                to="/"
                className="text-white mr-8 font-body uppercase  hover:border-b border-gold"
              >
                {' '}
                Contact{' '}
              </Link>
            </a>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                console.log(openMenu);
                setOpenMenu((prevState) => {
                  setOpenMenu(!prevState);
                });
              }}
            >
              <AiFillCloseCircle
                size={20}
                color="white"
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
