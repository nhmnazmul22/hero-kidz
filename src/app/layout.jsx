import { Anek_Bangla, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/provider/NextAuthProvider";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const mayaboti = localFont({
  src: "../fonts/mayaboti-normal.ttf",
  variable: "--font-mayaboti",
});

export const onekBangla = Anek_Bangla({
  subsets: ["bengali"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-onek",
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-plum.vercel.app"),

  title: {
    default: "Hero Kidz | শিশুদের জন্য নিরাপদ ও শিক্ষামূলক খেলনা",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz এ পাবেন শিশুদের জন্য শিক্ষামূলক, নিরাপদ ও মানসম্মত খেলনার বিশাল সংগ্রহ। Play-based learning এর মাধ্যমে শিশুর সুন্দর ভবিষ্যৎ গড়ুন।",

  keywords: [
    "kids toys",
    "educational toys",
    "bangladesh kids toys",
    "learning toys",
    "hero kidz",
    "শিশুদের খেলনা",
  ],

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://hero-kidz-plum.vercel.app/",
    siteName: "Hero Kidz",
    title: "Hero Kidz | শিশুদের জন্য শিক্ষামূলক খেলনা",
    description: "শিশুদের শেখা ও আনন্দের জন্য বাছাইকৃত সেরা শিক্ষামূলক খেলনা।",
    images: [
      {
        url: "https://i.ibb.co.com/HLSgwf3z/home-page.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Home Page Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Educational Toys for Kids",
    description: "Safe, fun and educational toys for kids. Explore Hero Kidz.",
    images: ["https://i.ibb.co.com/HLSgwf3z/home-page.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/svyvwDJ8/logo.png",
    apple: "https://i.ibb.co.com/svyvwDJ8/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mayaboti.variable} ${onekBangla.variable} font-onek antialiased`}
      >
        <NextAuthProvider>
          <Navbar />
          <main className="main-container min-h-[calc(100vh-287px)] h-full">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </NextAuthProvider>
      </body>
    </html>
  );
}
