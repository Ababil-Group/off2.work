import Footer from "@/components/common-english/Footer";
import { Navbar } from "@/components/common-english/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OFF2WORK RECUITMENT",
  description: "",
  icons: {
    icon: "/images/off2worklogo.png",
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
