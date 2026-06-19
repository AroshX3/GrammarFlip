import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoBangla = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
});

export const metadata = {
  title: "GrammerFlip",
  description: "Flip any sentence. Understand the grammar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${notoBangla.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
