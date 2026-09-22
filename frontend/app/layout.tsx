import { Fraunces, Work_Sans, Oswald, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { station } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600"] });
const spaceMono = Space_Mono({ subsets: ["latin"], variable: "--font-space-mono", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: `${station.name} — ${station.freq}`,
  description: station.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="valve">
      <body
        className={`${fraunces.variable} ${workSans.variable} ${oswald.variable} ${spaceMono.variable}`}
      >
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-content px-6 py-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}