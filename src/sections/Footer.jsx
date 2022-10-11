import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

import { PizzaPic, SectionTitle } from '../components';

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
      <div className="py-8">
        <p className="text-white text-center text-2xl">
          Tous droits réservés © LA CARAVANA 2022 | Figma DESIGN:{' '}
          <a href="https://www.figma.com/@mezora" title="MEZORA">
            MEZORA
          </a>{' '}
          | Intégration: Jean Desauw{' '}
        </p>
      </div>
    </>
  );
};

export default Footer;
