"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { products } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProductsPage() {
  const [impCategories, setImpcategories] = useState<string[] | undefined>();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});
  const [needsReadMore, setNeedsReadMore] = useState<{
    [key: string]: boolean;
  }>({});

  const descRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  useEffect(() => {
    const uniqueTypes = Array.from(new Set(products.map((p) => p.type)));
    setImpcategories(uniqueTypes);
  }, []);

  const handleSelectedBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    const isChecked = e.target.checked;
    setSelectedTypes((prev) =>
      isChecked ? [...prev, type] : prev.filter((t) => t !== type)
    );
  };

  const filteredProducts = selectedTypes.length
    ? products.filter((product) => selectedTypes.includes(product.type))
    : products;

  useEffect(() => {
    const needs: { [key: string]: boolean } = {};
    filteredProducts.forEach((product) => {
      const el = descRefs.current[product.id];
      if (el) {
        needs[product.id] = el.scrollHeight > el.clientHeight + 2;
      }
    });
    setNeedsReadMore(needs);
  }, [filteredProducts]);

  const toggleDescription = (id: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-white w-full mx-auto px-4 md:px-10 xl:px-20 py-10 overflow-visible">
      <div className="flex flex-col lg:flex-row gap-8 overflow-visible">
        {/* Desktop filter */}
        <div className="w-full hidden md:block lg:w-64 border-r pr-4">
          <h2 className="font-semibold text-lg mb-2">Equipment Type</h2>
          {impCategories?.map((type, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={type}
                value={type}
                onChange={handleSelectedBrand}
                checked={selectedTypes.includes(type)}
                className="mr-2"
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>

        {/* Mobile filter button */}
        <button
          className="bg-[#2E2F91] px-4 py-2 block md:hidden text-white font-semibold rounded"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          Filter
        </button>

        {/* Mobile filter panel */}
        {isMobileFilterOpen && (
          <div className="w-full block md:hidden lg:w-64 border-r pr-4">
            <h2 className="font-semibold text-lg mb-2">Equipment Type</h2>
            {impCategories?.map((type, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  onChange={handleSelectedBrand}
                  checked={selectedTypes.includes(type)}
                  className="mr-2"
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        )}

        {/* Product Grid */}
        <ScrollArea className="w-full overflow-visible h-screen">
          <h1 className="text-3xl font-bold mb-4 font-serif text-[#2C3091]">
            All Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10 mb:m-20">
            {filteredProducts.map((product) => (
              <Link href={`/all-products/${product.id}`} key={product.id}>
                <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col min-h-[340px] overflow-visible">
                  {/* Image */}
                  <div className="relative w-full h-36 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain rounded-md"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Type */}
                  <span className="bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    {product.type}
                  </span>

                  {/* Title */}
                  <h2 className="mt-3 text-lg font-semibold text-gray-900 truncate">
                    {product.name}
                  </h2>

                  {/* Description + Read More */}
                  <div className="mt-2 text-sm text-gray-600 flex-1 overflow-visible">
                    <p
                      ref={(el) => {
                        descRefs.current[product.id] = el;
                      }}
                      className={`${
                        expandedDescriptions[product.id] ? "" : "line-clamp-2"
                      }`}
                    >
                      {product.description}
                    </p>

                    {needsReadMore[product.id] && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDescription(product.id);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-xs mt-1 block"
                      >
                        {expandedDescriptions[product.id]
                          ? "Read less"
                          : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
