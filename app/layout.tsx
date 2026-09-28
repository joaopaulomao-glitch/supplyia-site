import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://supplyia.com.br"),
  title: "Claude aplicado à Logística e Supply Chain | SupplyIA",
  description:
    "Treinamento in-company para transformar um processo real de supply chain com Claude, governança e resultado medido.",
  icons: {
    icon: "/supplyia-icon.svg",
    shortcut: "/supplyia-icon.svg",
  },
  openGraph: {
    title: "Claude aplicado à Logística e Supply Chain | SupplyIA",
    description: "Um processo real. Governança. Resultado medido.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Claude aplicado à Logística e Supply Chain, SupplyIA" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude aplicado à Logística e Supply Chain | SupplyIA",
    description: "Um processo real. Governança. Resultado medido.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
