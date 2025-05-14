"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Phone, Menu, X, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { title: "Naslovnica", href: "/" },
  {
    title: "Usluge",
    href: "/services",
    children: [
      { title: "Usluga 1", href: "/services/1" },
      { title: "Usluga 2", href: "/services/2" },
      { title: "Usluga 3", href: "/services/3" },
    ],
  },
  { title: "Područja rada", href: "/industries" },
  { title: "Reference", href: "/reference" },
  { title: "O nama", href: "/about-us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(pathname);
  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1250px] mx-auto px-2">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="flex items-center justify-between pr-8 py-4 lg:py-0">
              <Image src="/images/logo.png" alt="" width={200} height={200} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-[#0f2a47] hover:text-gray-600"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div
              className={cn(
                "flex-1 w-full",
                isOpen ? "block" : "hidden lg:block",
                isScrolled ? "lg:pt-2" : "lg:pt-4"
              )}
            >
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out",
                  isScrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pl-4 lg:pl-0 lg:space-x-6">
                  <div className="hidden lg:flex items-center space-x-6 border-b border-gray-400 pb-4">
                    <Link
                      href="/uredi"
                      className="text-sm text-[#0f2a47] hover:underline"
                    >
                      UREDI
                    </Link>
                    <Link
                      href="/pitanja"
                      className="text-sm text-[#0f2a47] hover:underline"
                    >
                      NAJČEŠĆA PITANJA
                    </Link>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 border-b border-gray-400 pb-4">
                    <Link
                      href="tel:094583948"
                      className="flex items-center text-[#0f2a47] hover:underline"
                    >
                      <Phone className="mr-1 h-4 w-4" />
                      Nazovi nas
                    </Link>
                    <Link
                      href="mailto:info@thconsulting.hr"
                      className="flex items-center text-[#0f2a47] hover:underline"
                    >
                      <Mail className="mr-1 h-4 w-4" /> Kontaktiraj nas
                    </Link>
                    <div className="flex items-center space-x-6">
                      <Link
                        href={`/en${pathname}`}
                        className="block h-5 w-7 overflow-hidden rounded"
                      >
                        <Image
                          src="/images/en_GB.png"
                          alt="English"
                          width={28}
                          height={20}
                        />
                      </Link>
                      <Link
                        href={`${pathname}`}
                        className="block h-5 w-7 overflow-hidden rounded"
                      >
                        <Image
                          src="/images/hr.png"
                          alt="Hrvatski"
                          width={28}
                          height={20}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navbar (Sticky) */}
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out",
                  isScrolled ? "pb-3" : "py-2"
                )}
              >
                <nav className="bg-white">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-2 px-4 space-y-2 lg:space-y-0">
                    {navItems.map((item) => (
                      <div key={item.title} className="relative group">
                        {item.children ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div
                                className={cn(
                                  "flex items-center rounded-none gap-1 text-lg py-2 lg:py-3 text-[#0f2a47] hover:bg-gray-50 hover:border-y-2 hover:border-[#0f2a47]",
                                  pathname === item.href &&
                                    "border-y-2 border-[#0f2a47]"
                                )}
                              >
                                {item.title}
                                <ChevronDown className="h-4 w-4" />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48">
                              {item.children.map((child) => (
                                <DropdownMenuItem key={child.title} asChild>
                                  <Link href={child.href}>{child.title}</Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "block py-2 lg:py-3 px-4 text-[#0f2a47] text-lg hover:bg-gray-50 hover:border-y-2 hover:border-[#0f2a47]",
                              pathname === item.href &&
                                "border-y-2 border-[#0f2a47]"
                            )}
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                    <Link
                      href="/contact"
                      className="inline-block rounded-2xl bg-[#0f2a47] px-6 py-3 text-white hover:bg-red-500 text-center"
                    >
                      Kontaktirajte nas
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
