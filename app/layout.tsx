import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandcore.id"),
  title: { default: "BrandCore Indonesia | Kami Bekerja dari Core-nya", template: "%s | BrandCore Indonesia" },
  description: "BrandCore Indonesia membantu organisasi membangun reputasi, komunikasi strategis, media intelligence, dan visibilitas digital melalui pendekatan berbasis data.",
  openGraph: { type: "website", locale: "id_ID", siteName: "BrandCore Indonesia", title: "BrandCore Indonesia", description: "Strategic Communication. Digital Intelligence. Measurable Impact." },
  icons: { icon: [{ url: "https://apps.brandcore.id/brandcore-logo-transparent.png", type: "image/png" }] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
