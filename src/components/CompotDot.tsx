import React from 'react';

const CustomDot = ({ onClick, active }: { onClick?: () => void; active?: boolean }) => {
  return (
    <button
      onClick={onClick}
      className={`w-4 h-4 rounded-full mx-1 focus:outline-none ${
        active ? "bg-blue-600" : "bg-gray-400"
      }`}
      aria-label="carousel-dot"
    />
  );
};

export default CustomDot;
