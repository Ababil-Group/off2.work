import React from "react";

export default function ServicesIdPage() {
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
          <p className="text-2xl  text-[#023a51] my-4">
            Posredovanje pri zapošljavanju
          </p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Vodimo cjelokupni proces zapošljavanja stranih radnika.
          </p>
          <p className="text-xl  text-foreground-muted">
            Povjerite nam zadatak potrage, selekcije i novačenja motiviranog i
            kvalitetnog kadra prema vašim potrebama i željama.
          </p>
        </div>
      </div>
    </div>
  );
}
