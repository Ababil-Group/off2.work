"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  return (
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
              We take care of the entire documentation process, including visas,
              work permits, residency permits, and employment contracts,
              ensuring full compliance with local laws.
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
              From talent sourcing to onboarding, our experts manage every step
              of the hiring process, so you can focus on growing your business.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/services">
          <Button className="bg-[#3E4247] hover:bg-[#3E4247]/80">
            Explore Our Services
          </Button>
        </Link>
      </div>

      <div className="rounded-lg p-8 text-center max-w-[600px] mx-auto">
        <h3 className="text-2xl font-semibold text-[#3E4247] mb-4">
          Your Trusted Partner in Workforce Solutions
        </h3>
        <p className="text-muted-foreground mb-6">
          Rely on our experts to manage the entire process—from selecting and
          recruiting to employing skilled foreign workers. We ensure seamless
          integration and compliance, so your business thrives.
        </p>
        <Link href="/services">
          <Button className="bg-[#3E4247] hover:bg-[#3E4247]/80">
            Discover Our Services
          </Button>
        </Link>
      </div>
    </div>
  );
}
