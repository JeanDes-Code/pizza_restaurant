import React from 'react';

const SectionTitle = ({ title, width, height, bold }) => (
  <>
    <h2
      className={`font-title ${
        bold ? 'font-bold' : ''
      } uppercase text-white text-5xl`}
    >
      {title}
    </h2>
    <div className={`bg-gold`} style={{ width, height }} />
  </>
);

export default SectionTitle;
