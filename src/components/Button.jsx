import React from 'react';

const Button = ({ title, padding, CTA }) => {
  return (
    <div>
      <button
        className={`text-gold uppercase font-semibold border-gold border-2 ${
          padding ? padding : 'p-3'
        }`}
        onClick={() => {
          CTA ? console.log(CTA) : console.log('CE BOUTON NE FAIT RIEN');
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
