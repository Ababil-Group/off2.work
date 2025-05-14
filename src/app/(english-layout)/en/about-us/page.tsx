import ImageShowcase from "@/components/aboutus/ImageShowCase";
import React from "react";

export default function AboutUsPageEnglish() {
  return (
    <div className=" min-h-screen pt-4">
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
          <p className="text-4xl  text-[#023a51] my-4">About Us</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            An agency that takes care of your business.
          </p>
          <p className="text-xl  text-foreground-muted">
            Leave a reliable and safe solution for your business to our experts
          </p>
        </div>
      </div>
      <ImageShowcase />
    </div>
  );
}
