import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import "./style.scss";
import { DataProvider } from "@/ContextApi/DataContext";
import { Footer } from "@/components";
import RenderChatBot from "@/components/chatbot/RenderChatBot";

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
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning
      >
        <DataProvider>
          <RenderChatBot />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
