import { ArrowBigRight, ArrowRight } from "lucide-react";
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
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full flex items-center justify-center"
      >
        <div className="max-w-screen-md mx-auto min-h-[400px] space-y-4 text-center mt-8">
          <p className="text-2xl text-[#023a51] font-semibold my-4 ">
            Hire Talent-Trained Workers
          </p>
          <p className="text-5xl text-[#023a51] font-bold my-4">
            End-to-End Recruitment Solutions
          </p>
          <p className="text-xl  text-foreground-muted">
            We manage the entire process of hiring foreign workers. Trust us to
            find, select, and recruit motivated, skilled professionals tailored
            to your business needs.
          </p>
        </div>
      </div>
      <div className="w-full bg-white max-w-screen-lg mx-auto my-6">
        <h2 className="text-center text-4xl text-[#023a51] font-bold mb-8">
          When is Hiring Talent-Trained Workers the Best Choice?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#414047] p-8 rounded-2xl">
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>We Handle the Entire Hiring Process</h3>
            </span>
            <p className="text-lg text-gray-200">
              From sourcing to onboarding, we take care of everything, ensuring
              you get the right talent for your business.
            </p>
          </div>
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>Access a Diverse Talent Pool</h3>
            </span>
            <p className="text-lg text-gray-200">
              Our extensive network and collaboration with local partners allow
              us to provide candidates with the skills and qualifications you
              need, across various industries.
            </p>
          </div>
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>End-to-End Administration and Logistics</h3>
            </span>
            <p className="text-lg text-gray-200">
              We manage all aspects of hiring, from work permits and visas to
              transportation and onboarding, so you can focus on your business.
            </p>
          </div>
          <div className="space-y-3">
            <span className="flex items-center text-gray-100 gap-3 font-semibold text-xl">
              <ArrowBigRight />
              <h3>Reliable, Fast, and Efficient Solutions</h3>
            </span>
            <p className="text-lg text-gray-200">
              We deliver qualified, motivated staff who are ready to meet your
              challenges and contribute to your success.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="max-w-screen-lg mx-auto p-2">
          <div className="max-w-[500px] mx-auto my-6">
            <h2 className="text-[#023a51]  font-bold text-4xl text-center mb-4">
              Choose a service tailored to your business.
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
    </div>
  );
}
