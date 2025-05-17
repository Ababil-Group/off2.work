"use client";

import LogoGallery from "@/components/home/LogoGallary";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  File,
  HardHat,
  Leaf,
  Quote,
  Ship,
  Trees,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const list = [
  {
    text: "Off2 Work’s professional approach and expertise gave us the assurance we needed to confidently hire foreign workers for our business. We look forward to a long and fruitful collaboration.",
    name: "Marko Jurić",
    companyt: "ABC Solutions",
  },
  {
    text: "Our partnership with Off2 Work in hiring over 200 skilled workers from Nepal for our agricultural operations in 2022 was seamless and efficient. Their deep understanding of foreign employment processes made all the difference.",
    name: "Ana Petrović",
    companyt: "Green Harvest Ltd.",
  },
  {
    text: "Thanks to Off2 Work, we’ve resolved our staffing challenges with ease. After just one season, we’re confident in their ability to consistently provide motivated and reliable workers.",
    name: "Ivana Novak",
    companyt: "Family Farm Novak",
  },
  {
    text: "Off2 Work’s expertise simplified the recruitment process for us. Their professionalism and dedication make them stand out in this field",
    name: "Hrvoje Kovačić",
    companyt: "Kovačić Orchards",
  },
  {
    text: "The workers we hired through Off2 Work were diligent, dependable, and hardworking. Their step-by-step guidance was invaluable to ensuring smooth operations.",
    name: "Zoran Horvat",
    companyt: "Horvat Farms",
  },
  {
    text: "Off2 Work supported us throughout the entire process—from selecting candidates to managing documentation and providing post-arrival assistance. They’ve proven to be exceptional partners, and we continue to work with them successfully.",
    name: "Filip Matić",
    companyt: "NutriGrow Ltd.",
  },
];

export default function ReferencePageEnglish() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    {
      id: 1,
      title: "Talent Recruitment",
      icon: <Users className="w-8 h-8" />,
      description:
        "We conduct detailed interviews and assessments to ensure we find the right candidates. Only when we're confident in a match do we proceed with the hiring process.",
    },
    {
      id: 2,
      title: "Employment and Onboarding",
      icon: <Clipboard className="w-8 h-8" />,
      description:
        "Our support doesn't end with hiring. We remain by your side, acting as a bridge between you and your new employees to ensure a smooth transition.",
    },
    {
      id: 3,
      title: "Work Permits and Compliance",
      icon: <File className="w-8 h-8" />,
      description:
        "The process of bringing workers typically takes around 90 days. While we handle the logistics, certain steps are managed by government authorities in compliance with local laws.",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const industries = [
    {
      id: 1,
      title: "Agriculture",
      icon: <Leaf className="w-8 h-8" />,
      description:
        "We provide reliable workers for agriculture, crop farming, and livestock farming, supporting both family farms and business owners.",
      color: "from-green-100 to-green-50",
    },
    {
      id: 2,
      title: "Construction and Industry",
      icon: <HardHat className="w-8 h-8" />,
      description:
        "From carpenters and bricklayers to drivers and machine operators, we supply skilled workers for construction and industrial projects.",
      color: "from-amber-100 to-amber-50",
    },
    {
      id: 3,
      title: "Wood Industry",
      icon: <Trees className="w-8 h-8" />,
      description:
        "We help wood processing and manufacturing plants find qualified workers to meet their production needs.",
      color: "from-brown-100 to-brown-50",
    },
    {
      id: 4,
      title: "Shipbuilding",
      icon: <Ship className="w-8 h-8" />,
      description:
        "We recruit experienced welders and motivated workers for the shipbuilding industry.",
      color: "from-blue-100 to-blue-50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "Off2 Work's professional approach and expertise gave us the assurance we needed to confidently hire foreign workers for our business. We look forward to a long and fruitful collaboration.",
      name: "Marko Jurić",
      company: "ABC Solutions",
    },
    {
      text: "Our partnership with Off2 Work in hiring over 200 skilled workers from Nepal for our agricultural operations in 2022 was seamless and efficient. Their deep understanding of foreign employment processes made all the difference.",
      name: "Ana Petrović",
      company: "Green Harvest Ltd.",
    },
    {
      text: "Thanks to Off2 Work, we've resolved our staffing challenges with ease. After just one season, we're confident in their ability to consistently provide motivated and reliable workers.",
      name: "Ivana Novak",
      company: "Family Farm Novak",
    },
    {
      text: "Off2 Work's expertise simplified the recruitment process for us. Their professionalism and dedication make them stand out in this field.",
      name: "Hrvoje Kovačić",
      company: "Kovačić Orchards",
    },
    {
      text: "The workers we hired through Off2 Work were diligent, dependable, and hardworking. Their step-by-step guidance was invaluable to ensuring smooth operations.",
      name: "Zoran Horvat",
      company: "Horvat Farms",
    },
    {
      text: "Off2 Work supported us throughout the entire process—from selecting candidates to managing documentation and providing post-arrival assistance. They've proven to be exceptional partners, and we continue to work with them successfully.",
      name: "Filip Matić",
      company: "NutriGrow Ltd.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" min-h-screen pt-5">
      <div
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[500px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-screen-md h-[400px] mt-8 p-4">
          <p className="text-2xl  text-[#023a51] my-4">
            Client Success Stories
          </p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Just some of the companies that have trusted us.
          </p>
          <p className="text-xl  text-foreground-muted">
            Partnering with Off2 Work offers a simple, fast, and efficient way
            to access quality staff, saving you time and resources while
            providing a diverse pool of skilled candidates.
          </p>
        </div>
      </div>

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Clients&apos;{" "}
              <span className="text-blue-600">Experiences</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join the ranks of satisfied employers who have found success with
              Off2 Work
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div
              key={currentIndex}
              className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden transition-all duration-500"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <Quote className="absolute top-6 right-6 text-blue-100 text-6xl" />

              <div className="relative z-10">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                    <span>
                      <User />
                    </span>
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-blue-600">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronRight className="text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              href={"/en/contact"}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              Contact us!
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              We Guide You Through Every Step of the
              <span className="text-blue-600"> Hiring Process</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-[#023a51] mx-auto"></div>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Step Indicators */}
            <div className="flex lg:flex-col justify-center gap-4 mb-8 lg:mb-0">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-[#3E4247] text-white transform scale-110 shadow-lg"
                      : "bg-white text-[#023a51] border-2 border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  {activeStep > step.id ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : (
                    step.icon
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="relative h-[500px] md:h-64">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`absolute inset-0 p-6 bg-white rounded-xl shadow-md transition-all duration-500 ${
                      activeStep === step.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-[#3E4247] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 flex-1">{step.description}</p>
                      <div className="flex justify-end mt-4">
                        <span className="text-[#3E4247] font-medium">
                          Step {step.id}/3
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className={`px-6 py-2 rounded-lg cursor-pointer ${
                    activeStep === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                  disabled={activeStep === 3}
                  className={`px-6 py-2 rounded-lg cursor-pointer ${
                    activeStep === 3
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#3E4247] text-white hover:bg-[#3E4247]"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              We Find the <span className="text-blue-600">Ideal Staff</span> for
              Your Business
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized workforce solutions tailored to your industry needs
            </p>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                  hoveredCard === industry.id
                    ? "transform -translate-y-2 shadow-xl"
                    : ""
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-90`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div
                    className={`mb-6 p-4 rounded-full bg-white w-16 h-16 flex items-center justify-center ${
                      hoveredCard === industry.id ? "transform scale-110" : ""
                    } transition-transform duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <div
                    className={`h-1 w-12 ${
                      hoveredCard === industry.id
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    } transition-colors duration-300 mb-6`}
                  ></div>
                  <button
                    className={`self-start px-6 py-3 rounded-lg font-medium ${
                      hoveredCard === industry.id
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800 border border-gray-300"
                    } transition-all duration-300`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              href={"/en/industries"}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </div>
      <LogoGallery />
    </div>
  );
}
