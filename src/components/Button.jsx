import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, padding }) => {
  if (title === 'MENU') {
    return (
      <div>
        <button
          className={`text-gold uppercase font-semibold border-gold border-2 ${
            padding ? padding : 'p-3'
          }`}
        >
          <Link to="/menu"> Menu </Link>
        </button>
      </div>
    );
  }

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
