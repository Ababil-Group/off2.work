"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Dynamically set video source to ensure correct path
    setVideoSrc("/Th-consulting-video.mp4");
  }, []);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center my-8">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {videoSrc && (
          <>
            <source src={videoSrc} type="video/mp4" />
            <source src="/Th-consulting-video.webm" type="video/webm" />
          </>
        )}
        Your browser does not support the video tag.
      </video>

      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg-removebg-preview.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-50 z-10"
        />
      </div>

      {/* Darker Overlay for Contrast */}
      <div className="absolute inset-0 bg-[#023a51]/60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 text-start  text-white px-4 max-w-[700px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Connecting Businesses with Exceptional Global Talent
        </h1>
        <p className="mt-4 text-lg">
          Simplify your hiring process with Off2 Work. From sourcing top talent
          to handling work permits and immigration, we provide reliable,
          end-to-end workforce solutions tailored to your needs.
        </p>

        <button className="mt-6 px-6 py-3 bg-[#023a51] hover:bg-[#642D91]/60 hover:shadow-xl uppercase font-semibold cursor-pointer text-white rounded-lg">
          Start Your Journey with Us
        </button>
      </div>
    </section>
  );
}
