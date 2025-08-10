import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const SelectTouringCard = ({ data }: Props) => {
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

        {/* Footer */}
        <div className="mt-auto">
          <p className="text-sm font-medium text-blue-900 mb-1">
            {data.days} days from
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-3">£{data.price}</p>
          <div className="flex justify-end">
             <Link
                href={"/listing-stay-detail"}
                className="bg-blue-900 hover:bg-blue-950 text-white py-3 px-6 rounded-lg text-sm w-[50%] font-bold">
                  Explore
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTouringCard;