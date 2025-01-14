import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const metadataByLocale: Record<string, Metadata> = {
    en: {
      title: "BOARDZ",
      description: "Social Network for Boardgamer",
    },
    de: {
      title: "BOARDZ",
      description: "Soziales Netzwerk für Boardgamer",
    },
  };
  return metadataByLocale[locale];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${nunitoSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
