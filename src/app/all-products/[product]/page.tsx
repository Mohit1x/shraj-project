"use client";

import { ProductImageZoom } from "@/components/ProductImageZoom";
import { OvenOtherFeaturesType, products } from "@/constants/constant";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import DescriptionComponent from "@/components/products-helper/DescriptionComponent";
import OtherFeaturesComponent from "@/components/products-helper/OtherFeaturesComponent";
import OptionsComponent from "@/components/products-helper/OptionsComponent";

type productDetailType = {
  id: number;
  name: string;
  brand: string;
  type: string;
  image: string;
  images: string[];
  description: string;
  overallDescription: string;
  mainFeatures: string[];
  otherFeatures: any;
  more: {
    img?: string[];
  };
};

const options = [
  "Custom shelves, carts + trucks made to accompany any style oven",
  "Exhaust vent with damper",
  "Interior door latch",
  "Outdoor use package",
  "Chart recorder",
  "Door switch",
  "Adjustable timer",
  "Ethernet or serial bus communication",
  "Profile temperature control with ramp and hold capability",
  "Industrially hardened SCADA system capable of controlling 20 ovens",
  "Integrated PLC controls with touch screen",
  "Class 'A' oven controls with powered exhaust systems",
];

export default function Product() {
  const params = useParams();
  const productId = Number(params.product);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [productDetail, setProducDetail] = useState<productDetailType | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<
    "description" | "features" | "options"
  >("description");

  useEffect(() => {
    const data = products.find((product) => product.id === productId);
    if (data && data.more.img) {
      setProducDetail(data);
    } else if (data) {
      setProducDetail({
        ...data,
        more: {
          ...data.more,
          img: [],
        },
      });
    } else {
      setProducDetail(null);
    }
  }, [productId]);

  const otherProducts = products
    .filter((item) => item.id !== productId)
    .slice(0, 8);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
        {/* Left Image Section */}
        <div className="w-full lg:w-[45%] min-w-0">
          <ProductImageZoom images={productDetail?.images || [""]} />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-8 min-w-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight break-words">
            {productDetail?.name}
          </h1>

          {/* Tabs */}
          <div className="flex justify-between border-b pb-2 text-sm sm:text-base gap-2">
            {["description", "features", "options"].map((tab) => (
              <h2
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`cursor-pointer capitalize px-2 py-1 text-center flex-1 min-w-0 ${
                  activeTab === tab
                    ? "text-[#0f0ff0] font-semibold"
                    : "text-gray-700"
                }`}
              >
                <span className="truncate block">{tab}</span>
              </h2>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="min-w-0">
            {activeTab === "description" && (
              <DescriptionComponent
                overallDescription={productDetail?.overallDescription || ""}
                mainFeatures={productDetail?.mainFeatures || []}
              />
            )}
            {activeTab === "features" && (
              <OtherFeaturesComponent
                otherFeatures={productDetail?.otherFeatures || {}}
              />
            )}
            {activeTab === "options" &&
              (productDetail?.type === "Industrial Ovens" ? (
                <OptionsComponent options={options} />
              ) : (
                <OptionsComponent img={productDetail?.more?.img || []} />
              ))}
          </div>
        </div>
      </div>

      {/* Other Products Section */}
      <section className="bg-gray-50 mt-12 sm:mt-16 lg:mt-20 py-12 sm:py-16">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading + Arrows */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-snug break-words">
                Other products you might like
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-md break-words">
                Discover complementary items - explore products you might like.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Scrollable Products */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {otherProducts.map((item) => (
              <Link href={`/all-products/${item.id}`} key={item.id}>
                <div
                  className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-56 sm:w-64 lg:w-72"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="w-full h-36 sm:h-44 relative mb-4 bg-gray-50 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-3 sm:p-4"
                      sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-xs text-gray-500 uppercase truncate">
                      {item.brand}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 line-clamp-2 break-words">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600 truncate">
                      {item.type}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hide scrollbar and add line clamp utility */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
