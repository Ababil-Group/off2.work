import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Recruitment of workers",
    description:
      "We recruit workers and start the process of bringing them to Croatia only when we are sure we have found the right candidate.",
    image: "/images/1-Large.jpeg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Work permits",
    description:
      "The process of bringing workers to Croatia takes 90 days. We cannot influence some things because they are according to the Law on foreigners by HZZ, MUP and MVP.",
    image: "/images/2-Large.jpeg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Hiring and adaptation",
    description:
      "Our job does not end with the arrival of workers and the signing of a work contract, we remain with you the entire time as intermediaries between you and the worker.",
    image: "/images/3-Large.jpeg", // Replace with actual image path
  },
];

export default function HiringProcess() {
  return (
    <section className="max-w-[1250px] mx-auto py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-[#023a51] mb-12 max-w-[400px] mx-auto">
        We guide the hiring process through every step.
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition max-w-[400px] mx-auto"
          >
            <h3 className="text-xl font-semibold text-[#023a51] my-3">
              {step.title}
            </h3>
            <div className="relative">
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="border border-red-400 mt-4"></div>

            <p className="text-gray-600 mt-2 text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
