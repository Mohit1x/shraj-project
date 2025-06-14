"use client";

import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { LiaAddressCardSolid } from "react-icons/lia";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#2E2F91] p-6 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        {/* Left Side - Contact Info */}
        <div className="text-white md:p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

          <p className="mb-6 w-full md:w-[85%] text-justify leading-relaxed">
            Not sure what you need? The team at <strong>Shraj</strong> will be
            happy to listen to you and suggest event ideas you hadn’t
            considered.
          </p>

          {/* Separator */}
          <div className="w-full h-px bg-white/30 mb-6" />

          <div className="space-y-6 px-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <LiaAddressCardSolid size={24} className="min-w-[24px]" />
              <p className="text-sm leading-relaxed">
                Unit No.209, Sheetal Business Center,
                <br />
                Chinchpada, Vasai East, Palghar,
                <br />
                Maharashtra - 401028.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <MdEmail size={24} className="min-w-[24px]" />
              <div className="flex flex-col text-sm">
                <span>sales1@shrajindustries.com</span>
                <span>info@shrajindustries.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <BsFillTelephoneFill size={20} className="min-w-[20px]" />
              <div className="flex flex-col text-sm">
                <span>Support: +91 8956981462</span>
                <span>Support: +91 8956981465</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Embedded Google Map */}
        <div className="md:w-1/2 h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.068563397483!2d72.8509345759707!3d19.409443341418587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9404f8eedef%3A0x167e08ad1fb88d2d!2sSheetal%20Business%20Centre!5e0!3m2!1sen!2sin!4v1748870432303!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
