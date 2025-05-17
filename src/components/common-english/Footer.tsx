"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-gray-100 ">
      <div className="max-w-screen-2xl mx-auto  py-8 px-6 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <Image
              src="/images/off2worklogo.png"
              alt="Logo"
              width={140}
              height={40}
            />
            <p className="mt-4 text-xl text-[#262930]">
              Trust Off2 Work to Optimize Your Workforce
            </p>
            <p className="mt-1 text-base text-[#262930]">
              Rely on our expertise to help you organize and manage foreign
              workers efficiently, ensuring your business thrives.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex text-xl justify-evenly gap-4 space-y-2 text-[#063556]">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">Quick Links</h2>

              <div className="flex flex-col space-y-4">
                <Link
                  href="/services"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Services
                </Link>
                <Link
                  href="/industries"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Industries We Serve
                </Link>
                <Link
                  href="/reference"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Client Success Stories
                </Link>
                <Link
                  href="/about-us"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">Support</h2>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/faq"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  FAQs
                </Link>
                <Link
                  href="/edit"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Contact Information
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-2">
            <h3 className="text-2xl text-[#023a51] font-semibold">Addresses</h3>
            <p className="text-lg font-bold text-[#616e84] ">Romania Office:</p>
            <p className="text-base text-[#262930]">
              Municipiul Ploiesti, Strada MIHAI BRAVU, Nr. 239, Bloc C4, Ap.71,
              Judet Prahova, Romania
            </p>
            <p className="text-lg text-[#616e84] font-bold">Dubai Office:</p>
            <p className="text-base text-[#262930]">
              The Meydan Hotel, Grandstand, 6th Floor, Meydan Road, Nad Al
              Sheba, Dubai, UAE
            </p>
            <div className="mt-4 flex flex-col space-y-2 max-w-[250px]">
              <div className="flex items-center bg-gray-100 p-3 rounded-lg text-[#262930]  hover:text-white hover:bg-[#063556]">
                <Phone className="w-4 h-4  mr-2" />
                <span className="">+123-234-1234</span>
              </div>
              <div className="flex items-center bg-gray-100 p-3 rounded-lg text-[#262930]  hover:text-white hover:bg-[#063556]">
                <Mail className="w-4 h-4  mr-2" />
                <span className="">info@off2.work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex items-center justify-between text-center border-t border-gray-300 text-sm text-gray-500 pt-4">
          <p>
            ©2025 • Off2 Work • Powered by
            <Link href="#" className="text-[#063556] hover:underline">
              Innovation
            </Link>
          </p>
          <Link href="#top" className="block text-[#063556] hover:underline">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
