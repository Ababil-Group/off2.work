import ContactSection from "@/components/home/ContactSection";
import LogoGallery from "@/components/home/LogoGallary";
import ServicesSection from "@/components/industries/ServicesSection";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function IndustriesPage() {
  const services = [
    "Radnici u poljoprivredi i stočarstvu",
    "Vozači gotovo svih kategorija",
    "Pomoćno osoblje",
  ];
  const services2 = [
    "Radnici na pilani",
    "Radnici u proizvodnji namještaja",
    "Skladištari i viličaristi",
  ];
  const services3 = [
    "Armirači, fasaderi, zidari, krovopokrivači, hidroizolateri, soboslikari, keramičari, tesari",
    "Viličaristi i skladištari",
    "Rukovatelji građevinskim strojevima i vozači gotovo svih kategorija",
  ];
  const services4 = [
    "Zavarivači, bravari, varioci",
    "Viličaristi i vozači",
    "Rukovatelji građevinskim strojevima",
  ];
  const services5 = [
    "Kuhari, bariste i konobari",
    "Sobarice, čistačice",
    "Njegovatelji, pomoćno osoblje",
  ];
  const services6 = [
    "Radnici u preradi, proizvodnji, prehrambenoj industriji",
    "Radnici u tekstilnoj industriji",

    "Viličaristi, skladištari, dostavljači",
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
          <p className="text-2xl  text-[#023a51] my-4">Područja rada</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Pronalazimo idealan kadar za vašu djelatnost.
          </p>
          <p className="text-xl  text-foreground-muted">
            Povjerite nam zadatak potrage, selekcije i novačenja radnika
            kvalificiranih za rad u vašoj industriji
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-white gap-4 mt-20 -mb-10">
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow">
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Poljoprivreda.
          </h2>
          <p className="text-gray-600 mb-6">
            Za rad u poljoprivredi, ratarstvu i stočarstvu OPG-ovim i
            gospodarstvenim osobama osiguravamo pouzdane i motivirane strane
            radnike.
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
            Drvna industrija.
          </h2>
          <p className="text-gray-600 mb-6">
            Uz našu pomoć i pomoć naših inozemnih partnera mnogi prerađivački i
            proizvodni pogoni drvne industrije pronašli su pouzdane radnike
            kvalificirane za zadatke koji su im povjereni.
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
            Građevina i industrija.
          </h2>
          <p className="text-gray-600 mb-6">
            Kvalificirane radnike za poslove u građevini i inustriji prvenstveno
            osiguravamo putem naših pouzdanih partnera iz Uzbekistana.
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
            Brodogradnja.
          </h2>
          <p className="text-gray-600 mb-6">
            Pronalazimo zavarivače i motivirane radnike u brodogradnji
            kvalificirane za zadatke koji su im povjereni.
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
          <h2 className="text-3xl font-bold text-[#003459] mb-4">
            Turistički sektor.
          </h2>
          <p className="text-gray-600 mb-6">
            Regrutiramo kvalificirane radnike za bilo koju poziciju u turizmu i
            ugostiteljstvu.
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
            Proizvodni sektor.
          </h2>
          <p className="text-gray-600 mb-6">
            Za domaće gospodarstvenike uz pomoć naših pouzdanih partnera
            regrutiramo radnike u prehrambenoj i prerađivačkoj industriji te
            poljoprivredi iz svih zemalja s kojima surađujemo.
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
        Samo neke od kompanija koje su nam povjerile svoje povjerenje:
      </div>
      <ServicesSection />
      <LogoGallery />
      <ContactSection />
    </div>
  );
}
