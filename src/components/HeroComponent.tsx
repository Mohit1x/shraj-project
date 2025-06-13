"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
export default function HeroComponent() {
  const banners = ["/banner-1.png", "/banner-2.png", "/banner-3.png"];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {banners.map((src) => (
          <SwiperSlide key={src}>
            <Link href={"/all-products"}>
              <div className="relative w-full aspect-[7/2]">
                <Image
                  src={src}
                  fill
                  alt={`hero-image-1`}
                  className="object-center"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
