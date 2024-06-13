import React from 'react';

const MenuItem = (props) => {
  const {
    menu: { name, photo, price },
  } = props;

  return (
    <div className="mb-6 shadow-md rounded-lg mx-4">
      <div className="relative">
        <img
          src={require(`../../assets/${photo}`)}
          alt={`${name}`}
          className="w-full h-42 object-cover"
        />
        <button className="flex absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-sm w-6 h-6 items-center justify-center">
          +
        </button>
      </div>
      <div className="flex flex-row items-center justify-between mx-2 mb-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <h3 className="text-gray-500">
          $ {price.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default MenuItem;
