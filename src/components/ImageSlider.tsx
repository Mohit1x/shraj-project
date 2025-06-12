import Image from "next/image";
import { carouselData } from "@/constants/constant";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";

export default function ImageSlider() {
  return (
    <>
      <div className="hidden md:block py-10">
        <div className="flex items-center justify-around">
          {carouselData.map((path) => (
            <div
              key={path}
              className="border border-gra-200 py-4 px-10 rounded shadow-2xl bg-gray-100"
            >
              <div className="shrink-0 w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src={path}
                  alt={`${path} image`}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <InfiniteSlider speedOnHover={20} gap={24} className="flex w-full">
        <div className="block md:hidden">
          <div className="flex items-center justify-around gap-5">
            {carouselData.map((path) => (
              <div
                key={path}
                className="border border-gra-200 py-4 px-10 rounded shadow-2xl bg-white"
              >
                <div className="shrink-0 w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src={path}
                    alt={`${path} image`}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfiniteSlider>
    </>
  );
}
