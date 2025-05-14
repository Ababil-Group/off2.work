"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023a51] mb-12">
        All services you need <br /> in one place.
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-[800px] mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
              <FileText className="w-10 h-10 text-primary" />
              <CardTitle className="text-[#023a51]">
                Recruitment of workers
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We entrust you with the task of recruitment, selection and
              selection of motivated and quality staff according to your needs
              and wishes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
              <TrendingUp className="w-10 h-10 text-primary" />
              <CardTitle className="text-[#023a51]">
                Management of employment
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We entrust you with the full documentation and management – we
              ensure visas, residence permits, and work contracts.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg p-8 text-center max-w-[400px] mx-auto">
        <h3 className="text-2xl font-semibold text-[#023a51] mb-4">
          Agency that cares about your business
        </h3>
        <p className="text-muted-foreground mb-6">
          The process of selection, regulation and employment of foreign workers
          entrusts you to our professionals and partners.
        </p>
        <Link href="/services">
          <Button className="bg-[#023a51] hover:bg-[#023a51]/80">
            View our services
          </Button>
        </Link>
      </div>
    </div>
  );
}
