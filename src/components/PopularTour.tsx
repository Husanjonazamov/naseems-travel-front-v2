"use client";

import React from "react";
import PopularTourCard from "./PopularTourCard";



export const tours = [
  {
    id: "1",
    title: "Nature House",
    desc: "An in-depth exploration of four countries in an undiscovered corner of Europe. Visit cosmopolitan cities and travel through stunning natural landscapes. You will spend time in some of the most famous cities in Eastern Europe, all of them having lots of historical sites, vibrant bars and restaurants for you to explore.",
    price: "289",
    image:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
 
  {
    id: "7",
    desc: "An in-depth exploration of four countries in an undiscovered corner of Europe. Visit cosmopolitan cities and travel through stunning natural landscapes. You will spend time in some of the most famous cities in Eastern Europe, all of them having lots of historical sites, vibrant bars and restaurants for you to explore.",

    title: "Wooden house",
    price: "389",

    image:
      "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "8",
    price: "269",

    title: "Wooden Dome",
    desc: "An in-depth exploration of four countries in an undiscovered corner of Europe. Visit cosmopolitan cities and travel through stunning natural landscapes. You will spend time in some of the most famous cities in Eastern Europe, all of them having lots of historical sites, vibrant bars and restaurants for you to explore.",

    image:
      "https://images.pexels.com/photos/9039238/pexels-photo-9039238.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];


const PopularTour: React.FC = () => (
  <section className="py-12 px-4 sm:px-8 lg:px-16 ">
    <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
      Most Popular Solo Travel Destinations
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours.map((tour, idx) => (
        <PopularTourCard key={idx} {...tour} />
      ))}
    </div>
  </section>
);

export default PopularTour;
