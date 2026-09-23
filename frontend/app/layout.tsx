import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { station } from "@/lib/content";
import Script from "next/script";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: `${station.name} — Podcast & Radio`,
  description: station.blurb,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" data-theme="valve">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Mirrored SoundSphere theme stylesheets — applied globally */}
        <link rel="stylesheet" href="/wp-content/themes/soundsphere/assets/css/main.min03db.css" />
        <link rel="stylesheet" href="/wp-content/plugins/soundsphere-core/assets/css/soundsphere-core.min03db.css" />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/soundsphere-core/inc/icons/font-awesome/assets/css/all.min03db.css"
        />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/custom-frontend.min0cfa.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-80cfa.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-26550cfa.css" />
        <link rel="icon" href={station.favicon32} sizes="32x32" />
        <link rel="icon" href="/wp-content/uploads/2025/01/cropped-favicon-1-300x300.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/wp-content/uploads/2025/01/cropped-favicon-1-300x300.png" />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} home wp-singular page-template page-template-page-full-width page-template-page-full-width-php wp-theme-soundsphere theme-soundsphere qodef-gutenberg--no-touch qode-framework-1.2.4 eio-default qodef-back-to-top--enabled qodef-skin--dark qodef-content-behind-header qodef-header--minimal-center qodef-header-appearance--none qodef-header--transparent qodef-content--behind-header qodef-mobile-header--minimal qodef-drop-down-second--full-width qodef-drop-down-second--animate-height soundsphere-core-1.0 soundsphere-1.0 qodef-content-grid-1400 qodef-search--covers-header elementor-default`}
      >
        <a className="skip-link screen-reader-text" href="#qodef-page-content">
          Skip to the content
        </a>
        <div id="qodef-page-wrapper" className="">
          <ThemeProvider>
            <Header />
            <div id="qodef-page-outer">
              <div id="qodef-page-inner" className="qodef-content-full-width">
                <main
                  id="qodef-page-content"
                  className="qodef-grid qodef-layout--template qodef-grid-template--12"
                  role="main"
                >
                  <div className="qodef-grid-inner">
                    <div className="qodef-grid-item qodef-page-content-section qodef-col--content">
                      <div
                        data-elementor-type="wp-page"
                        data-elementor-id="2655"
                        className="elementor elementor-2655"
                        data-elementor-post-type="page"
                      >
                        {children}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <Footer />
          </ThemeProvider>
        </div>
        {/* Mirrored SoundSphere theme scripts — applied globally */}
        <Script id="jquery-core-js" src="/wp-includes/js/jquery/jquery.minf43b.js" strategy="beforeInteractive" />
        <Script
          id="jquery-migrate-js"
          src="/wp-includes/js/jquery/jquery-migrate.min5589.js"
          strategy="beforeInteractive"
        />
        <Script
          id="theme-main-js"
          src="/wp-content/themes/soundsphere/assets/js/main.min03db.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
