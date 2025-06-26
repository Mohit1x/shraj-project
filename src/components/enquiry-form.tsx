"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen md:h-auto bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Company Information */}
          <div className="space-y-8">
            {/* Office Address */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Office Address
              </h2>

              <div className="space-y-2 text-gray-600">
                <p>
                  Unit No.209, Sheetal Business Center, Chinchpada, Vasai East,
                </p>
                <p> Palghar, Maharashtra - 401028.</p>
                <p className="mt-4">
                  <span className="font-medium">Phone :</span>+91 8956981462 /
                  +91 8956981465
                </p>
                <p>
                  <span className="font-medium">Email :</span>{" "}
                  <a
                    href="mailto:sales1@shrajindustries.com"
                    className="text-red-500 hover:underline"
                  >
                    sales1@shrajindustries.com
                  </a>
                  {" / "}
                  <a
                    href="mailto:info@shrajindustries.com"
                    className="text-red-500 hover:underline"
                  >
                    info@shrajindustries.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium text-red-500 mb-6">
              Please fill the below form with your query
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="companyName" className="text-gray-600">
                  Name of Company : <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contactPerson" className="text-gray-600">
                  Name of Contact Person :{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactPerson"
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) =>
                    handleInputChange("contactPerson", e.target.value)
                  }
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-gray-600">
                  Address / City / Location :{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e: { target: { value: string } }) =>
                    handleInputChange("address", e.target.value)
                  }
                  className="mt-2 min-h-[100px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="country" className="text-gray-600">
                  Country : <span className="text-red-500">*</span>
                </Label>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-600">
                  Tel. No. / Mobile No. :{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-600">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
