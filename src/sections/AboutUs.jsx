import React from 'react';
import { Button, SectionTitle } from './../components';

const AboutUs = () => {
  return (
    <div className="bg-black w-full flex justify-center align-center p-20">
      <div className="flex flex-col justify-between w-[50%] pt-5">
        <div>
          <SectionTitle title="About Us" height="9px" width="58%" />
          <p className="font-body text-xl text-white pt-6 leading-8 tracking-wider w-[58%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <Button title="Read More" />
      </div>
      <div className="pt-5">
        <img
          src="./assets/outside.png"
          alt="outside terrace"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
