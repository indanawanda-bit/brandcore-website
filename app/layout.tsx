import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollEffects from "./components/ScrollEffects";

const siteUrl = "https://www.brandcore.id";
const logoUrl = "https://apps.brandcore.id/brandcore-logo-transparent.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8f2638"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BrandCore Indonesia | Strategic Communication & Digital Intelligence",
    template: "%s | BrandCore Indonesia"
  },
  description: "BrandCore Indonesia adalah agency strategic communication dan digital intelligence. Kami membantu organisasi membangun reputasi, mengelola media, serta memperkuat SEO, GEO, dan visibilitas digital.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "BrandCore Indonesia",
    url: siteUrl,
    title: "BrandCore Indonesia | Strategic Communication & Digital Intelligence",
    description: "Agency strategic communication dan digital intelligence untuk reputasi, media intelligence, SEO, GEO, dan visibilitas digital.",
    images: [{ url: logoUrl, width: 138, height: 155, alt: "Logo BrandCore Indonesia" }]
  },
  twitter: {
    card: "summary",
    title: "BrandCore Indonesia | Strategic Communication & Digital Intelligence",
    description: "Strategic communication, media intelligence, SEO, GEO, dan digital visibility.",
    images: [logoUrl]
  },
  icons: {
    icon: [{ url: logoUrl, type: "image/png" }],
    shortcut: [logoUrl],
    apple: [{ url: logoUrl, type: "image/png" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}<ScrollEffects /></body></html>;
}
