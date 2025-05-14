import Image from "next/image";

export default function ImageShowcase() {
  return (
    <section className="bg-[#063556] relative z-10 h-[650px] pt-15">
      <div className="max-w-[1250px] mx-auto relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Image */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden md:absolute md:bottom-16 md:left-10">
          <Image
            src="/images/Velika-stavka-pexels-tima-miroshnichenko-6508835-400x267.jpeg"
            alt="Cleaning grid"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative w-[80%] md:w-[500px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/images/Velika-stavka-pexels-ketut-subiyanto.jpeg"
            alt="Person with coffee"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden md:absolute md:top-16 md:right-10">
          <Image
            src="/images/Velika-stavka-pexels-tima-miroshnichenko.jpeg"
            alt="Painting ceiling"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="bg-red-500 w-full h-[130px] bottom-0 absolute -z-10"></div>
    </section>
  );
}
