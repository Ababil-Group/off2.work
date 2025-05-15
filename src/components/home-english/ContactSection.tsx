"use client";

import React, { useState } from "react";
import { MapPin, Mail, Clock, Send, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
export default function ContactSection() {
  const [workerCount, setWorkerCount] = useState(1);

  const handleSliderChange = (value: number[]) => {
    setWorkerCount(value[0]);
  };

  return (
    <section className="bg-black bg-gradient-to-br from-[#063556] to-gray-900 ">
      <div
        style={{
          backgroundImage: "url('/images/download.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" min-h-screen flex justify-center items-center"
      >
        <div className="max-w-7xl absolute mx-auto bg-[#3E4247] rounded-2xl  px-6 md:px-20 mb-12 py-16 grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="text-gray-200 space-y-8">
            <h2 className="text-4xl font-bold leading-tight uppercase">
              Our Team is Here for You
            </h2>

            {/* Address */}
            <div className="flex flex-col space-y-4">
              <p className="font-semibold text-xl">Office Locations:</p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span>
                    <MapPin className="w-6 h-6" />
                  </span>
                  Municipiul Ploiesti, Strada MIHAI BRAVU, Nr. 239, Bloc C4,
                  Ap.71, Judet Prahova, Romania
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <MapPin className="w-6 h-6" />
                  </span>
                  The Meydan Hotel, Grandstand, 6th Floor, Meydan Road, Nad Al
                  Sheba, Dubai, UAE
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col space-y-4">
              <p className="font-semibold text-xl">Contact</p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span>
                    <Mail className="w-6 h-6" />
                  </span>
                  info@thconsulting.hr
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Phone className="w-6 h-6" />
                  </span>
                  +123-234-1234
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col space-y-4">
              <p className="font-semibold text-xl">Working Hours:</p>
              <div className="flex items-center gap-4 ">
                <Clock className="w-6 h-6" />
                <div>
                  <p>Monday - Friday</p>
                  <p>8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <div className="flex flex-col items-center justify-center space-y-4 mb-5">
              <h2 className="text-[#063556] text-2xl font-bold">Get in Touch</h2>
              <p className="text-center font-medium text-[#063556]">
                Let us know how we can assist you. Fill out the form below, and
                we’ll get back to you promptly.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Name and Surname *</Label>
                  <Input id="fullName" placeholder="Name Surname*" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Phone Number *</Label>
                  <Input
                    id="mobile"
                    placeholder="091 234 5678*"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    placeholder="ime@mail.com*"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="primjer d.o.o.*" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Number of Workers Needed? *</Label>
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

              <div className="space-y-2">
                <Label htmlFor="message">How Can We Help You?</Label>
                <Textarea
                  id="message"
                  placeholder="How Can We Help You?"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#053b60] hover:bg-[#053b60]/90"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" /> Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
