"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-[1250px] mx-auto  text-gray-700 py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={140} height={40} />
          <p className="mt-4 text-base text-[#616e84]">
            Entrust your business to our experts and, with their help, evaluate
            how to best organize the work of foreign workers in your company
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex text-xl  justify-evenly space-y-2 text-[#063556]">
          <div className="flex flex-col space-y-2">
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
              Industries
            </Link>
            <Link
              href="/reference"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Reference
            </Link>
            <Link
              href="/about-us"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link
              href="/edit"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Offices
            </Link>
            <Link
              href="/faq"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl text-[#023a51] font-semibold">
            Contact Information
          </h3>
          <p className="text-lg text-[#616e84]">Stjepana Radića 38</p>
          <p className="text-lg text-[#616e84]">Virovitica 33000</p>

          <div className="mt-4 flex flex-col space-y-2 max-w-[250px]">
            <div className="flex items-center bg-gray-100 p-3 rounded-lg text-[#616e84]  hover:text-white hover:bg-[#063556]">
              <Phone className="w-4 h-4  mr-2" />
              <span className="">033 621 441</span>
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-lg text-[#616e84]  hover:text-white hover:bg-[#063556]">
              <Mail className="w-4 h-4  mr-2" />
              <span className="">info@thconsulting.hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-300 text-sm text-gray-500 pt-4">
        <p>
          © 2025 • TH Consulting • Powered by{" "}
          <Link href="#" className="text-[#063556] hover:underline">
            E Projekt
          </Link>
        </p>
        <Link href="#top" className="block text-[#063556] hover:underline">
          Povratak na vrh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
