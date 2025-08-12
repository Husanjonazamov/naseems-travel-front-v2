import React from 'react';
import Image from 'next/image';

type Props = {
  data: {
    title: string;
    description: string;
    points: string[];
    days: number;
    price: string;
    image: string;
  };
};

// ✂️ 50 ta so‘zdan oshsa, qisqartir
const truncateText = (text: string, maxWords: number) => {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const BlogCard = ({ data }: Props) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden flex flex-col h-full min-h-[520px]">
      
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={data.image}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-sky-800 mb-3">{data.title}</h3>
        
        <p className="text-gray-800 text-[15px] mb-3 leading-relaxed">
          {truncateText(data.description, 50)}
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-5 text-[15px] space-y-1">
          {data.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCard;