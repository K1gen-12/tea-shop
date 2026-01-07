import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { CartProvider } from "@/context/CartContext";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif-jp",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans-jp",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-accent-en",
  display: "swap",
});

export const metadata: Metadata = {
  title: "深茶 Fukamicha | 日本茶EC",
  description: "伝統と現代の融合。深茶（Fukamicha）公式オンラインショップ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          shipporiMincho.variable,
          zenKakuGothicNew.variable,
          cormorantGaramond.variable,
          "font-sans-jp antialiased bg-background-base text-text-primary min-h-screen flex flex-col"
        )}
      >
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
