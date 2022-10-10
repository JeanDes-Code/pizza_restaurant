import React from 'react';

const PizzaPic = ({ position }) => {
  if (position === 'bottom') {
    return (
      <div className="flex justify-center items-center mt-20">
        <img src="./assets/pizza.png" />
      </div>
    );
  } else if (position === 'top') {
    return (
      <div className="flex justify-center items-center">
        <img src="./assets/pizza-b.png" />
      </div>
    );
  }
};

export default PizzaPic;
