import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
});

export const metadata = {
  title: "Hero Kidz",
  description: "Hero kids products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
