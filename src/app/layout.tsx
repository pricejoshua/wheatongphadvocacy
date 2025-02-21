import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Wheaton GPH Advocacy",
  description: "Global Public Health Advocacy at Wheaton College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable}`}>
      <body className="font-syne antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
