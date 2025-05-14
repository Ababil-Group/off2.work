import React from "react";
import { MapPin, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
            <MapPin className="text-[#023a51] w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Office</h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>Stjepana Radica 38, Virovitica</p>
            <p>Hrvatska</p>
            <p className="mt-2">The Meydan Hotel, Grandstand,</p>
            <p>6th floor, Meydan Road, Nad Al Sheba</p>
            <p>Dubai, U.A.E</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
            <Mail className="text-[#023a51] w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact</h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>info@thconsulting.hr</p>
            <p>033 621 441</p>
          </div>
        </div>

        {/* Radno vrijeme (Working Hours) */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
            <Clock className="text-[#023a51] w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Working Hours
          </h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>Monday - Friday</p>
            <p>8.00 - 16.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
