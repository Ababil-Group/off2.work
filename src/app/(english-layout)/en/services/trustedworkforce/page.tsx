import {
  ArrowBigRight,
  ArrowRight,
  ArrowRightIcon,
  File,
  Handshake,
  Users,
} from "lucide-react";
import React from "react";

const listData = [
  {
    listt: "Hire Talent-Trained Workers",
    lists: [
      {
        list: "We manage the entire process of recruiting and onboarding foreign workers, ensuring a seamless experience for your business.",
      },
      { list: "End-to-end management of hiring and administrative processes." },
      {
        list: "Access to a diverse pool of candidates across various industries.",
      },
      {
        list: "Recruitment of skilled, motivated professionals tailored to your needs.",
      },
    ],
  },
  {
    listt: "Flexible Workforce Solutions",
    lists: [
      {
        list: "Hire foreign workers for specific periods with ease and flexibility.",
      },
      {
        list: "Workers come pre-equipped with valid residence and work permits.",
      },
      {
        list: "Simplified employment process with minimal administrative hassle.",
      },
      {
        list: "A wide range of candidates available for multiple industries and roles.",
      },
    ],
  },
  {
    listt: "Work Permit and Immigration Support",
    lists: [
      {
        list: "Already found your ideal candidate? Let us handle the administrative heavy lifting.",
      },
      {
        list: "Comprehensive support for work permits, visas, and legal compliance.",
      },
      {
        list: "Streamlined processes managed by experienced immigration experts.",
      },
      { list: "Ongoing assistance throughout the employment lifecycle." },
    ],
  },
];
export default function ServiceDetailsPageEnglish() {
  const services = [
    {
      title: "Flexible Workforce Solutions",
      description:
        "Hire workers for specific projects or timeframes with ease.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Work Permit and Immigration Support",
      description:
        "We handle all documentation for foreign workers, ensuring compliance and efficiency.",
      icon: <File className="w-8 h-8 text-green-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      title: "Long-Term Staffing Partnerships",
      description:
        "Build lasting relationships with reliable workers for ongoing business needs.",
      icon: <Handshake className="w-8 h-8 text-purple-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
  ];

  return (
    <div className="min-h-screen pt-5">
      <div
        style={{
          backgroundImage: "url('/images/Off2work/1x/asset2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
       className="h-[500px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-screen-md mx-auto h-[400px] mt-8 p-4">
          <p className="text-2xl  text-[#023a51] my-4">
            Your Trusted Workforce Partner
          </p>
          <p className="text-4xl md:text-5xl text-[#023a51] font-bold my-4">
            Hire foreign workers for specific projects or timeframes
          </p>
          <p className="text-xl  text-foreground-muted">
            Enjoy lower costs and simplified administration while we handle the
            complexities.
          </p>
        </div>
      </div>
      <div className="w-full bg-white max-w-screen-lg mx-auto my-6">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 p-4">
          When is <span className="text-blue-600">Hiring Temporary </span>
          Workers the Best Choice?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#414047] p-8 rounded-2xl">
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>Hire Skilled Workers for Short-Term Needs</h3>
            </span>
            <p className="text-lg text-gray-200">
              Outsourced workers integrate seamlessly into your workflows,
              supervised by your team, while we manage recruitment, payroll, and
              compliance.
            </p>
          </div>
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>Access a Diverse Talent Pool</h3>
            </span>
            <p className="text-lg text-gray-200">
              We provide candidates with the right qualifications and skills,
              tailored to your industry and project requirements.
            </p>
          </div>
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>Streamlined Process, No Hassle</h3>
            </span>
            <p className="text-lg text-gray-200">
              From recruitment to payroll, medical checks, and workplace safety,
              we handle all administrative tasks, so you can focus on your
              business.
            </p>
          </div>
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>Fast and Efficient Hiring</h3>
            </span>
            <p className="text-lg text-gray-200">
              With workers pre-equipped with valid permits, this service offers
              speed and flexibility. After a trial period, you can transition
              them to permanent roles if needed.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="max-w-screen-lg mx-auto p-2">
          <div className="max-w-2xl mx-auto my-6">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Choose A Service Tailored To Your Business.
            </h2>
            <p className="text-lg text-center">
              Discover the advantages of our specialized services designed to
              meet your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
            {listData.map((list, indx) => (
              <div
                key={indx}
                className="bg-gray-50 rounded-md flex flex-col items-center justify-center hover:shadow-2xl shadow-gray-400 transition-transform duration-300 cursor-pointer shadow space-y-4 px-3 py-4"
              >
                <h2 className="text-lg font-semibold text-center border-b-2">
                  {list.listt}
                </h2>
                {list.lists.map((item, indx) => (
                  <div key={indx} className="space-y-4 flex items-center gap-2">
                    <span>
                      <ArrowRight className="w-5 h-5 text-black" />
                    </span>
                    <p className="text-base hover:text-blue-800">{item.list}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Explore Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we can help you build a skilled and reliable
              workforce.
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
              See more <ArrowRightIcon className="ml-2" />
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden relative`}
              >
                {/* Animated border bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    {service.buttonText}
                    <ArrowRightIcon className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-20 flex justify-center space-x-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`w-3 h-3 rounded-full ${
                  item === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
