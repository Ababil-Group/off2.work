import LogoGallery from "@/components/home/LogoGallary";
import React from "react";

export default function ReferencePageEnglish() {
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
        <div className="text-start max-w-[500px] h-[400px] mt-8">
          <p className="text-2xl  text-[#023a51] my-4">Reference</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Just some of the companies that have entrusted us with their trust.
          </p>
          <p className="text-xl  text-foreground-muted">
            Partnering with our agency provides a simple and quick way to access
            a quality workforce, saving time and resources, and providing a
            database of candidates with diverse profiles.
          </p>
        </div>
      </div>
      <LogoGallery />
    </div>
  );
}
