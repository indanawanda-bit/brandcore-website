"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "brandcore-home-promo-seen";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {}

    const timer = window.setTimeout(() => setOpen(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (!open) return null;

  return (
    <div className="promo-modal-backdrop" role="presentation" onClick={closePopup}>
      <section
        className="promo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="promo-modal-close" type="button" aria-label="Tutup promo" onClick={closePopup}>×</button>
        <div className="promo-modal-kicker"><span></span> PENAWARAN KHUSUS BRANDCORE</div>
        <div className="promo-modal-content">
          <div>
            <p className="promo-modal-overline">PERLUAS JANGKAUAN BRAND ANDA</p>
            <h2 id="promo-modal-title">Publikasi di <em>100+ Media</em></h2>
            <p className="promo-modal-description">Tingkatkan eksposur brand melalui publikasi di jaringan media online.</p>
          </div>
          <div className="promo-modal-price">
            <span className="promo-modal-discount">DISKON 50%</span>
            <span className="promo-modal-old">Rp4.000.000</span>
            <small>Harga promo</small>
            <strong>Rp2.000.000</strong>
            <span className="promo-modal-includes">Untuk publikasi 100+ media</span>
          </div>
        </div>
        <a
          className="promo-modal-cta"
          href="https://wa.me/6281286897880?text=Halo%20BrandCore%2C%20saya%20tertarik%20dengan%20promo%20publikasi%20100%2B%20media%20seharga%20Rp2.000.000."
          target="_blank"
          rel="noopener noreferrer"
          onClick={closePopup}
        >
          Klaim Promo via WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <p className="promo-modal-note">Klik di luar banner atau tombol × untuk menutup</p>
      </section>
    </div>
  );
}
