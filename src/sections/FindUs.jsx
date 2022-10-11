import React from 'react';
import { SectionTitle } from './../components';

const FindUs = () => {
  return (
    <div className="bg-black w-full flex flex-col justify-center align-center p-20">
      <div className="justify-center items-center flex-col pt-5 text-center w-full">
        <SectionTitle title="Find Us" height="9px" width="33%" />
      </div>
      <div className="flex justify-between lg:flex-row flex-col-reverse items-center mt-20">
        <div className="lg:w-6/12 w-full">
          <img src="./assets/map.png" alt="map" className="w-full h-full" />
        </div>
        <div className="pt-6 lg:w-6/12 w-full mb-6 lg:ml-20 ">
          <p className="font-body text-xl text-white leading-8 tracking-wider">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            ATTENDANCE <br />
            Monday to Sunday 12:00pm - 8:00pm
            <br />
            <br />
            DELIVERY <br />
            Monday - Sunday 12:00pm - 8:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
