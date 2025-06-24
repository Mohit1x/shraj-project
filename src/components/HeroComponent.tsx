/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
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
        "VERTICAL AUTOCLAVE RADIAL AND KNOB LOCKING",
        "HORIZONTAL CYLINDRICLE HIGH PRESSURE AUTOCLAVE",
        "HORIZONTAL RECTANGULAR HIGH PRESSURE AUTOCLAVE",
      ],
      images: [
        "/MRS-pictures/MRS1.png",
        "/MRS-pictures/MRS2.png",
        "/MRS-pictures/MRS3.png",
      ],
    },
    {
      names: [
        "TWO BODY REFRIGERATOR",
        "TWO BODY MOBILE REFRIGERATOR",
        "THREE BODY REFRIGERATOR",
      ],
      images: [
        "/BatchOvens/BatchOven1.png",
        "/BatchOvens/BatchOven2.png",
        "/BatchOvens/BatchOven3.png",
      ],
    },
  ];

  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {mobileData.map((data) => (
          <SwiperSlide key={data.names[1]}>
            <div className="grid grid-cols-2 h-[50vh]">
              {/* Left side with full height gradient */}
              <div className="h-full flex items-center justify-center bg-gradient-to-r from-sky-50 via-sky-300 to-sky-100 text-white">
                <div className="flex flex-col gap-10">
                  {data.names.map((name) => (
                    <div
                      className="text-black font-semibold text-2xl"
                      key={name}
                    >
                      {name}
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <Button variant={"hoverTheme"}>READ MORE</Button>
                    <Button variant={"theme"}>GET QUOTE</Button>
                  </div>
                </div>
              </div>

              {/* Right side - Image grid */}
              <div className="h-full p-2">
                <div className="flex items-center justify-center gap-4 h-full">
                  <div className="w-1/3 h-[70%]">
                    <img
                      src={data.images[0]}
                      alt="Industrial Equipment"
                      className="w-full h-full object-contain rounded-md drop-shadow-md"
                    />
                  </div>
                  <div className="w-1/3 h-[70%]">
                    <img
                      src={data.images[1]}
                      alt="Equipment"
                      className="w-full h-full object-contain rounded-md drop-shadow-md"
                    />
                  </div>
                  <div className="w-1/3 h-[70%]">
                    <img
                      src={data.images[2]}
                      alt="Equipment"
                      className="w-full h-full object-contain rounded-md drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
