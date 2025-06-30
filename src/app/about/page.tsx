"use client";

import ImageSlider from "@/components/ImageSlider";
import "swiper/css";

import Image from "next/image";
import AboutFeatureSection from "@/components/AboutFeatureSection";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#2C318F]">
        <div className="flex flex-col gap-10 max-w-7xl mx-auto text-white py-10 md:py-10 px-4 md:px-0">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-slate-300 text-lg md:text-xl font-nunito">
              About Us
            </h1>
            <p className="text-[24px] md:text-2xl font-bold text-[#d3686d]">
              CRAFTING EXCELLENCE, SHAPING TOMORROW
            </p>
          </div>
          <div className="px-3 max-w-[90ch] mx-auto">
            <p className="text-slate-300 text-sm text-justify md:text-lg md:text-center md:text-balance">
              Established In 2016, Shraj Industries Private Limited Is A Leading
              Manufacturer Of High-Quality Autoclaves & Sterilizers, Including
              Vertical, Horizontal, Cylindrical, And Rectangular Autoclaves,
              Along With Mortuary Freezers, Industrial Ovens, And Industrial
              Batch Ovens. At Shraj Industries, We Are Committed To Delivering
              Exceptional Quality Products That Meet And Exceed Customer
              Expectations. Our Operations Are Driven By Integrity,
              Transparency, And Ethical Business Practices, Ensuring Long-Term
              And Trusted Relationships With Our Clients Worldwide. Our
              Continued Success And Growth Are Made Possible Through The
              Visionary Leadership Of Mr. Shravan Chauhan, Whose Guidance Has
              Been Instrumental In Driving Our Innovation, Excellence, And
              Market Expansion.
            </p>
          </div>

          <AboutFeatureSection />
        </div>
      </div>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-16">
          {/* Reusable Card */}
          {[
            {
              title: "Quality Assurance",
              image: "/about-img-1.jpg",
              content: (
                <>
                  <span className="font-semibold text-gray-700">
                    Shraj Industries Private Limited
                  </span>{" "}
                  keep a strict vigil on each manufacturing process. Our product
                  passes through regular quality checks, which ensures its
                  performance and efficiency. Right from the procurement of raw
                  material to the final finished product, our quality
                  controllers ensures that only a defect free range reaches to
                  the final destination.
                </>
              ),
            },
            {
              title: "Our Expertise:",
              image: "/about-img-3.jpg",
              content: (
                <ul className="space-y-2 mt-4">
                  {[
                    "With 7 years of experience in oven manufacturing",
                    "High-quality products",
                    "Dedicated customer support",
                    "Installation",
                    "Custom oven design solutions tailored to client needs",
                    "On-time delivery with consistent service reliability",
                  ].map((tool, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{tool}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Why Us ?",
              image: "/about-img-2.png",
              content: (
                <>
                  <p className="text-gray-600 mb-4 font-medium">
                    Some of the factors, which gives us a competitive edge over
                    other market players are :
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Premium quality products",
                      "Capacious warehouse",
                      "Wide distribution net worth",
                      "Competitive prices.",
                      "Prompt Service",
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ),
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden min-h-[400px] md:min-h-[350px]"
            >
              {/* Image */}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={`about-img-${index}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Box */}
              <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md md:shadow-none md:rounded-none md:p-8 md:ml-[-40px] z-10 flex flex-col justify-center min-h-[300px] md:min-h-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <div className="text-gray-600 leading-relaxed flex-grow">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="flex flex-col gap-8 mt-10">
        <div className="text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl text-[#1C398E] leading-snug break-words font-bold font-nunito">
            Certifications & Affiliations
          </h2>
          <div className="h-[5px] w-[30%] md:w-[10%] bg-[#1E2069] mx-auto" />
        </div>
        <div className="w-full py-8 bg-[#E5E7EB]">
          <ImageSlider />
        </div>
      </section>
    </div>
  );
}
