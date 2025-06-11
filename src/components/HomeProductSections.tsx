"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import TiltCard from "@/components/TiltCard";

type SectionItem = {
  title: string;
  img: string;
  des: string;
};

type TitleCardProps = {
  sections: SectionItem[];
};

export default function HomeProductSections({ sections }: TitleCardProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {sections.map(({ title, des, img }, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`w-full flex gap-10 items-center justify-between flex-col md:flex-row `}
            >
              <div className="flex flex-col gap-5 max-w-xl">
                <h1 className="text-2xl font-serif text-gray-800">{title}</h1>
                <p className="text-sm text-gray-700">{des}</p>
                <span className="p-2 bg-[#2C318F] rounded text-white w-fit cursor-pointer">
                  View More
                </span>
              </div>

              <div className="w-[200px] md:w-[400px]">
                <TiltCard img={img} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
