import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
// bg-[#023a51]/10
export default function WorkerSection() {
  const features = [
    "We cooperate with partners from Nepal, India, Bangladesh, Uzbekistan, Vietnam, and the Philippines for recruitment of the best candidates according to your wishes and needs.",
    "We handle all necessary administrative procedures for employment, such as document translation, visa issuance and work permits, employment contracts.",
    "We organize the transport of workers to Croatia and manage the adaptation of workers in your company.",
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
            Offer of seasonal workers from Serbia
          </h2>
          <p className="mb-6 text-lg">
            We organize and offer seasonal workers from Serbia.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Send inquiry
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
        <div className="md:w-[400px] text-center md:text-start mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-[#023a51]">
            Reliable partner for improving productivity and competitiveness.
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            We manage the process of hiring foreign workers for agriculture,
            tourism, production, industry, construction and civil engineering.
            For your needs, our office in Dubai offers selection services in
            Arab countries.
          </p>

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 mb-2 shadow py-3"
            >
              <CheckCircle2 className="text-primary w-7 h-7 flex-shrink-0 mx-2" />
              <p className="text-muted-foreground text-base">{feature}</p>
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
          <h2 className="text-3xl font-bold mb-4">
            Offer live interview service
          </h2>
          <p className="mb-6 text-lg">
            We organize and offer the live interview service in the country of
            residence of the worker.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/3 flex  items-center justify-between md:items-end">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <Button className="bg-[#023a51] hover:bg-[#023a51]/80 text-white px-6 py-3 rounded-lg mb-4">
              Send inquiry
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
