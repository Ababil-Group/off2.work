import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Stranica nije pronađena
          </p>
          <p className="text-gray-600 mb-6">
            Žao nam je, ali stranica koju tražite trenutno nije dostupna ili ne
            postoji.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/" className="w-full">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Povratak na početnu stranicu
            </Button>
          </Link>

          <Link href="/contact" className="w-full">
            <Button
              variant="outline"
              className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              Kontaktirajte nas
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Mogući razlozi zašto ne možete pronaći stranicu:</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Pogrešno upisana adresa</li>
            <li>Stranica je premještena ili izbrisana</li>
            <li>Privremeni tehnički problem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
