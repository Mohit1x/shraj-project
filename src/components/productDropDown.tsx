"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  industrialOvensProducts,
  sterilizersProducts,
  mortuaryRSProducts,
} from "@/constants/productLinks";
import { FaAngleRight } from "react-icons/fa";

const productData = [
  { label: "Industrial ovens", key: "ovens" },
  { label: "Sterilizers", key: "sterilizers" },
  { label: "Mortuary refrigerators", key: "mortuary" },
];

const categoryMap: Record<string, { id: number; name: string }[]> = {
  ovens: industrialOvensProducts,
  sterilizers: sterilizersProducts,
  mortuary: mortuaryRSProducts,
};

type ProductDropDownProps = {
  isMobileSidebar?: boolean;
  setShowDropdown?: (value: boolean) => void;
  setIsSidebarOpen?: (value: boolean) => void;
};

const ProductDropDown = ({ isMobileSidebar }: ProductDropDownProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div
      className={`w-52 bg-white relative ${
        isMobileSidebar ? "" : "shadow-lg border z-50 rounded-md"
      }`}
    >
      {productData.map((product) => (
        <div
          key={product.label}
          onMouseEnter={() => setActiveCategory(product.key)}
          onMouseLeave={() => setActiveCategory(null)}
          className="py-2 px-4 text-sm font-medium hover:bg-gray-100 cursor-pointer relative"
        >
          <div className="flex items-center gap-2 group">
            {product.label}{" "}
            <FaAngleRight
              className={`group-hover:rotate-90 ${
                activeCategory === product.label ? "rotate-90" : ""
              } absolute right-0 mr-2`}
            />
          </div>

          {/* Right-side submenu */}
          {activeCategory === product.key && (
            <div
              className={`absolute left-full top-0 w-64 bg-white shadow-lg border rounded-md z-50 ${
                activeCategory === "mortuary"
                  ? "h-[400px] overflow-y-scroll"
                  : "h-fit"
              }`}
            >
              {categoryMap[product.key].map((item) => (
                <Link
                  href={`/all-products/${item.id}`}
                  key={item.id}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDropDown;
