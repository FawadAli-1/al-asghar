import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import BackgroundLoader from "@/components/shared/BackgroundLoader";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Al-Asghar Travels and Tours - Tours All Over Pakistan and Car Rental",
  description: "Al-Asghar Travels & Tours offers custom trip planning with English- and Arabic-speaking drivers, delivering top-notch services at affordable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased text-gray-100`}
      >
        <section className="relative bg-[url('../../public/bg.jpg')] h-screen w-full bg-cover bg-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
          <div className="relative z-10">
            <BackgroundLoader />
            <Navbar />
            {children}
          </div>
          <Footer />
        </section>
      </body>
    </html>
  );
}
