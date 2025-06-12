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

  // Detect screen size
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

  // Slice products
  const newProducts =
    screenSize === "mobile"
      ? products.slice(2, 10)
      : screenSize === "tablet"
      ? products.slice(2, 14)
      : products.slice(2, 18);

  // Set products per page
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

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {newProducts && (
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <span className="text-sm text-gray-600 font-medium px-2">
                {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next products"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
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
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-3 sm:p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="space-y-1 min-w-0">
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

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? "bg-gray-600" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Clamp styling */}
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
