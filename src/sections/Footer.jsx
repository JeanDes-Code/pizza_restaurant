import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

import { PizzaPic, SectionTitle } from '../components';
import Copyright from './../components/Copyright';

const Footer = () => {
  return (
    <>
      <div className="bg-wood w-full flex flex-col items-center pb-20 ">
        <PizzaPic position="top" />{' '}
        <SectionTitle
          title="La Caravana"
          bold={true}
          height="4px"
          width="80%"
        />
        <div className="flex justify-center space-x-10 w-full mt-10 pb-20">
          <AiFillInstagram size={60} color="white" />
          <AiFillFacebook size={60} color="white" />
          <FaWhatsappSquare size={60} color="white" />
        </div>
      </div>{' '}
      <Copyright />
    </>
  );
};

export default Footer;
