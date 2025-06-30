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
    <div className="flex flex-col gap-15 md:gap-16 xl:gap-16">
      <section className="w-full">
        <HeroComponent />
      </section>

      <section className="flex flex-col items-center justify-center gap-4 text-center px-4 md:px-6 lg:px-8">
        <div>
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-semibold font-nunito">
            Different Types of Industrial Products,
          </h1>
          <h1 className="text-lg md:text-2xl lg:text-4xl text-blue-900 font-semibold font-nunito">
            Including Industrial Ovens
          </h1>
        </div>
        <p className="text-xs md:text-md lg:text-lg text-slate-500 font-archivo max-w-3xl">
          Explore a wide range of industrial products tailored for efficiency
          and performance, including high-quality industrial ovens designed for
          precision and durability.
        </p>
      </section>

      <section className="w-full">
        <FeaturesSection />
      </section>

      <section className="flex flex-col gap-15">
        <div className="text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl text-[#1C398E] leading-snug break-words font-bold font-nunito">
            Our Products
          </h2>
          <div className="h-[5px] w-[10%] bg-[#1E2069] mx-auto" />
        </div>
        <div className="bg-gray-200 py-8">
          <div
            className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8"
            ref={productsRef}
          >
            <Products />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-15">
        <div className="text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl text-[#1C398E] leading-snug break-words font-bold font-nunito">
            Certifications & Affiliations
          </h2>
          <div className="h-[5px] w-[10%] bg-[#1E2069] mx-auto" />
        </div>
        <div className="w-full py-8 bg-[#E5E7EB]">
          <ImageSlider />
        </div>
      </section>
    </div>
  );
}
