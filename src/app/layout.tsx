import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";

const fontSans = FontSans({
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
