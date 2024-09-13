import { Poppins as FontSans, Space_Grotesk as Space } from "next/font/google";
import "../styles/globals.css";

// const fontSans = FontSans({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

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
