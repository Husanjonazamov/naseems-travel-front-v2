"use client";
import React, { FC } from "react";
import Heading from "@/shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslations } from "use-intl";

export interface SectionHowItWorkProps {
  className?: string;
}

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ className = "" }) => {
  const t = useTranslations("travel");

  const data = [
    {
      id: 1,
      title: t("booking_title"),
      desc: t("booking_details"),
      youtubeUrl: "https://www.youtube.com/embed/W4YfDg-dKzk",
    },
    {
      id: 2,
      title: t("travel_checklist_title"),
      desc: t("travel_checklist"),
      youtubeUrl: "https://www.youtube.com/embed/ahy5o5nT4oI",
    },
    {
      id: 3,
      title: t("save_more_title"),
      desc: t("save_more"),
      youtubeUrl: "https://www.youtube.com/embed/QoaDkejcHSc",
    },
  ];

  return (
    <div
      className={`nc-SectionHowItWork ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc={t("keep_calm")}>
        {t("how_it_works")}
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
      <div className="md:hidden mt-12">
        <Swiper slidesPerView={1} spaceBetween={20} modules={[Pagination]}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center gap-6">
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
