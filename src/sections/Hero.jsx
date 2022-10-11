import React from 'react';
import { PizzaPic, SectionTitle } from '../components';

const Hero = () => {
  return (
    <>
      <div className="bg-wood w-full relative flex flex-col justify-end">
        <div className="flex flex-col relative z-10 items-center w-full mt-0 sm:mt-20 sm:pt-20 p-4">
          <SectionTitle
            title="La Caravana"
            bold={true}
            height="4px"
            width="310px"
          />
          <p className="font-body text-xl text-white text-center sm:w-[45%] pt-3 leading-8 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec
            turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
          </p>
        </div>
        <div className="h-full absolute right-0 left-0 bottom-0 z-0 bg-gradient-to-t from-black" />
        <div className="z-10 relative">
          {' '}
          <PizzaPic position="bottom" />{' '}
        </div>
      </div>{' '}
    </>
  );
};

export default Hero;
