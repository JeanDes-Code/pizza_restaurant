import React from 'react';
import { PizzaPic } from '../components';

const Hero = () => {
  return (
    <>
      <div className="bg-wood w-full relative flex flex-col justify-end">
        <div className="flex flex-col relative z-10 items-center w-full mt-20 pt-20">
          <h2 className="font-title font-bold uppercase text-white text-4xl border-b-2 border-gold">
            La Caravana
          </h2>
          <p className="font-body text-white text-center w-[45%] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec
            turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
          </p>
        </div>
        <div className="h-[100vh] absolute right-0 left-0 bottom-0 z-0 bg-gradient-to-t from-black" />
        <div className="z-10 relative">
          {' '}
          <PizzaPic position="bottom" />{' '}
        </div>
      </div>{' '}
    </>
  );
};

export default Hero;
