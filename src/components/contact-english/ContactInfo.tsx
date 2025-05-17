import React from "react";
import { MapPin, Clock, MapPinCheckInside } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Address */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
            <MapPin className="text-[#023a51] w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Office</h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p className="text-lg font-bold text-gray-800 flex items-center gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              Romania Office:
            </p>
            <Link href={""} className="text-base text-gray-700">
              HQ {">"} Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc
              C4, Ap. 71, Judet Prahova
            </Link>
            <p className="text-lg text-gray-800 font-bold flex items-center mt-2 gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              New Zealand:
            </p>
            <Link href={""} className="text-base text-gray-700">
              Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037
            </Link>

            <p className="text-lg text-gray-800 font-bold flex items-center mt-2 gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              Australia:
            </p>
            <Link href={""} className="text-base text-gray-700">
              Level 25, 108 St Georges Terrace, Perth WA 6000
            </Link>
          </div>
        </div>

        {/* Contact */}
        {/* <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
            <Mail className="text-[#023a51] w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact</h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>info@off2.work</p>
            <p>+123-234-1234</p>
          </div>
        </div> */}

        {/* Radno vrijeme (Working Hours) */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-blue-50 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
            <Clock className="text-[#023a51] w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Working Hours
          </h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>Monday – Friday</p>
            <p>8:00 AM – 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
