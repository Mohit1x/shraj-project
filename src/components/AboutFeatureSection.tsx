"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { features } from "@/constants/constant";

export default function AboutFeatureSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            className="text-white"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="text-center text-white flex flex-col items-center justify-center"
                >
                  <div className="flex justify-center mb-4">
                    <feature.icon size={48} className="text-[#d3686d]" />
                  </div>
                  <h3 className="text-lg mb-2 tracking-wide font-semibold font-nunito text-[#d3686d]">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed font-semibold font-nunito w-[70%] mx-auto">
                    {feature.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center text-white flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon size={48} className="text-[#d3686d]" />
                </div>
                <h3 className="text-lg mb-2 tracking-wide font-semibold font-nunito text-[#d3686d]">
                  {feature.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed font-semibold font-nunito w-[80%] mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
