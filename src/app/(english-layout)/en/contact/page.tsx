"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import ContactInfo from "@/components/contact-english/ContactInfo";
import FAQSection from "@/components/contact-english/Faq";

export default function ContactPageEnglish() {
  const [workerCount, setWorkerCount] = useState(1);

  const handleSliderChange = (value: number[]) => {
    setWorkerCount(value[0]);
  };
  return (
    <div className=" min-h-screen pt-5">
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
          <p className="text-4xl  text-[#023a51] my-4">Contact us</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Let&apos;s Get to Know Each Other
          </p>
          <p className="text-xl  text-foreground-muted">
            Reach out to our team of experts for a no-obligation consultation
            tailored to your business needs.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl py-20 px-12 space-y-3 max-w-[700px] mx-auto shadow-lg">
        <span className="text-2xl font-bold text-center">Get in Touch</span>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Label htmlFor="fullName" className="text-grey-500">
                Name and Surname *
              </Label>
              <Input id="fullName" placeholder="Name and Surname *" required />
            </div>
            <div className="space-y-6">
              <Label htmlFor="mobile" className="text-grey-500">
                Mobile Phone Number *
              </Label>
              <Input
                id="mobile"
                placeholder="091 234 5678*"
                type="tel"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-6">
              <Label htmlFor="email" className="text-grey-500">
                Email*
              </Label>
              <Input
                id="email"
                placeholder="ime@mail.com*"
                type="email"
                required
              />
            </div>
            <div className="space-y-6">
              <Label htmlFor="company" className="text-grey-500">
                Company Name *
              </Label>
              <Input id="company" placeholder="Company Name *" required />
            </div>
          </div>

          <div className="space-y-6">
            <Label className="text-grey-500">Number of Workers Needed? *</Label>
            <div className="flex  items-center">
              <span className="text-muted-foreground inline-block border  px-4 py-2 border-gray-300 rounded mr-2">
                {workerCount}
              </span>
              <Slider
                defaultValue={[1]}
                max={150}
                step={1}
                onValueChange={handleSliderChange}
              />
            </div>
          </div>

          <div className="space-y-6">
            <Label htmlFor="message" className="text-grey-500">
              Send an inquiry
            </Label>
            <Textarea id="message" placeholder="I need help with..." rows={6} />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#053b60] hover:bg-red-500 rounded-3xl"
            size="lg"
          >
            <Send className="mr-2 h-4 w-4" /> Send Inquiry
          </Button>
        </form>
      </div>
      <ContactInfo />
      <FAQSection />
    </div>
  );
}
