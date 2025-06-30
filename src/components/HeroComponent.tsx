"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroComponent() {
  const mobileData = [
    {
      names: ["BATCH OVENS", "CONVEYOR OVENS", "CABINET OVENS"],
      image: "/ovens-bg.jpg",
    },
    {
      names: [
        "VERTICAL KNOB LOCKING",
        "CYLINDRICLE AUTOCLAVE",
        "RECTANGULAR AUTOCLAVE",
      ],
      image: "/sterilizer-bg.png",
    },
    {
      names: [
        "TWO BODY REFRIGERATOR",
        "THREE BODY REFRIGERATOR",
        "SIX BODY REFRIGERATOR",
      ],
      image: "/mrs-bg.png",
    },
  ];

  const StylishText = ({ text }: { text: string }) => {
    const firstLetter = text.charAt(0);
    const restOfText = text.slice(1);

    return (
      <div className="relative group">
        <h2 className="text-slate-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight tracking-wide transition-all duration-300 hover:text-slate-900">
          <span className="relative inline-block">
            <span className="relative z-10 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-sky-600 drop-shadow-sm">
              {firstLetter}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-sky-400 to-sky-600 transform scale-x-100 transition-transform duration-300 group-hover:scale-x-110"></span>
            <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-0.5 bg-sky-300 opacity-60"></span>
          </span>
          <span className="ml-1 font-semibold tracking-wider text-white">
            {restOfText}
          </span>
        </h2>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[55vh] xl:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-sky-500",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-sky-600",
        }}
        loop={true}
        className="w-full h-full"
      >
        {mobileData.map((data, index) => (
          <SwiperSlide key={`${data.names[1]}-${index}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[55vh] xl:min-h-[60vh]">
              {/* Left side with enhanced styling */}
              <div className="h-full min-h-[250px] sm:min-h-[300px] lg:min-h-full flex items-center justify-center bg-gradient-to-br from-[#5155be] via-[#36387a] to-[#1a1b43] p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-2xl w-full">
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 text-start md:text-left">
                    {data.names.map((name, nameIndex) => (
                      <div
                        key={`${name}-${nameIndex}`}
                        className="transform transition-all duration-500 hover:translate-x-2"
                        style={{
                          animationDelay: `${nameIndex * 200}ms`,
                        }}
                      >
                        <StylishText text={name} />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <Link href={"/all-products"}>
                      <Button
                        variant={"hoverTheme"}
                        className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        READ MORE
                      </Button>
                    </Link>
                    <Link href={"/enquiry"}>
                      <Button
                        variant={"theme"}
                        className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        GET QUOTE
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right side - Improved Image Layout */}
              <div className="relative h-full min-h-[200px] sm:min-h-[250px] lg:min-h-full bg-white/10 overflow-hidden">
                <Image
                  src={data.image || "/placeholder.svg"}
                  alt={`${data.names[0]} equipment`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority={index === 0}
                />
                {/* Gradient overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/5 lg:to-transparent"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 8px !important;
          z-index: 10 !important;
        }
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
          opacity: 0.7 !important;
        }
        .swiper-pagination-bullet-active {
          transform: scale(1.3) !important;
          opacity: 1 !important;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 6px !important;
          }
          .swiper-pagination-bullet {
            width: 6px !important;
            height: 6px !important;
            margin: 0 3px !important;
          }
          .swiper-pagination-bullet-active {
            transform: scale(1.2) !important;
          }
        }

        @media (max-width: 1024px) and (orientation: landscape) {
          .hero-container {
            min-height: 70vh !important;
          }
        }
      `}</style>
    </div>
  );
}
