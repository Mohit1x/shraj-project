"use client";

import {
  FaTruck,
  FaHeadset,
  FaMoneyBillWave,
  FaShoppingCart,
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: FaTruck,
      title: "FREE SHIPPING",
      description: "Free shipping on all order",
    },
    {
      icon: FaHeadset,
      title: "SUPPORT 24/7",
      description: "Support 24 hours a day",
    },
    {
      icon: FaMoneyBillWave,
      title: "MONEY RETURN",
      description: "Back guarantee under 5 days",
    },
    {
      icon: FaShoppingCart,
      title: "ORDER DISCOUNTS",
      description: "One every order over $150",
    },
  ];

  return (
    <div className="bg-[#2C318F] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <feature.icon size={48} className="text-[#d3686d]" />
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-wide text-[#d3686d]">
                {feature.title}
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
