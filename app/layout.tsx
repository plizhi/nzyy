import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "内在结构养育 | 看见孩子，更理解孩子",
  description:
    '一套以"心神"为核心的专业育儿方法论体系。帮助孩子成为一个内在稳固、有力量、能享受生命的人。',
  keywords: "育儿, 内在结构养育, 家庭教育, 亲子关系, 心理养育",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: "#FBF7F1", color: "#3E2C2C" }}>
        {children}
      </body>
    </html>
  );
}
