"use client";
import React, { FC } from "react";
import Heading from "@/shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    youtubeUrl: string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    title: "Understand how booking works in detail with practical examples",
    desc:
      "Booking a trip is easier than ever. First, choose your destination and dates. Then, explore various accommodation options available...",
    youtubeUrl: "https://www.youtube.com/embed/W4YfDg-dKzk",
  },
  {
    id: 2,
    title: "Manage your travel with a smart checklist of essential things",
    desc:
      "A smart checklist can transform your travel experience. Begin by listing your travel documents...",
    youtubeUrl: "https://www.youtube.com/embed/ahy5o5nT4oI",
  },
  {
    id: 3,
    title: "Save more by using exclusive travel discounts and deals",
    desc:
      "Traveling doesn’t have to be expensive. You can save significantly by using exclusive deals...",
    youtubeUrl: "https://www.youtube.com/embed/QoaDkejcHSc",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc="Keep calm & travel on">
        How it works
      </Heading>

      {/* Desktop & Tablet */}
      <div className="hidden md:flex flex-col gap-16 mt-12">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Matn */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Video */}
            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={item.youtubeUrl}
                  title={`How it works video ${item.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
     {/* Mobile Carousel */}
<div className="md:hidden mt-12">
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    // pagination={{ clickable: true }}
    modules={[Pagination]}
  >
    {data.map((item) => (
      <SwiperSlide key={item.id}>
        <div className="flex flex-col items-center gap-6">
          {/* Video birinchi */}
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={item.youtubeUrl}
              title={`How it works video ${item.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Title va desc videodan keyin */}
          <h3 className="text-xl font-semibold text-center mt-4">
            {item.title}
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm text-center leading-relaxed px-4">
            {item.desc}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default SectionHowItWork;
