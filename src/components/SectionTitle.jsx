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
      } uppercase text-white ${bold ? 'text-6xl' : 'text-5xl'} `}
    >
      {title}
    </h2>
    <div
      className={`bg-gold`}
      style={{ width, height, opacity: title === 'About Us' ? '0.6' : '1' }}
    />
  </div>
);

export default SectionTitle;
