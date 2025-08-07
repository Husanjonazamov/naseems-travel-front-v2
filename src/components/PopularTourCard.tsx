"use client";

import React from "react";

interface PopularTourCardProps {
  image: string;
  title: string;
  desc: string;
  price: string;
  buttonText?: string;
}

const PopularTourCard: React.FC<PopularTourCardProps> = ({
  image,
  title,
  desc,
  price,
  buttonText = "Explore More",
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden transition duration-300 hover:shadow-2xl">
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {desc}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          ${price}
        </p>
        <div className="flex justify-end">
            <button className="text-current font-bold px-4 py-2 hover:text-blue-900 dark:hover:text-white ">
                {buttonText}
            </button>
        </div>
      </div>
    </div>
  );
};

export default PopularTourCard;
