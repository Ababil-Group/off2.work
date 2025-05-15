import ContactSection from "@/components/home-english/ContactSection";
import LogoGallery from "@/components/home/LogoGallary";
import ServicesSection from "@/components/industries-english/ServicesSection";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function IndustriesEnglishPage() {
  const services = [
    "Skilled workers in agriculture and livestock farming.",
    "Drivers for various categories.",
    "Support staff to assist with daily operations.",
  ];
  const services2 = [
    "Sawmill workers",
    "Furniture manufacturing workers",
    "Warehouse workers and forklift operators",
  ];
  const services3 = [
    "Reinforcement workers, masons, roofers, waterproofers, and painters.",
    "Forklift drivers and warehouse staff.",
    "Construction machinery operators and drivers of all categories.",
  ];
  const services4 = [
    "Welders, locksmiths, metalworkers",
    "Maids and cleaning staff.",
    "Caregivers and support personnel.",
  ];
  const services5 = [
    "Chefs, baristas, and waiters",
    "Housekeepers, cleaners",
    "Caregivers, support staff",
  ];
  const services6 = [
    "Workers in food processing and manufacturing.",
    "Textile industry specialists.",
    "Forklift operators, warehouse staff, and delivery personnel.",
  ];

  return (
    <div className=" min-h-screen pt-5">
      <div
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[400px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-[500px] h-[400px] mt-8">
          <p className="text-2xl text-[#023a51] my-4">Industries We Serve</p>
          <p className="text-5xl text-[#023a51] font-bold my-4">
            We specialize in finding the ideal staff for your business.
          </p>
          <p className="text-xl text-foreground-muted">
            Trust us to search, select, and recruit qualified workers tailored
            to your industry’s needs.
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-white gap-4 mt-20 -mb-10">
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Agriculture.
          </h2>
          <p className="text-gray-600 mb-6">
            We provide reliable and motivated foreign workers for agriculture,
            crop farming, and livestock farming, supporting both family farms
            and business owners.
          </p>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
              >
                <ChevronRight className="mr-2 text-red-700" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/Velika-stavka-pexels-josh-hild.jpeg"
            alt="Apples in wooden box"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      <div className="bg-[#063556] h-[180px]" />
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row  gap-4 -mt-10 mb-30">
        <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/Velika-stavka-pexels-bram-van-egmond.jpeg"
            alt="Apples in wooden box"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Wood industry.
          </h2>
          <p className="text-gray-600 mb-6">
            Through our network of trusted partners, we supply qualified workers
            for wood processing and manufacturing plants.
          </p>

          <div className="space-y-4">
            {services2.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
              >
                <ChevronRight className="mr-2 text-red-700" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-white gap-4 mt-30 -mb-10">
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Construction and industry.
          </h2>
          <p className="text-gray-600 mb-6">
            We provide skilled workers for construction and industrial projects, sourced from reliable partners in countries like Uzbekistan.
          </p>

          <div className="space-y-4">
            {services3.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
              >
                <ChevronRight className="mr-2 text-red-700" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/Velika-stavka-pexels-rodolfo-quiros.jpeg"
            alt="Apples in wooden box"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      <div className="bg-[#063556] h-[180px]" />
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row  gap-4 -mt-10 mb-30">
        <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/Velika-stavka-pexels-danial-abdullah.jpeg"
            alt="Apples in wooden box"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Shipbuilding.
          </h2>
          <p className="text-gray-600 mb-6">
            We recruit experienced welders and motivated workers for the shipbuilding industry.
          </p>

          <div className="space-y-4">
            {services4.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
              >
                <ChevronRight className="mr-2 text-red-700" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-white gap-4 mt-30 -mb-10">
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">Tourism and Hospitality</h2>
          <p className="text-gray-600 mb-6">
            We supply qualified workers for all positions in tourism and catering.
          </p>

          <div className="space-y-4">
            {services5.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
              >
                <ChevronRight className="mr-2 text-red-700" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/Velika-stavka-pexels-liliana-drew.jpeg"
            alt="Apples in wooden box"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      <div className="bg-[#063556] h-[180px]" />
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row  gap-4 -mt-10 mb-30">
        <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/Velika-stavka-pexels-tiger-lily.jpeg"
            alt="Apples in wooden box"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Production.
          </h2>
          <p className="text-gray-600 mb-6">
            With the help of our reliable partners, we recruit workers in the
            food and processing industry and agriculture from all the countries
            with which we cooperate.
          </p>

          <div className="space-y-4">
            {services6.map((service, index) => (
              <div
                key={index}
                className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
              >
                <ChevronRight className="mr-2 text-red-700" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#063556] h-[100px] text-center text-white flex items-center justify-center">
        Just some of the companies that have entrusted us with their trust:
      </div>
      <ServicesSection />
      <LogoGallery />
      <ContactSection />
    </div>
  );
}
