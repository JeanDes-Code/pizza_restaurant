import React from 'react';
import { SectionTitle } from './../components';

const AboutUs = () => {
  return (
    <div className="bg-black w-full flex justify-center align-center p-20">
      <div className="flex flex-col w-[50%]">
        <SectionTitle title="About Us" height="4px" width="300px" />
        <p className="font-body text-xl text-white w-[45%] mt-2 leading-8 tracking-wider">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div>
        <img src="./assets/outside.png" />
      </div>
    </div>
  );
};

export default AboutUs;
