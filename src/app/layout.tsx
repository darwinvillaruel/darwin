import { Poppins as FontSans, Space_Grotesk as Space } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darwin Villaruel",
  description: "Data Analyst | Developer",
  openGraph: {
    title: "Darwin Villaruel",
    url: "https://darwinvillaruel.com",
    images: "/darwin_pp.jpg",
    siteName: "Darwin Villaruel",
  },
};

const space = Space({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font--space",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${space.className}`} data-theme="retro">
      <body data-theme="retro">{children}</body>
    </html>
  );
}
