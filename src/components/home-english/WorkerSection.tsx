import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
// bg-[#023a51]/10
export default function WorkerSection() {
  const features = [
    "We collaborate with trusted partners in countries like Nepal, India, Bangladesh, Uzbekistan, Vietnam, and the Philippines to source top talent that meets your specific requirements.",
    "Our end-to-end services include document translation, visa and work permit processing, and employment contract management.",
    "We also handle worker transportation and ensure smooth onboarding and integration into your company.",
  ];
  return (
    <div className="w-full  relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/worker-bg.png" alt="Background" fill priority />
      </div>
      <section className="bg-[#053b60]/90  relative  z-20 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center ">
          <h2 className="text-3xl font-bold mb-4">
            Seasonal Workers from Our Network
          </h2>
          <p className="mb-6 text-lg">
            We specialize in providing skilled seasonal workers from our
            extensive network, ensuring your business has the manpower it needs
            during peak seasons.
          </p>
          <Button className="bg-gray-800 hover:bg-blue-600 text-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-white px-6 py-3 rounded-lg uppercase">
            Get in Touch
          </Button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/images/factory-workers-greeting-each-other-successful-teamwork-Large-scaled.jpeg" // Replace with your actual image path
            alt="Sezonski radnici"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="  relative z-20 text-white py-12 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-evenly">
        {/* Right Image */}
        <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0 ">
          <Image
            src="/images/Velika-stavka-pexels-grape-things.jpeg" // Replace with your actual image path
            alt="Sezonski radnici"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-[400px] text-center md:text-start mt-8 md:mt-0 ">
          <h2 className="text-3xl font-bold mb-4 text-[#023a51]">
            Your Partner in Boosting Productivity and Growth
          </h2>
          <p className="mb-6 text-lg text-gray-800 bg-gray-100/30 rounded-md">
            At Off2 Work, we streamline the hiring of foreign workers for
            industries like agriculture, tourism, manufacturing, construction,
            and more. For clients in the Gulf region, our dedicated team offers
            tailored recruitment solutions.
          </p>

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 mb-2 shadow py-3 bg-white/20 rounded-md relative z-20"
            >
              <CheckCircle2 className="text-primary w-7 h-7 flex-shrink-0 shadow md:shadow-none shadow-gray-700 mx-2" />
              <p className="text-gray-900 text-base">{feature}</p>
            </div>
          ))}
          {/* 
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Pošalji nam upit
          </Button> */}
        </div>
      </section>
      <section className="relative z-20 bg-gradient-to-b from-red-700 to-pink-500 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Live Interview Service</h2>
          <p className="mb-6 text-lg">
            We offer live interview services in the worker’s home country,
            ensuring you can connect with potential candidates directly and make
            informed hiring decisions.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/3 flex  items-center justify-between md:items-end">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <Button className="bg-[#023a51] hover:bg-[#023a51]/80 text-white px-6 py-3 uppercase rounded-lg mb-4">
              Get in Touch
            </Button>
          </div>

          {/* Image */}
          <Image
            src="/images/young-people-making-podcast.jpeg" // Replace with actual image path
            alt="Live Interview"
            width={200}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
