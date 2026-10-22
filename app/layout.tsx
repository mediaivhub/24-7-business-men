import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";
import "./globals.css";

// Sora for headings, DM Sans for body text.
const heading = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: { default: "24/7 Businessmen", template: "%s · 24/7 Businessmen" },
  description: "Dubai's 24/7 registration trustee and Golden Visa office.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
