"use client";

import { navlinks } from "@/constants/constant";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProductDropDown from "./productDropDown";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Navbar() {
  const [productOpen, setProductOpen] = useState(false);

  const path = usePathname();

  return (
    <div className="w-full">
      <div className="py-2 relative max-w-7xl mx-auto px-4 xl:px-0">
        <div className={`flex flex-col py-2`}>
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-6 items-center w-full max-w-7xl mx-auto">
            <Link href="/">
              <div className="w-full max-w-[200px] md:max-w-[200px] mx-auto md:mx-0">
                <Image
                  src="/logo.png"
                  alt="SHRAJ-logo"
                  height={150}
                  width={300}
                  className="w-full h-auto"
                />
              </div>
            </Link>

            <div className="w-full flex justify-center md:justify-start">
              <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-700 leading-relaxed text-center md:text-left px-4 md:px-0 max-w-full">
                <strong className="text-[#2D2F91] font-archivo">
                  Shraj Industries Private Limited
                </strong>{" "}
                <span className="font-nunito">
                  Is A Leading Manufacturer Of High-Quality Autoclaves &
                  Sterilizers, Including Vertical, Horizontal, Cylindrical, And
                  Rectangular Autoclaves, Along With Mortuary Freezers,
                  Industrial Ovens, And Industrial Batch Ovens.
                </span>
              </p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-600 my-4 hidden md:block" />

          <div className="flex items-center gap-5 mx-auto">
            <div className="hidden sm:block">
              <div className="flex items-center gap-8">
                {navlinks.map((nav) =>
                  nav.tag === "Products" ? (
                    <div
                      key={nav.tag}
                      className="relative"
                      onMouseEnter={() => setProductOpen(true)}
                      onMouseLeave={() => setProductOpen(false)}
                    >
                      <div className="flex items-center gap-2 group">
                        <Link href={nav.path}>
                          <h1
                            className={`font-semibold cursor-pointer relative ${
                              path === nav.path
                                ? "text-[#2E2F91] font-bold py-2"
                                : "text-black"
                            }`}
                          >
                            {nav.tag}
                          </h1>
                        </Link>
                        {nav.openProduct ? (
                          <FaAngleDown
                            className={`${productOpen ? "rotate-180" : ""}`}
                          />
                        ) : (
                          ""
                        )}
                      </div>

                      {productOpen && (
                        <div className="absolute top-full left-0 mt-1">
                          {/* Don't pass setShowDropdown anymore, hover is handled above */}
                          <ProductDropDown />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div key={nav.tag}>
                      <Link href={nav.path}>
                        <h1
                          className={`font-semibold cursor-pointer relative ${
                            path === nav.path
                              ? "text-[#2E2F91] font-bold underline py-2"
                              : "text-black"
                          }`}
                        >
                          {nav.tag}
                        </h1>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
