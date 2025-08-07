"use client";

import React from "react";
import clsx from "clsx";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + " ...";
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <div
      className={clsx(
        "w-full max-w-sm rounded-xl overflow-hidden transition duration-300",
        "dark:shadow-md",
        "h-[500px] flex flex-col" // Cardga balandlik berildi va column ichida joylashdi
      )}
    >
      <div className="h-[240px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 pt-18 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {truncateText(description, 50)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
