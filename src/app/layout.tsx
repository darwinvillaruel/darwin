import { Poppins as FontSans } from "next/font/google";
import "../styles/globals.css";

const fontSans = FontSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={fontSans.variable}
      data-theme="dracula">
      <body
        className={`font-sans ${fontSans.className}`}
        data-theme="dracula">
        {children}
      </body>
    </html>
  );
}
