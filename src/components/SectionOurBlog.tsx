"use client";

import React from "react";
import BlogCard from "./SelectBlogcard";
import { blogdata } from "@/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslations } from "use-intl";

const SelectBlog: React.FC = () => {
  const t = useTranslations("travel");
  return (
    <div className="w-full py-10 px-4">
      <div className="text-left mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          {t("latest_blog_posts")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-md mt-4 max-w-2xl">
          {t("latest_news_desc")}
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        autoHeight={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogdata?.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="h-full">
              <BlogCard
                image={blog.image}
                title={blog.title}
                description={blog.desc}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SelectBlog;
