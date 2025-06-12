"use client";

import HeroComponent from "@/components/HeroComponent";
import Products from "@/components/Products";
import { useRef } from "react";

import "swiper/css";

import ImageSlider from "@/components/ImageSlider";
import FeaturesSection from "@/components/FeaturedSection";

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col gap-10 md:gap-15 xl:gap-20">
      <div>
        <div className="w-full">
          <section className="w-full">
            <HeroComponent />
          </section>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 md:gap-5 text-center px-4">
        <div>
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
            Different Types of Industrial Products,
          </h1>
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-black font-nunito">
            Including Industrial Ovens
          </h1>
        </div>
        <p className="text-xs md:text-md lg:text-lg text-slate-500 font-semibold font-nunito max-w-3xl">
          Explore a wide range of industrial products tailored for efficiency
          and performance, including high-quality industrial ovens designed for
          precision and durability.
        </p>
      </div>

      <FeaturesSection />

      <div className="flex flex-col gap-10">
        <div className="bg-white mb-20">
          <div
            className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
            ref={productsRef}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-snug break-words font-nunito">
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
