import React from 'react';

const SectionTitle = ({ title, width, height, bold }) => (
  <div
    className={`flex flex-col justify-center ${
      title === 'About Us' ? 'items-start' : 'items-center'
    }`}
  >
    <h2
      className={`font-title ${
        bold ? 'font-bold' : 'font-normal'
      } uppercase text-white ${bold ? 'sm:text-6xl' : 'sm:text-5xl'} text-3xl `}
    >
      {title}
    </h2>
    <div
      className={`bg-gold hidden sm:block`}
      style={{ width, height, opacity: title === 'About Us' ? '0.6' : '1' }}
    />
    <div
      className={`bg-gold sm:hidden`}
      style={{
        width: '80%',
        height: '6px',
        opacity: title === 'About Us' ? '0.6' : '1',
      }}
    />
  </div>
);

export default SectionTitle;
