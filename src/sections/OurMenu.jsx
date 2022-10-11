import React from 'react';
import { Button, SectionTitle } from '../components';

const OurMenu = () => {
  return (
    <>
      <div className="bg-black w-full flex flex-col justify-center sm:pt-10 pb-20 sm:px-20 p-4">
        <div className="flex flex-col items-center w-full mt-20 pt-20">
          <SectionTitle title="Our Menu" height="9px" width="150%" />
          <p className="font-body text-xl text-white text-center pt-3 leading-8 tracking-wider pb-20 sm:px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="flex md:space-x-8 items-center md:flex-row flex-col">
          <img
            src="./assets/kitchen1.png"
            alt="kitchen view-1"
            className="md:w-6/12 w-full mb-6 md:mb-0"
          />
          <img
            src="./assets/kitchen2.png"
            alt="kitchen view-2"
            className="md:w-6/12 w-full"
          />
        </div>
        <div className="w-full flex justify-center items-center pt-20">
          <Button title="MENU" padding="px-10 py-4" />
        </div>
      </div>{' '}
    </>
  );
};

export default OurMenu;
