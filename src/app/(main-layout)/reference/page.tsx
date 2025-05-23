import LogoGallery from "@/components/home/LogoGallary";
import React from "react";

export default function ReferencePage() {
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
            Samo neke od kompanija koje su nam povjerile svoje povjerenje.
          </p>
          <p className="text-xl  text-foreground-muted">
            Suradnja s agencijom za zapošljavanje nudi jednostavan i brz put do
            kvalitetnog kadra, uštedu vremena i resursa te bazu kandidata raznih
            profila
          </p>
        </div>
      </div>
      <LogoGallery />
    </div>
  );
}
