"use client";

import { navlinks } from "@/constants/constant";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileSidebar from "./MobileSidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const path = usePathname();

  return (
    <div className="w-full">
      <div className="shadow-lg py-5 px-2 relative z-50">
        <div
          className={`flex items-center justify-between max-w-7xl mx-auto py-2`}
        >
          <Link href={"/"}>
            <div>
              <Image
                src={"/logo.png"}
                alt="SHRAJ-logo"
                height={150}
                width={150}
              />
            </div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <div className="flex items-center gap-8">
                {navlinks.map((nav) => (
                  <Link href={nav.path} key={nav.tag}>
                    <h1
                      className={`font-semibold cursor-pointer ${
                        path === nav.path
                          ? "text-[#2E2F91] font-bold underline py-2"
                          : "text-black"
                      }`}
                    >
                      {nav.tag}
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
            <Link href={"/contact"}>
              <Button variant={"hero"}>Contact Us</Button>
            </Link>
            <div
              className="block md:hidden"
              onClick={() => setOpenMobileSidebar(true)}
            >
              <RxHamburgerMenu size={20} color="black" />
            </div>
            <MobileSidebar
              isSidebarOpen={openMobileSidebar}
              setIsSidebarOpen={setOpenMobileSidebar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
