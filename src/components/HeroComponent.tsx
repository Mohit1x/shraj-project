"use client";

import { heroProductImages } from "@/constants/constant";
import type { RefObject } from "react";
import { FaArrowDown } from "react-icons/fa";

type HeroComponentRef = {
  prodRef: RefObject<HTMLDivElement | null>;
};

export default function HeroComponent({ prodRef }: HeroComponentRef) {
  return (
    <div className="min-h-[75vh] bg-gray-50 flex items-center justify-center px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Explore Premium{" "}
              <span className="text-[#2E2F91]">Scientific Equipment</span>
            </h1>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Explore our range of cutting-edge scientific equipment and
            experience the difference of partnering with a dedicated team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              className="flex items-center gap-3 bg-[#2E2F91] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              onClick={() =>
                prodRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FaArrowDown size={16} />
              View Products
            </button>

            <button className="text-blue-600 hover:text-blue-700 font-semibold px-4 py-4 transition-colors duration-300">
              Explore Products →
            </button>
          </div>
        </div>

        {/* Right Content - Product Images Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-6 max-w-lg ml-auto">
            {/* Top Left - Large Image */}
            <div className="col-span-2 relative group">
              <div className="bg-[#2E2F91] rounded-3xl p-8 shadow-lg group-hover:bg-white hover:shadow-xl hover:scale-[1.05] transition-all duration-500 relative overflow-hidden cursor-pointer h-64">
                <img
                  src={
                    heroProductImages[0].img ||
                    `/placeholder.svg?height=200&width=300`
                  }
                  alt={heroProductImages[0].img || "Scientific equipment"}
                  className="w-full h-48 object-contain"
                />

                {/* Decorative dot */}
                <div className="absolute top-4 right-4 w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full"></div>

                {/* Text from bottom to center on hover */}
                <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[150px] group-hover:translate-y-[0%] text-gray-100 bg-[#2E2F91] w-fit p-2 rounded transition-all duration-500 text-lg font-semibold text-center">
                  Industrial Ovens
                </h1>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="relative group">
              <div className="bg-[#2E2F91] rounded-3xl p-6 group-hover:bg-[#2E2F91] shadow-lg hover:shadow-xl hover:scale-[1.05] transition duration-500 relative overflow-hidden cursor-pointer">
                <img
                  src={
                    heroProductImages[1].img ||
                    `/placeholder.svg?height=150&width=150`
                  }
                  alt={heroProductImages[1].img || "Scientific equipment"}
                  className="w-full h-32 object-contain"
                />
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="relative group">
              <div className="bg-[#2E2F91] rounded-3xl group-hover:bg-[#2E2F91] p-6 shadow-lg hover:shadow-xl hover:scale-[1.05] transition duration-500 relative overflow-hidden cursor-pointer">
                <img
                  src={
                    heroProductImages[2].img ||
                    `/placeholder.svg?height=150&width=150`
                  }
                  alt={heroProductImages[2].img || "Scientific equipment"}
                  className="w-full h-32 object-contain"
                />
                {/* Decorative dot */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute -top-8 -right-8 hidden md:block md:w-20 md:h-20 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-100 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
