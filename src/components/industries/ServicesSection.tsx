import { ChevronRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Posredovanje pri zapošljavanju",
      items: [
        "Vodimo cjelokupni proces zapošljavanja stranih radnika",
        "Proces dovođenja radnika i popratne administracije vodi agencija",
        "Daje širok raspon kandidata za velik broj djelatnosti i industrija",
        "Omogućuje zapošljavanje kvalificiranog i motiviranog kadra",
      ],
    },
    {
      title: "Ustupanje radnika",
      items: [
        "Unajmite stranog radnika za određeno razdoblje",
        "Pruža fleksibilnost i brzinu jer radnici već posjeduju dozvole za boravak i rad",
        "Omogućuje jednostavan proces zaposlenja bez komplicirane administracije",
        "Daje širok raspon kandidata za velik broj djelatnosti i industrija",
      ],
    },
    {
      title: "Administracija zapošljavanja",
      items: [
        "Ako ste već sami odabrali idealan kadar, pružamo vam potporu u administraciji zapošljavanja",
        "Proces administracije zapošljavanja vodi agencija",
        "Olakšava zapošljavanje stranih radnika",
        "Iskusni stručnjaci pružaju podršku u cjelokupnom procesu",
      ],
    },
  ];

  return (
    <div className="max-w-[1250px] mx-auto bg-white py-16 px-4 my-5">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#003459] mb-4 max-w-[400px] mx-auto">
          Odaberite uslugu po mjeri vašeg poslovanja.
        </h2>
        <p className="text-gray-600">Upoznajte prednosti naših usluga.</p>
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
