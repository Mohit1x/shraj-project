import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

export default function SocialBar() {
  return (
    <div className="bg-gray-800 text-white py-5 w-full">
      {/* desktop */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap md:flex-nowrap justify-between gap-5 px-4 md:px-0">
          <div className="h-10 w-[1px] bg-gray-700 hidden md:block" />
          <h1 className="font-bold text-xl">Manufacturers & Exporter</h1>
          <div className="h-10 w-[1px] bg-gray-700 hidden md:block" />
          <h1 className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2">
            <span>
              <FiPhone />
            </span>{" "}
            +91 8956981462
          </h1>
          <div className="h-10 w-[1px] bg-gray-700 hidden md:block" />
          <h1 className="hover:text-[#9697d1] cursor-pointer flex items-center gap-2">
            <span>
              <CiMail />
            </span>
            sales1@shrajindustries.com
          </h1>
          <div className="h-10 w-[1px] bg-gray-700 hidden md:block" />
          <div className="flex items-center gap-5">
            <span className="cursor-pointer hover:text-[#0279DE]">
              <FaFacebookF />
            </span>
            <span className="cursor-pointer hover:text-black">
              <FaXTwitter />
            </span>
            <span className="cursor-pointer hover:text-[#D94164]">
              <FaInstagram />
            </span>
          </div>
          <div className="h-10 w-[1px] bg-gray-700 hidden md:block" />
          <div id="google_translate_element"></div>
          <div className="h-10 w-[1px] bg-gray-700 hidden md:block" />
        </div>
      </div>
    </div>
  );
}
