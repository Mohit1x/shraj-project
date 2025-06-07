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
              <span className="text-blue-600">Scientific Equipment</span>
            </h1>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Explore our range of cutting-edge scientific equipment and
            experience the difference of partnering with a dedicated team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
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
            <div className="col-span-2 relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <img
                  src={
                    heroProductImages[0] ||
                    `/placeholder.svg?height=200&width=300`
                  }
                  alt={heroProductImages[0] || "Scientific equipment"}
                  className="w-full h-48 object-contain"
                />
                {/* Decorative dot */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <img
                  src={
                    heroProductImages[1] ||
                    `/placeholder.svg?height=150&width=150`
                  }
                  alt={heroProductImages[1] || "Scientific equipment"}
                  className="w-full h-32 object-contain"
                />
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <img
                  src={
                    heroProductImages[2] ||
                    `/placeholder.svg?height=150&width=150`
                  }
                  alt={heroProductImages[2] || "Scientific equipment"}
                  className="w-full h-32 object-contain"
                />
                {/* Decorative dot */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-100 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
