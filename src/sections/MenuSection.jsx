import React, { useEffect, useState } from 'react';
import { DishCard, SectionTitle } from '../components';
import { dishes } from './../utils/data';

const MenuSection = () => {
  const [category, setCategory] = useState('All');
  const [dishList, setDishList] = useState(dishes);

  const filterSearch = (category) => {
    setCategory(category);
    if (category === 'All') {
      setDishList(dishes);
    } else {
      setDishList(dishes.filter((dish) => dish.category === category));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100%]">
      <SectionTitle title="Our Menu" width="30%" height="6px" />
      <div className="flex space-x-6 items-center justify-center p-20 overflow-x-auto w-full">
        <h2
          onClick={() => filterSearch('All')}
          className={`uppercase cursor-pointer font-body text-2xl ${
            category === 'All' ? 'text-gold' : 'text-white'
          }  hover:border-b border-gold`}
        >
          All
        </h2>
        <h2
          onClick={() => filterSearch('Starters')}
          className={`uppercase cursor-pointer font-body text-2xl ${
            category === 'Starters' ? 'text-gold' : 'text-white'
          }  hover:border-b border-gold`}
        >
          Starters
        </h2>
        <h2
          onClick={() => filterSearch('Main')}
          className={`uppercase cursor-pointer font-body text-2xl ${
            category === 'Main' ? 'text-gold' : 'text-white'
          }  hover:border-b border-gold`}
        >
          Main
        </h2>
        <h2
          onClick={() => filterSearch('Drinks')}
          className={`uppercase cursor-pointer font-body text-2xl ${
            category === 'Drinks' ? 'text-gold' : 'text-white'
          }  hover:border-b border-gold`}
        >
          Drinks
        </h2>
        <h2
          onClick={() => filterSearch('Promotion')}
          className={`uppercase cursor-pointer font-body text-2xl ${
            category === 'Promotion' ? 'text-gold' : 'text-white'
          }  hover:border-b border-gold`}
        >
          Promotion
        </h2>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap p-10 space-y-2">
        {dishList.length <= 0 && (
          <p className="text-white text-center text-2xl">
            Aucun produit trouvé dans la catégorie{' '}
            <strong className="text-gold">{category}</strong> ...
          </p>
        )}
        {dishList?.map((dish) => (
          <DishCard dish={dish} key={dish.id} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
