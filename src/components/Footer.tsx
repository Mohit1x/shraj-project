"use client";

import { navlinks } from "@/constants/constant";
import Image from "next/image";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-12 mb-8">
          {/* Mobile/Tablet: Logo Section */}
          <div className="flex flex-col items-start lg:hidden">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="object-contain mb-6"
            />

            <p className="text-sm leading-relaxed text-gray-600 text-justify">
              Shraj Industries Private Limited is a leading manufacturer of
              high-quality autoclaves & sterilizers, including vertical,
              horizontal, cylindrical, and rectangular autoclaves, along with
              mortuary freezers, industrial ovens, and industrial batch ovens.
            </p>
          </div>

          <div className="flex lg:hidden">
            <div className="flex flex-row gap-8 sm:gap-12 w-full">
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-semibold text-black mb-2">Links</h3>
                {navlinks.map((nav) => (
                  <Link
                    key={nav.tag}
                    href={nav.path}
                    className="text-sm text-black hover:underline"
                  >
                    {nav.tag}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="text-sm text-black hover:underline"
                >
                  Contact
                </Link>
              </div>

              {/* Column 2: Support */}
              <div className="flex flex-col gap-3 flex-1 mr-2">
                <h3 className="font-semibold text-black mb-2">Support</h3>
                <div className="mt-2">
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <BsFillTelephoneFill size={14} />
                    <span>+91 8956981462</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <BsFillTelephoneFill size={14} />
                    <span>+91 8956981465</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <MdEmail size={14} />
                    <span>sales1@shrajindustries.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <MdEmail size={14} />
                    <span>info@shrajindustries.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Social section (full width) */}
          <div className="flex flex-col gap-3 lg:hidden">
            <h3 className="font-semibold text-black mb-2">Social</h3>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                aria-label="X"
                className="text-black hover:text-gray-700"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-black hover:text-gray-700"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-black hover:text-gray-700"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-black hover:text-gray-700"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Desktop Layout: All four sections in one row */}
          <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-start lg:w-full">
            {/* Logo Section */}
            <div className="flex flex-col items-start">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="object-contain mb-6"
              />

              <h1 className="text-xs font-medium font-nunito text-gray-600">
                <p className="text-xs text-left max-w-xs">
                  Shraj Industries Private Limited Is A Leading Manufacturer Of
                  High-Quality Autoclaves & Sterilizers, Including Vertical,
                  Horizontal, Cylindrical, And Rectangular Autoclaves, Along
                  With Mortuary Freezers, Industrial Ovens, And Industrial Batch
                  Ovens.
                </p>
              </h1>
            </div>

            {/* Column 1: Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-black mb-2">Links</h3>
              {navlinks.map((nav) => (
                <Link
                  key={nav.tag}
                  href={nav.path}
                  className="text-sm text-black hover:underline"
                >
                  {nav.tag}
                </Link>
              ))}
            </div>

            {/* Column 2: Support */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-black mb-2">Support</h3>
              <div className="mt-2">
                <div className="flex items-center gap-2 text-sm text-black mb-2">
                  <BsFillTelephoneFill size={14} />
                  <span>+91 8956981462</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-black mb-2">
                  <BsFillTelephoneFill size={14} />
                  <span>+91 8956981465</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-black">
                  <MdEmail size={14} />
                  <span>sales1@shrajindustries.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-black">
                  <MdEmail size={14} />
                  <span>info@shrajindustries.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-black mb-2">Social</h3>
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  aria-label="X"
                  className="text-black hover:text-gray-700"
                >
                  <FaXTwitter size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-black hover:text-gray-700"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-black hover:text-gray-700"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-black hover:text-gray-700"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <div className="flex gap-8 text-sm text-[#2C3091] font-semibold">
              <span>Copyright © SHRAJ</span>
            </div>

            <p className="text-[#2C3091] text-sm font-semibold">
              Designed by :-{" "}
              <a href="https://a9business.in/" target="_blank">
                A9 Business
              </a>
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-sm text-black hover:text-gray-700 transition"
            >
              Back to top <FaAngleDoubleUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
