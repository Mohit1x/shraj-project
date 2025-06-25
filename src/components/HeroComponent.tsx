/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        <h2 className="text-slate-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wide transition-all duration-300 hover:text-slate-900">
          <span className="relative inline-block">
            <span className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-sky-600 drop-shadow-sm">
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

  const ImageGrid = ({
    images,
    slideIndex,
  }: {
    images: string[];
    slideIndex: number;
  }) => {
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    };

    if (isMobile) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-sm h-64 group">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`Industrial Equipment ${currentImageIndex + 1}`}
              className="w-full h-full object-contain rounded-xl shadow-lg bg-white/90 p-4 transition-all duration-500"
            />

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-600 rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-600 rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-sky-600 w-6"
                      : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full p-4">
        {/* Complex Grid Layout */}
        <div className="relative w-full h-full">
          {/* Main large image - positioned prominently */}
          <div className="absolute top-0 left-0 w-3/5 h-3/5 z-10 group">
            <div className="relative w-full h-full">
              <img
                src={images[0] || "/placeholder.svg"}
                alt="Primary Industrial Equipment"
                className="w-full h-full object-contain rounded-2xl shadow-xl bg-gradient-to-br from-white to-sky-50 p-4 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Second image - top right, overlapping slightly */}
          <div className="absolute top-8 right-0 w-2/5 h-2/5 z-20 group">
            <div className="relative w-full h-full">
              <img
                src={images[1] || "/placeholder.svg"}
                alt="Secondary Industrial Equipment"
                className="w-full h-full object-contain rounded-xl shadow-lg bg-white p-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:z-30"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Third image - bottom right, creative positioning */}
          <div className="absolute bottom-0 right-8 w-2/5 h-2/5 z-15 group">
            <div className="relative w-full h-full">
              <img
                src={images[2] || "/placeholder.svg"}
                alt="Tertiary Industrial Equipment"
                className="w-full h-full object-contain rounded-xl shadow-lg bg-gradient-to-br from-white to-slate-50 p-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
              />
              <div className="absolute -inset-1 bg-gradient-to-l from-sky-300 to-sky-500 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-to-r from-sky-200/30 to-sky-300/30 rounded-full blur-xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-l from-sky-100/40 to-sky-200/40 rounded-full blur-lg -z-10"></div>

          {/* Connecting lines/shapes for visual interest */}
          <div className="absolute top-1/3 left-1/3 w-px h-16 bg-gradient-to-b from-sky-300/50 to-transparent transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-px h-12 bg-gradient-to-t from-sky-400/50 to-transparent transform -rotate-45"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[50vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh] md:h-[70vh]">
              {/* Left side with enhanced styling */}
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-2xl w-full">
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
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

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <Button
                      variant={"hoverTheme"}
                      className="w-full sm:w-auto text-sm sm:text-base font-semibold px-6 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      READ MORE
                    </Button>
                    <Button
                      variant={"theme"}
                      className="w-full sm:w-auto text-sm sm:text-base font-semibold px-6 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      GET QUOTE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right side - Complex Image Layout */}
              <div className="h-full bg-gradient-to-br from-white/50 to-sky-50/30 relative overflow-hidden">
                <ImageGrid images={data.images} slideIndex={index} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }

        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
