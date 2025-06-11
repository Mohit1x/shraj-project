"use client";

import HeroComponent from "@/components/HeroComponent";
import Products from "@/components/Products";
import { useRef } from "react";

import "swiper/css";

import ImageSlider from "@/components/ImageSlider";
import FeaturesSection from "@/components/FeaturedSection";
import HomeProductSections from "@/components/HomeProductSections";
import { homeCategorySectionData } from "@/constants/constant";

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-gray-100">
      <HeroComponent prodRef={productsRef} />

      <div className="flex flex-col gap-10">
        <FeaturesSection />
        <div className="w-full max-w-7xl flex flex-col mx-auto my-10 PX-4 gap-20">
          <div className="flex flex-col gap-10">
            {homeCategorySectionData.map((data) => (
              <HomeProductSections
                key={data.title}
                title={data.title}
                desc={data.des}
                img={data.img}
              />
            ))}
          </div>
        </div>
        <div className="bg-white py-12 sm:py-16 mb-20">
          <div
            className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
            ref={productsRef}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-snug break-words">
                Our Products
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-md break-words">
                Discover our range of high-quality industrial products.
              </p>
            </div>
            <Products />
          </div>
        </div>
        <div className="w-full py-10">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
