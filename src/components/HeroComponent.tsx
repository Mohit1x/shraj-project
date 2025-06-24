"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
export default function HeroComponent() {
  const banners = ["/banner-1.png", "/banner-2.png", "/banner-3.png"];

  const mobileData = [
    {
      title: "INDUSTRIAL OVENS",
      desc: "we lead the way in industrial heating innovation. With 7 years of experience in oven manufacturing, our expertise has powered hundreds of successful operations across various industries.",
      image: banners[0],
    },
    {
      title: "STERILIZERS",
      desc: "Shraj Industries Pvt. Ltd. offers Vertical Autoclave units with chamber volumes ranging from 22 liters to 175 liters, accommodating two and three drums accordingly.",
      image: banners[1],
    },
    {
      title: "MORTUARY SYSTEMS",
      desc: "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition.",
      image: banners[2],
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {mobileData.map((src) => (
          <SwiperSlide key={src.image}>
            <Link href={"/all-products"}>
              <>
                <div className="relative hidden md:block w-full aspect-[7/2]">
                  {/* <Image
                    src={src.image}
                    fill
                    alt={`hero-image-1`}
                    className="object-center"
                  /> */}
                </div>
                <div
                  className="relative md:hidden w-full aspect-[7/2] text-center text-white px-4 py-6 h-[150px]"
                  style={{
                    backgroundImage: "url('/hero-bg.jpg')",
                    backgroundSize: "cover",
                  }}
                >
                  <h1 className="text-2xl font-serif font-bold">{src.title}</h1>
                  <p className="text-xs">{src.desc}</p>
                </div>
              </>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
