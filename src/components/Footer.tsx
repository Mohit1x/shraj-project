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
    <footer className="bg-[#DFE3E8] text-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-8">
          {/* Left: Logo Pattern */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Or replace with your logo */}
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="object-contain mb-6"
            />

            <h1 className="text-xs font-medium font-nunito text-gray-600">
              {" "}
              <p className="text-xs text-center lg:text-left max-w-xs">
                Shraj Industries Private Limited Is A Leading Manufacturer Of
                High-Quality Autoclaves & Sterilizers, Including Vertical,
                Horizontal, Cylindrical, And Rectangular Autoclaves, Along With
                Mortuary Freezers, Industrial Ovens, And Industrial Batch Ovens.
              </p>
            </h1>
          </div>

          {/* Right: Three Columns */}
          {/* Column 1: About Us / Navigation Links */}
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

          {/* Column 2: Support / Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black mb-2">Support</h3>
            <Link
              href="/contact"
              className="text-sm text-black hover:underline"
            >
              Contact
            </Link>
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

          {/* Column 3: Social */}
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

        {/* Bottom Section */}
        <div className="border-t border-black pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex gap-8 text-sm">
              <span>Copyright © SHRAJ</span>
            </div>

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
