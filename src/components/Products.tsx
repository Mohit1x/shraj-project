"use client";

import { products } from "@/constants/constant";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("mobile");
      else if (width >= 640 && width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newProducts =
    screenSize === "mobile"
      ? products.slice(2, 10)
      : screenSize === "tablet"
      ? products.slice(2, 14)
      : products.slice(2, 18);

  const productsPerPage =
    screenSize === "mobile" ? 2 : screenSize === "tablet" ? 4 : 8;

  const totalPages = Math.ceil(newProducts.length / productsPerPage);

  const scrollLeft = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const scrollRight = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const getCurrentProducts = () => {
    const startIndex = currentPage * productsPerPage;
    return newProducts.slice(startIndex, startIndex + productsPerPage);
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="py-2 sm:py-5 flex flex-col gap-10">
      <div className="flex justify-end">
        <Link href={"/all-products"}>
          <p className="bg-[#1C398E] py-2 px-4 rounded-full w-fit text-right text-white font-semibold cursor-pointer">
            View All
          </p>
        </Link>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <div
          className={`grid gap-4 sm:gap-6 ${
            screenSize === "mobile"
              ? "grid-cols-1 grid-rows-2"
              : screenSize === "tablet"
              ? "grid-cols-2"
              : "grid-cols-4"
          }`}
        >
          {getCurrentProducts().map((item) => (
            <Link href={`/all-products/${item.id}`} key={item.id}>
              <div className="bg-white rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-32 sm:h-44 relative mb-4 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-contain p-3 sm:p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 line-clamp-2 break-words truncate">
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

        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      index === currentPage
                        ? "bg-gray-900 text-white"
                        : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next products"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
