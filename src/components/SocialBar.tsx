import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

export default function SocialBar() {
  return (
    <div className="bg-gray-800 text-white py-3 md:py-5 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-2">
          {/* First Row - Title */}
          <div className="text-center px-2">
            <h1 className="font-bold text-base sm:text-lg leading-tight">Manufacturers & Exporter</h1>
          </div>
          
          {/* Second Row - Contact Info */}
          <div className="flex flex-col items-center justify-center gap-2 text-xs sm:text-sm">
            <a href="tel:+918956981462" className="hover:text-[#9697d1] cursor-pointer flex items-center gap-1.5 transition-colors">
              <FiPhone className="text-sm flex-shrink-0" />
              <span className="truncate">+91 8956981462</span>
            </a>
            <a href="mailto:sales1@shrajindustries.com" className="hover:text-[#9697d1] cursor-pointer flex items-center gap-1.5 transition-colors max-w-full">
              <CiMail className="text-sm flex-shrink-0" />
              <span className="truncate text-center">sales1@shrajindustries.com</span>
            </a>
          </div>
          
          {/* Third Row - Social Media & Translate */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <div className="flex items-center gap-3">
              <span className="cursor-pointer hover:text-[#0279DE] transition-colors text-sm">
                <FaFacebookF />
              </span>
              <span className="cursor-pointer hover:text-black transition-colors text-sm">
                <FaXTwitter />
              </span>
              <span className="cursor-pointer hover:text-[#DE368D] transition-colors text-sm">
                <FaInstagram />
              </span>
            </div>
            <div className="h-4 w-[1px] bg-gray-600" />
            <div id="google_translate_element" className="text-xs"></div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6">
          <div className="h-10 w-[1px] bg-gray-700 hidden lg:block" />
          
          <h1 className="font-bold text-xl whitespace-nowrap">Manufacturers & Exporter</h1>
          
          <div className="h-10 w-[1px] bg-gray-700 hidden lg:block" />
          
          <a href="tel:+918956981462" className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2 whitespace-nowrap transition-colors">
            <FiPhone />
            +91 8956981462
          </a>
          
          <div className="h-10 w-[1px] bg-gray-700 hidden xl:block" />
          
          <a href="mailto:sales1@shrajindustries.com" className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2 whitespace-nowrap transition-colors">
            <CiMail />
            <span className="hidden lg:inline">sales1@shrajindustries.com</span>
            <span className="lg:hidden">Email</span>
          </a>
          
          <div className="h-10 w-[1px] bg-gray-700 hidden xl:block" />
          
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-[#0279DE] transition-colors">
              <FaFacebookF />
            </span>
            <span className="cursor-pointer hover:text-black transition-colors">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer hover:text-[#DE368D] transition-colors">
              <FaInstagram />
            </span>
          </div>
          
          <div className="h-10 w-[1px] bg-gray-700 hidden lg:block" />
          
          <div id="google_translate_element"></div>
          
          <div className="h-10 w-[1px] bg-gray-700 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}