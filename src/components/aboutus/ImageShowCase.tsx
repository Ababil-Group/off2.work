import Image from "next/image";

export default function ImageShowcase() {
  return (
    <section className="bg-[#3E3F48] relative z-10 h-[650px] pt-15">
      <div className="max-w-[1250px] mx-auto relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Image */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden md:absolute md:bottom-16 md:left-10">
          <Image
            src="/images/Off2work/About/02.jpg"
            alt="Image 1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Center Image */}
        <div className="relative w-[80%] md:w-[500px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/images/Off2work/About/01.jpg"
            alt="Image 2"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Image */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden md:absolute md:top-16 md:right-10">
          <Image
            src="/images/Off2work/About/03.jpg"
            alt="Image 3"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="bg-[#83692c] w-full h-[130px] bottom-0 absolute -z-10"></div>
    </section>
  );
}
