import type { Metadata } from "next";

import { Navbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "TH Consulting",
  description: "",
  icons: {
    icon: "/images/faviicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        <div className="pt-[80px] lg:pt-[120px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
