/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const FAQSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index: any) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the agency's obligations for hiring foreign workers?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Searching for an appropriate worker based on client criteria</li>
          <li>
            Creating and submitting documentation for residence and work permit
          </li>
          <li>Covering travel insurance costs</li>
          <li>Traveling costs for the worker</li>
        </ul>
      ),
    },
    {
      question: "What are my obligations when hiring a foreign worker?",
      answer: (
        <p>
          After the work permit is issued, you need to ensure accommodation and
          food for the worker. Accommodation must meet minimum standards, and if
          food is not provided, you must pay the food allowance. You must also
          register the worker for social security and health insurance.
        </p>
      ),
    },
    {
      question:
        "What conditions must I meet to obtain a residence and work permit?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Operating economic activities registered in RH</li>
          <li>
            Employing at least 1/4 Croatian nationals in relation to foreign
            workers
          </li>
          <li>Proof of non-existent debt</li>
          <li>Not convicted of labor criminal offenses</li>
        </ul>
      ),
    },
    {
      question: "Can the worker come immediately?",
      answer: (
        <p>
          No, the worker cannot come immediately. A work permit and visa are
          required. The process takes between 45 and 90 days, depending on the
          institutions.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#023a51]">
        Most Common Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => toggleSection(index)}
            >
              <span className="mr-4 text-white text-xl w-6 text-center border rounded bg-[#023a51] hover:bg-red-500">
                {openSection === index ? "−" : "+"}
              </span>
              <h3
                className={`text-lg font-medium ${
                  openSection === index ? "" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h3>
            </div>
            {openSection === index && (
              <div className="mt-3 text-gray-700 pl-10">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
