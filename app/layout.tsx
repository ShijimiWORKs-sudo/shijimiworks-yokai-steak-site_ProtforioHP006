import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shijimiworks-interior.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ShijimiWORKs Interior Design Consulting | 空間デザイン相談",
  description:
    "ShijimiWORKs Interior Design Consultingは、住宅・店舗・オフィスのインテリア、壁紙、配色、家具配置、照明計画をトータルで提案する空間デザインコンサルティング会社です。",
  keywords: [
    "インテリアコンサルティング",
    "空間デザイン",
    "カラーコーディネート",
    "壁紙",
    "配色提案",
    "家具配置",
    "照明計画",
    "店舗デザイン",
    "オフィスデザイン",
    "ShijimiWORKs",
  ],
  authors: [{ name: "ShijimiWORKs" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ShijimiWORKs Interior Design Consulting",
    title: "ShijimiWORKs Interior Design Consulting | 空間デザイン相談",
    description:
      "住宅・店舗・オフィスのインテリア、壁紙、配色、家具配置、照明計画をトータルで提案する空間デザインコンサルティング会社です。",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "ShijimiWORKs Interior Design Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs Interior Design Consulting | 空間デザイン相談",
    description:
      "住宅・店舗・オフィスのインテリア、壁紙、配色、家具配置、照明計画をトータルで提案する空間デザインコンサルティング会社です。",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8f5ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
