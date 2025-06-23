import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

export default function SocialBar() {
  return (
    <div className="bg-gray-800 text-white py-5 w-full">
      {/* mobile */}
      <div className="w-full max-w-7xl mx-auto md:hidden">
        <div className="flex flex-col items-center justify-between gap-5">
          <h1 className="font-bold text-xl">Manufacturers & Exporter</h1>
          <h1 className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2">
            <span>
              <FiPhone />
            </span>{" "}
            +91 8956981462
          </h1>
          <h1 className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2">
            <span>
              <CiMail />
            </span>
            sales1@shrajindustries.com
          </h1>
          <div className="flex items-center gap-5">
            <span className="cursor-pointer hover:text-[#0279DE]">
              <FaFacebookF />
            </span>
            <span className="cursor-pointer hover:text-black">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer hover:text-[]">
              <FaInstagram />
            </span>
          </div>
          <div id="google_translate_element"></div>
        </div>
      </div>
      {/* desktop */}
      <div className="w-full max-w-7xl mx-auto hidden md:block">
        <div className="flex items-center justify-between gap-5">
          <div className="h-10 w-[1px] bg-gray-700" />
          <h1 className="font-bold text-xl">Manufacturers & Exporter</h1>
          <div className="h-10 w-[1px] bg-gray-700" />
          <h1 className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2">
            <span>
              <FiPhone />
            </span>{" "}
            +91 8956981462
          </h1>
          <div className="h-10 w-[1px] bg-gray-700" />
          <h1 className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2">
            <span>
              <CiMail />
            </span>
            sales1@shrajindustries.com
          </h1>
          <div className="h-10 w-[1px] bg-gray-700" />
          <div className="flex items-center gap-5">
            <span className="cursor-pointer hover:text-[#0279DE]">
              <FaFacebookF />
            </span>
            <span className="cursor-pointer hover:text-black">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer hover:text-[]">
              <FaInstagram />
            </span>
          </div>
          <div className="h-10 w-[1px] bg-gray-700" />
          <div id="google_translate_element"></div>
          <div className="h-10 w-[1px] bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
