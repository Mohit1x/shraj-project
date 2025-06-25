/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./ui/button";

export default function HeroComponent() {
  const mobileData = [
    {
      names: ["BATCH OVENS", "CONVEYOR OVENS", "CABINET OVENS"],
      images: [
        "/BatchOvens/BatchOven1.png",
        "/BatchOvens/BatchOven2.png",
        "/BatchOvens/BatchOven3.png",
      ],
    },
    {
      names: [
        "VERTICAL KNOB LOCKING",
        "CYLINDRICLE  AUTOCLAVE",
        "RECTANGULAR  AUTOCLAVE",
      ],
      images: [
        "/MRS-pictures/MRS1.png",
        "/MRS-pictures/MRS2.png",
        "/MRS-pictures/MRS3-1.png",
      ],
    },
    {
      names: [
        "TWO BODY REFRIGERATOR",
        "TWO BODY MOBILE REFRIGERATOR",
        "THREE BODY REFRIGERATOR",
      ],
      images: ["/auto-1-1.png", "/auto-2.png", "/auto-3.png"],
    },
  ];

  const StylishText = ({ text }: { text: string }) => {
    const firstLetter = text.charAt(0);
    const restOfText = text.slice(1);

    return (
      <div className="relative group">
        <h2 className="text-slate-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight tracking-wide transition-all duration-300 hover:text-slate-900">
          <span className="relative inline-block">
            <span className="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-sky-600 drop-shadow-sm">
              {firstLetter}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 transform scale-x-100 transition-transform duration-300 group-hover:scale-x-110"></span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-300 opacity-60"></span>
          </span>
          <span className="ml-1 font-semibold tracking-wider">
            {restOfText}
          </span>
        </h2>
      </div>
    );
  };

  return (
    <div className="w-full max-h-[50vh] h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left side with enhanced styling */}
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 max-w-2xl w-full">
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
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

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <Button
                      variant={"hoverTheme"}
                      className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      READ MORE
                    </Button>
                    <Button
                      variant={"theme"}
                      className="w-full sm:w-auto text-xs sm:text-sm font-semibold px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      GET QUOTE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right side - Complex Image Layout */}
              <div className="h-full p-2 sm:p-3 md:p-4 bg-white/50 overflow-hidden">
                {/* Mobile: Single image carousel */}
                <div className="block lg:hidden h-full overflow-hidden">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {data.images.map((image, imgIndex) => (
                      <SwiperSlide key={`mobile-${image}-${imgIndex}`}>
                        <div className="w-full h-full flex items-center justify-center p-2">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Industrial Equipment ${imgIndex + 1}`}
                            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg bg-white/90 p-2"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Desktop: Complex grid layout */}
                <div className="hidden lg:block h-full overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full max-h-full">
                    {/* Main large image - spans 2 rows */}
                    <div className="row-span-2 group overflow-hidden">
                      <img
                        src={data.images[0] || "/placeholder.svg"}
                        alt={`Industrial Equipment 1`}
                        className="w-full h-full max-h-full object-contain rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl bg-white/90 p-2"
                      />
                    </div>

                    {/* Two smaller images stacked */}
                    <div className="group overflow-hidden">
                      <img
                        src={data.images[1] || "/placeholder.svg"}
                        alt={`Industrial Equipment 2`}
                        className="w-full h-full max-h-full object-contain rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl bg-white/90 p-1"
                      />
                    </div>

                    <div className="group overflow-hidden">
                      <img
                        src={data.images[2] || "/placeholder.svg"}
                        alt={`Industrial Equipment 3`}
                        className="w-full h-full max-h-full object-contain rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl bg-white/90 p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 5px !important;
          }

          .swiper-pagination-bullet {
            width: 6px !important;
            height: 6px !important;
            margin: 0 3px !important;
          }
        }
      `}</style>
    </div>
  );
}
