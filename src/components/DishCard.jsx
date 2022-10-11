import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center space-x-4 lg:w-6/12 relative p-2">
      <div className="w-full md:w-6/12">
        <img src={dish.img} alt={dish.name} className="w-[100%] h-[100%]" />
      </div>

      <div className="flex flex-col w-full md:w-6/12">
        <div className="flex justify-between">
          <h3 className="text-gold text-xl uppercase pb-5">{dish.name}</h3>
          <p className="text-gold text-xl md:absolute text- top-1 right-10">
            {dish.price}
          </p>
        </div>
        <p className="text-white text-lg"> {dish.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
