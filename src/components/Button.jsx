import React from 'react';

const Button = ({ title, padding }) => {
  return (
    <div>
      <button
        className={`text-gold uppercase font-semibold border-gold border-2 ${
          padding ? padding : 'p-3'
        }`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
