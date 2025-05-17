"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Phone, Menu, X, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { title: "Home", href: "/en" },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Hire Talent-Trained Workers",
        href: "/en/services/hires",
      },
      {
        title: "Work Permit Assistance",
        href: "/en/services/workpermit",
      },
      {
        title: "Your Trusted Workforce Partner",
        href: "/en/services/trustedworkforce",
      },
    ],
  },
  { title: "Areas of work", href: "/en/industries" },
  { title: "Client Success Stories", href: "/en/reference" },
  { title: "About Us", href: "/en/about-us" },
];

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return isScrolled;
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const isScrolled = useIsScrolled();
  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1250px] mx-auto px-2">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="flex items-center justify-between pr-8 py-4 lg:py-0">
              <Image
                src="/images/off2worklogo.png"
                alt=""
                width={160}
                height={200}
              />
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
                  isScrolled ? "h-0 overflow-hidden opacity-0 " : "opacity-100"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pl-4 lg:pl-0 lg:space-x-6">
                  <div className="hidden lg:flex items-center space-x-6 border-b border-gray-400 pb-4">
                    <Link
                      href="/offices"
                      className="text-sm text-[#0f2a47] hover:underline"
                    >
                      Explore Our Locations
                    </Link>
                    <Link
                      href="/faq"
                      className="text-sm text-[#0f2a47] hover:underline"
                    >
                      FAQs
                    </Link>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 border-b border-gray-400 pb-4">
                    <Link
                      href="tel:094583948"
                      className="flex items-center text-[#0f2a47] hover:underline"
                    >
                      <Phone className="mr-1 h-4 w-4" />
                      Call Us Today
                    </Link>
                    <Link
                      href="mailto:info@thconsulting.hr"
                      className="flex items-center text-[#0f2a47] hover:underline"
                    >
                      <Mail className="mr-1 h-4 w-4" /> Get In Touch
                    </Link>
                    <div className="flex items-center space-x-6">
                      <Link
                        href={`${pathname}`}
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
                        href={
                          pathname === "/en"
                            ? "/"
                            : pathname.replace(/^\/en/, "")
                        }
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
                          <div className="relative">
                            <div
                              className={cn(
                                "flex items-center rounded-none gap-1 text-lg py-2 lg:py-3 cursor-pointer text-[#0f2a47] hover:bg-gray-50 border-y-2 border-transparent hover:border-[#0f2a47]",
                                pathname === item.href &&
                                  "border-y-2 border-[#0f2a47]"
                              )}
                            >
                              {item.title}
                              <ChevronDown className="h-4 w-4" />
                            </div>
                            <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-lg z-50 border border-gray-200">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  className="block px-4 py-3 text-lg text-[#0f2a47] hover:bg-gray-50"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "block py-2 lg:py-3 px-4 text-[#0f2a47] text-lg hover:bg-gray-50 border-y-2 border-transparent hover:border-[#0f2a47]",
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
                      href="/en/contact"
                      className="inline-block rounded-2xl bg-[#0f2a47] px-6 py-3 text-white hover:bg-blue-600 text-center"
                    >
                      Contact Us
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
