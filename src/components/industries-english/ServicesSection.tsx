import { ChevronRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Recruitment of workers",
      items: [
        "We manage the entire process of hiring foreign workers",
        "The process of hiring workers and accompanying administration is handled by the agency",
        "Provides a wide range of candidates for a large number of industries",
        "Enables hiring qualified and motivated staff",
      ],
    },
    {
      title: "Employment of workers",
      items: [
        "Employ foreign workers for a specific period",
        "Provides flexibility and speed since workers already have residence and work permits",
        "Enables a simple employment process without complex administration",
        "Provides a wide range of candidates for a large number of industries",
      ],
    },
    {
      title: "Employment management",
      items: [
        "If you have already selected the ideal candidate, we provide support in employment management",
        "The employment management process is handled by the agency",
        "Facilitates employment of foreign workers",
        "Experienced professionals provide support in the entire process",
      ],
    },
  ];

  return (
    <div className="max-w-[1250px] mx-auto bg-white py-16 px-4 my-5">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#003459] mb-4 max-w-[400px] mx-auto">
          Choose a service according to your business.
        </h2>
        <p className="text-gray-600">Discover the benefits of our services.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold text-[#003459] mb-6 border-b pb-4 my-5">
              {service.title}
            </h3>
            <ul className="space-y-4">
              {service.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start text-gray-700 hover:text-[#00A8E8] transition-colors"
                >
                  <ChevronRight
                    className="mr-2 mt-1 flex-shrink-0 text-red-500"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
