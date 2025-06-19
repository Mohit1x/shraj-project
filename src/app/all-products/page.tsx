"use client";

import type React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { products } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";

// Custom hook to ensure component is mounted before accessing DOM
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export default function ProductsPage() {
  const hasMounted = useHasMounted();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Memoize unique categories
  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.type))).sort();
  }, []);

  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    if (selectedTypes.length === 0) return products;
    return products.filter((product) => selectedTypes.includes(product.type));
  }, [selectedTypes]);

  // Handle filter changes
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const type = e.target.value;
      const isChecked = e.target.checked;

      setSelectedTypes((prev) => {
        if (isChecked) {
          return [...prev, type];
        } else {
          return prev.filter((t) => t !== type);
        }
      });
    },
    []
  );

  // Toggle mobile filter
  const toggleMobileFilter = useCallback(() => {
    setIsMobileFilterOpen((prev) => !prev);
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSelectedTypes([]);
    setIsMobileFilterOpen(false);
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-white w-full mx-auto px-4 md:px-10 xl:px-20 py-10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-[320px]"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full mx-auto px-4 md:px-10 xl:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filter Sidebar */}
        <div className="hidden md:block lg:w-64 flex-shrink-0">
          <div className="sticky top-4 bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg text-gray-900">
                Equipment Type
              </h2>
              {selectedTypes.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-500 hover:text-gray-700 underline"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {uniqueCategories.map((type) => (
                <label
                  key={type}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleFilterChange}
                    checked={selectedTypes.includes(type)}
                    className="mr-3 h-4 w-4 text-[#2C3091] focus:ring-[#2C3091] border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Header with Mobile Filter */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold font-serif text-[#2C3091]">
              All Products
            </h1>

            {/* Mobile Filter Button */}
            <button
              className="bg-[#2C3091] hover:bg-[#2E2F91] px-4 py-2 md:hidden text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              onClick={toggleMobileFilter}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                />
              </svg>
              Filter
              {selectedTypes.length > 0 && (
                <span className="bg-white text-[#2C3091] text-xs px-2 py-0.5 rounded-full font-bold">
                  {selectedTypes.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Filter Panel */}
          {isMobileFilterOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg border p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg text-gray-900">
                  Equipment Type
                </h2>
                <div className="flex items-center gap-2">
                  {selectedTypes.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={toggleMobileFilter}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
                {uniqueCategories.map((type) => (
                  <label
                    key={type}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={type}
                      onChange={handleFilterChange}
                      checked={selectedTypes.includes(type)}
                      className="mr-2 h-4 w-4 text-[#2C3091] focus:ring-[#2C3091] border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700 truncate">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <ScrollArea className="w-full my-10">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <div className="max-w-md mx-auto">
                  <svg
                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    No products match your current filters. Try adjusting your
                    selection.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-[#2C3091] hover:bg-[#2E2F91] text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Results Summary */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <span>
                    Showing {filteredProducts.length} of {products.length}{" "}
                    products
                  </span>
                  {selectedTypes.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span>Filtered by:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedTypes.map((type) => (
                          <span
                            key={type}
                            className="bg-[#2C3091] text-white text-xs px-2 py-1 rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
