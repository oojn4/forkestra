import { MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// import { theme } from '@/theme';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strategi Penguatan Konektivitas dan Aksesibilitas Potensi Industri Pengolahan Pertambangan Sulawesi Tenggara dengan Aglomerasi Industri: Pendekatan Geospatial Big Data dan Official Statistics",
  description: "Strategi Penguatan Konektivitas dan Aksesibilitas Potensi Industri Pengolahan Pertambangan Sulawesi Tenggara dengan Aglomerasi Industri: Pendekatan Geospatial Big Data dan Official Statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <MantineProvider>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}
