import { Anek_Bangla, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const mayaboti = localFont({
  src: "./_fonts/mayaboti-normal.ttf",
  variable: "--font-mayaboti",
});

export const onekBangla = Anek_Bangla({
  subsets: ["bengali"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-onek",
});

export const metadata = {
  title: "Hero Kidz",
  description: "Hero kids products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mayaboti.variable} ${onekBangla.variable} font-onek antialiased`}
      >
        <Navbar />
        <main className="main-container min-h-[calc(100vh-287px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
