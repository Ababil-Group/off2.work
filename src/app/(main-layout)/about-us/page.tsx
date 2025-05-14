import ImageShowcase from "@/components/aboutus/ImageShowCase";
import React from "react";

export default function AboutUsPage() {
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
          <p className="text-4xl  text-[#023a51] my-4">O nama</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Agencija koja brine za vaše poslovanje.
          </p>
          <p className="text-xl  text-foreground-muted">
            Pouzdano i sigurno rješenje za svoje poslovanje prepustite našim
            stručnjacima
          </p>
        </div>
      </div>
      <ImageShowcase />
    </div>
  );
}
