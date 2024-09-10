import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={fontSans.variable}>
      <body className={`font-sans ${fontSans.className}`}>{children}</body>
    </html>
  );
}
