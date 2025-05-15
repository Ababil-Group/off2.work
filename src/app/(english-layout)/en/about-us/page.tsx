import ImageShowcase from "@/components/aboutus/ImageShowCase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AboutUsPageEnglish() {
  return (
    <div className="min-h-screen pt-4">
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
          <p className="text-4xl text-[#023a51] font-bold my-4 ">About Us</p>
          <p className="text-5xl text-[#023a51] font-bold my-4">
            Connecting Businesses with Exceptional Global Talent
          </p>
          <p className="text-xl  text-foreground-muted">
            Leave a reliable and safe solution for your business to our experts
          </p>
        </div>
      </div>
      <ImageShowcase />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E4247] uppercase mb-12">
          All the services in one place
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-screen-lg mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
                <FileText className="w-10 h-10 text-[#642D91]" />
                <CardTitle className="text-[#023a51]">
                  Hire Talent-Trained Workers
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Let us handle the search, selection, and recruitment of skilled,
                motivated professionals who align with your business goals and
                culture.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
                <TrendingUp className="w-10 h-10 text-[#642D91]" />
                <CardTitle className="text-[#023a51]">
                  Work Permit Assistance
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We take care of the entire documentation process, including
                visas, work permits, residency permits, and employment
                contracts, ensuring full compliance with local laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
                <ShieldCheck className="w-10 h-10 text-[#642D91]" />
                <CardTitle className="text-[#023a51]">
                  Your Trusted Workforce Partner
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                From talent sourcing to onboarding, our experts manage every
                step of the hiring process, so you can focus on growing your
                business.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/services">
            <Button className="bg-[#3E4247] uppercase hover:scale-105 transition-transform duration-300 hover:bg-[#3E4247]/80 cursor-pointer">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
