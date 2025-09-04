import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import "./style.scss";
import { DataProvider } from "@/ContextApi/DataContext";
import { Footer } from "@/components";
import RenderChatBot from "@/components/chatbot/RenderChatBot";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Hotel La Mount Ladakh",
  description: "Affordable Luxury in the Heart of Ladakh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MS5D3MNV');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MS5D3MNV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* <!-- End Google Tag Manager (noscript) --> */}
        <DataProvider>
          <RenderChatBot />
          {children}
          <Footer />
          <Call callNumber="+91 85807 60165" />
          <Whatsapp whatsAppNumber="+919622205133" />
        </DataProvider>
        {/* <Script id="eazbot-script" strategy="afterInteractive">
          {`window.eazbotConfig = {
              ndid: "099d6e36-2438-4f10-8427-b9fe86741bf7",
              hid: "64672585",
            };`}
        </Script>
        <Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"></Script> */}
      </body>
    </html>
  );
}
