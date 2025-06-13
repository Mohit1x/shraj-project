"use client";

import { Gauge, ShieldCheck, SlidersHorizontal, Flame } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      icon: Gauge,
      title: "High-Performance Systems",
      description: "Engineered for maximum efficiency and output.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Operations",
      description: "Built to deliver consistent, fail-safe performance.",
    },
    {
      icon: SlidersHorizontal,
      title: "Customized Sterilization",
      description: "Tailored solutions to meet your unique requirements.",
    },
    {
      icon: Flame,
      title: "Preservation & Heating",
      description: "Advanced solutions for precise preservation and heating.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white sm:bg-[#2E2F91] px-4">
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="text-white"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F8FAFC] rounded h-64 flex flex-col items-center justify-center p-6">
                  <div className="flex justify-center mb-4">
                    <feature.icon size={48} className="text-[#2E2F91]" />
                  </div>
                  <h3 className="text-[#2E2F91] font-sans text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 opacity-90 leading-relaxed font-sans text-center max-w-[80%]">
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
                className="text-center text-white h-64 flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon size={48} className="text-[#d3686d]" />
                </div>
                <h3 className="text-lg mb-2 tracking-wide font-semibold font-sans text-[#d3686d]">
                  {feature.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed font-semibold font-sans w-[80%] mx-auto">
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
