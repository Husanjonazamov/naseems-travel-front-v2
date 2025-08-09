import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import TestimonialCarousel from "@/components/TestimailCarusel";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurBlog from "@/components/SectionOurBlog";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import SectionBlogCarousel from "@/components/SectionOurBlog";
import { DEMO_CATS, DEMO_CATS_2 } from '@/data';
import PopularTour from "@/components/PopularTour";
import SoloTouring from "@/components/SoloTour";
import SelectTouring from "@/components/SelectTours";



function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS} />
        <SelectTouring />

        <SectionOurBlog />

        {/* <SectionGridFeaturePlaces cardType="card2" /> */}

        <SectionHowItWork />

        <div className="relative py-16">
        <PopularTour />
        </div>

        {/* <SectionSubscribe2 /> */}

        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}
        <TestimonialCarousel />

        <SoloTouring />
        {/* <SectionGridCategoryBox /> */}

        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}


        {/* <SectionVideos /> */}

        {/* <div className="relative py-16"> */}
          {/* <BackgroundSection /> */}
          {/* <SectionClientSay /> */}
        {/* </div> */}
      </div>
    </main>
  );
}

export default PageHome;
