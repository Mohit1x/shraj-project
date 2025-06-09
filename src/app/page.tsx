"use client";

import HeroComponent from "@/components/HeroComponent";
import Products from "@/components/Products";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";

import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
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
            {
            homeCategorySectionData.map((data)=>(
              <HomeProductSections key={data.title} title={data.title} desc={data.des} img={data.img}/>
            ))
          }
        </div>
          <div className="flex items-center justify-between px-2 lg:px-0">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
              Some Of Our Products
            </h1>
            <Link href={"/all-products"}>
              <button className="bg-[#2E2F91] hover:bg-blue-600 transition duration-300 py-1 md:py-2 px-4 rounded-full flex items-center gap-2 text-md text-white cursor-pointer font-semibold">
                view all
                <span>
                  <FaArrowRightLong size={14} />
                </span>
              </button>
            </Link>
          </div>
          <div ref={productsRef}>
            <Products />
          </div>
          <div className="w-full py-10">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
