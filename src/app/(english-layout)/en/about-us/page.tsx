import ImageShowcase from "@/components/aboutus/ImageShowCase";
import LogoGallery from "@/components/home-english/LogoGallary";
import { ArrowRight, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const team = [
//   {
//     avatar: "/images/up3.avif",
//     name: "Ivan Suhanek",
//     title: "Chief Executive Officer",
//   },
//   {
//     avatar: "/images/up6.avif",
//     name: "Ivan Semper",
//     title: "Manager",
//   },
//   {
//     avatar: "/images/up2.avif",
//     name: "Natasha Kaselj",
//     title: "Recruitment Specialist",
//   },
//   {
//     avatar: "/images/up1.avif",
//     name: "Cornelia Eljuga",
//     title: "Key Account Manager",
//   },
//   {
//     avatar: "/images/up4.avif",
//     name: "Daniel martin",
//     title: "Recruitment Agent",
//   },
//   {
//     avatar: "/images/up5.avif",
//     name: "Ramesh Godar",
//     title: "Recruitment Agent",
//   },
// ];

export default function AboutUsPageEnglish() {
  return (
    <div className="min-h-screen pt-4">
      <div
        style={{
          backgroundImage: "url('/images/Off2work/1x/asset2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[500px] flex items-center justify-center"
      >
        <div className="max-w-screen-md mx-auto min-h-[400px] space-y-4 text-center mt-8">
          <p className="text-4xl text-gray-800 font-bold my-4 ">About Us</p>
          <p className="text-5xl text-gray-800 font-bold my-4">
            Your Business, Our Expertise
          </p>
          <p className="text-xl  text-foreground-muted">
            Leave the complexities of hiring and workforce management to our
            experts. We specialize in connecting businesses with skilled
            professionals, ensuring compliance and efficiency every step of the
            way.
          </p>
        </div>
      </div>
      <ImageShowcase />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 uppercase mb-12">
            Let&apos;s get to know each other .
          </h2>
          <div className="max-w-screen-md mx-auto space-y-4  rounded-md p-4">
            <p className="text-lg font-medium">
              Discover how Off2 Work&apos;s tailored solutions can address your
              workforce challenges. Let&apos;s collaborate to create a seamless,
              compliant path forward for your business.
            </p>
            <p className="text-lg font-medium">
              As your trusted partner, we help you find the right talent to
              enhance productivity and competitiveness in the labor market. We
              collaborate with partners in Nepal, India, Bangladesh, Uzbekistan,
              Vietnam, Kosovo and Gulf to recruit top candidates tailored to
              your needs.
            </p>

            <span className="flex items-center gap-4 text-lg font-medium">
              <ArrowRight className="w-8 h-8 text-[#673190]" />
              <p className="text-lg font-medium">
                With years of expertise in employment mediation and temporary
                staffing, we are your go-to experts for foreign workforce
                solutions.
              </p>
            </span>
          </div>
        </div>
      </div>
      <LogoGallery />
      <div className="relative min-h-[500px] overflow-hidden">
        {/* Grass-like background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50"></div>

        {/* Glassmorphism container */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 uppercase mb-12">
            Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-8">
            {/* Mission Card */}
            <div className="glassmorphism-card">
              <h2 className="text-2xl font-bold text-gray-800">Our mission</h2>
              <p className="text-gray-700">
                Our mission is to deliver exceptional service and a seamless
                business experience through quality solutions, a professional
                approach, and competitive pricing.
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex gap-3 items-start">
                  <ChevronRight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    We aim to boost productivity and competitiveness by
                    identifying and attracting the best candidates.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <ChevronRight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    We strive to be recognized as a reliable partner committed
                    to exceeding expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="glassmorphism-card">
              <h2 className="text-2xl font-bold text-gray-800">Our vision</h2>
              <p className="text-gray-700">
                Our vision is to become a leading agency in workforce solutions,
                known for excellence and innovation.
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex gap-3 items-start">
                  <ChevronRight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    We aim to build lasting relationships fostering mutual
                    growth and success.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <ChevronRight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Our focus is on long-term collaboration and continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56 relative">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover object-center shadow-md rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
}
