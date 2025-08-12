import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Google Fonts: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Tailwind bilan ishlatish uchun
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string }; // App Routerda url params orqali locale olinadi
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  console.log("🚀 ~ file: layout.tsx:28 ~ params:", params)
  let messages;
  
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} className={poppins.variable}>
      <body className="font-sans bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ClientCommons />
          <SiteHeader />
          <main>{children}</main>
          <FooterNav />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
