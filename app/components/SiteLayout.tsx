import Link from "next/link";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <>
    <div className="topline"><div className="shell"><span>Strategic Communication · Digital Intelligence</span><span>Indonesia · Working across sectors</span></div></div>
    <header className="nav"><div className="shell navinner">
      <Link href="/" className="brand brand-logo" aria-label="BrandCore Indonesia — Home"><img src="https://apps.brandcore.id/brandcore-logo-transparent.png" alt="Logo BrandCore Indonesia" title="BrandCore Indonesia" width="138" height="155" loading="eager" fetchPriority="high" /></Link>
      <nav className="navlinks" aria-label="Main navigation"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/products/corepr">CorePR</Link><Link href="/portfolio">Portfolio</Link><Link href="/insights">Insights</Link></nav>
      <Link className="navcta" href="/contact">LET'S TALK ↗</Link>
    </div></header>
    {children}
    <footer className="footer"><div className="shell"><div className="footergrid">
      <div className="footer-brand-column"><div className="footer-brandlockup"><img src="https://apps.brandcore.id/brandcore-logo-transparent.png" alt="Logo BrandCore Indonesia" title="BrandCore Indonesia" width="138" height="155" loading="lazy" /></div><p className="footer-tagline">Kami Bekerja dari Core-nya.</p><p className="footer-description">Digital PR Agency yang membantu organisasi membangun reputasi, memperkuat hubungan media, dan meningkatkan visibilitas digital.</p><div className="footer-contacts"><a href="mailto:info@brandcore.id">info@brandcore.id</a><a href="mailto:business@brandcore.id">business@brandcore.id</a><a href="https://wa.me/6281286897880" target="_blank" rel="noopener noreferrer">+62 812-8689-7880 ↗</a></div></div>
      <div className="footer-nav-column"><h4>Services</h4><Link href="/services">Semua Layanan</Link><Link href="/services/press-release-distribution">Press Release Distribution</Link><Link href="/services/seo">SEO Services</Link><Link href="/services/pr-consulting">PR & Strategic Communication</Link><Link href="/services/media-intelligence">Media Intelligence</Link><Link href="/services/digital-campaign">Digital Campaign</Link><Link href="/services/reputation-management">Reputation Management</Link></div>
      <div className="footer-nav-column"><h4>Explore</h4><Link href="/products/corepr">CorePR Platform</Link><Link href="/about">About BrandCore</Link><Link href="/portfolio">Portfolio</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link><a href="https://apps.brandcore.id">Open CorePR ↗</a></div>
      <div className="footer-nav-column"><h4>Get in touch</h4><p className="footer-contact-note">Punya kebutuhan PR, distribusi media, atau SEO? Mari diskusikan kebutuhan bisnis Anda.</p><Link className="footer-contact-cta" href="/contact">Diskusikan Proyek ↗</Link><div className="footer-legal"><Link href="/legal/terms">Terms & Conditions</Link><Link href="/legal/privacy">Privacy Policy</Link><Link href="/legal/disclaimer">Disclaimer</Link><Link href="/legal/cookies">Cookie Policy</Link></div></div>
    </div><div className="copyright"><span>© {new Date().getFullYear()} BrandCore Indonesia. All rights reserved.</span><span>Digital PR Agency · Indonesia</span></div></div></footer>
    <FloatingWhatsApp />
  </>;
}
