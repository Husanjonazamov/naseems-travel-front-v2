"use client";

import React from "react";
import BlogCard from "./SelectBlogcard";
import { blogdata } from "@/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SelectBlog: React.FC = () => {
  return (
    <div className="w-full py-6 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogdata.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              image={blog.image}
              title={blog.title}
              description={blog.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SelectBlog;
