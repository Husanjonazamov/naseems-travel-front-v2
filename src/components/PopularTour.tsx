'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SectionHeading from './SectionHeading';
import PopularTouringCard from './PopularTourCard';
import { soloTouringData } from '@/data';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const PopularTouring = () => {
  const t = useTranslations("travel")
  return (
    <div className="pt-20 pb-20 text-white">
      {/* Section Heading with motion */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading heading={t("new_solo_touring")} />
      </motion.div>

      {/* Desktop Grid */}
      <motion.div
        className="hidden md:grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {soloTouringData.map((data, index) => (
          <motion.div key={index} variants={itemVariant} className="h-full">
            <PopularTouringCard data={data} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Carousel */}
      <motion.div
        className="md:hidden mt-10 px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={false}
          showDots={true}
          renderDotsOutside={true}
        >
          {soloTouringData.map((data, index) => (
            <div key={index} className="px-2 h-full">
              <PopularTouringCard data={data} />
            </div>
          ))}
        </Carousel>
      </motion.div>

      {/* Explore More Button */}
      <motion.div
        className="mt-10 flex justify-center items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
      <Link
          href="/tour"
          className="bg-blue-900 text-white w-[86%] sm:w-[300px] text-lg sm:text-base px-4 sm:px-6 py-3 sm:py-4 font-bold rounded-xl hover:shadow-lg transition-all hover:bg-blue-950 text-center block"
        >
        {t("explore_more")}
      </Link>
      </motion.div>
    </div>
  );
};

export default PopularTouring;