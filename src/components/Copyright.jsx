import React from 'react';

const Copyright = () => {
  return (
    <footer className="py-8 flex flex-col justify-center items-center">
      <div
        className={`bg-gold `}
        style={{
          width: '80%',
          height: '3px',
          opacity: '0.6',
        }}
      />
      <p className="text-white text-center text-2xl">
        Tous droits réservés © LA CARAVANA 2022 | Figma DESIGN:{' '}
        <a href="https://www.figma.com/@mezora" title="MEZORA">
          MEZORA
        </a>{' '}
        | Intégration: Jean Desauw{' '}
      </p>
    </footer>
  );
};

export default Copyright;
