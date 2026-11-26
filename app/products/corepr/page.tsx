import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.brandcore.id";

export const metadata: Metadata = {
  title: "CorePR | Tools Manajemen PR untuk Kerja PR Lebih Efisien",
  description: "CorePR adalah Tools Manajemen PR dan Platform Manajemen PR untuk mengurangi pekerjaan PR manual. Otomatiskan input publikasi dari URL, kelola media, tinjau sentimen, dan siapkan laporan dalam satu workspace.",
  alternates: { canonical: "/products/corepr" },
  keywords: [
    "Tools Manajemen PR",
    "Platform Manajemen PR",
    "software manajemen PR",
    "PR monitoring tools",
    "media monitoring Indonesia",
    "otomatisasi laporan PR",
    "manajemen publikasi media"
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "BrandCore Indonesia",
    url: siteUrl + "/products/corepr",
    title: "CorePR — Tools Manajemen PR untuk Kerja PR Lebih Efisien",
    description: "Kurangi pekerjaan PR yang repetitif dengan ekstraksi data artikel dari URL, pengelolaan publikasi, analisis sentimen berbantuan AI, dan pelaporan terpusat.",
    images: [{ url: "https://apps.brandcore.id/brandcore-logo-transparent.png", width: 138, height: 155, alt: "CorePR by BrandCore Indonesia" }]
  },
  twitter: {
    card: "summary",
    title: "CorePR — Platform Manajemen PR",
    description: "Platform Manajemen PR untuk publikasi media, monitoring, analisis sentimen, dan laporan.",
    images: ["https://apps.brandcore.id/brandcore-logo-transparent.png"]
  }
};

const features = [
  ["01","URL-to-Publication Automation","Tempel URL artikel untuk mengekstrak judul, tanggal publikasi, dan identitas media secara otomatis. Hasilnya dapat ditinjau sebelum disimpan."],
  ["02","Media Database & Tier Matching","Cocokkan domain artikel dengan database media organisasi untuk mengisi nama media dan tier jika tersedia."],
  ["03","Sentiment Analysis","Dapatkan klasifikasi sentimen dan penjelasan berbantuan AI ketika konten artikel berhasil dianalisis. Hasil yang belum pasti dapat ditinjau tim."],
  ["04","Publication Management","Kelola publikasi, kaitkan dengan press release atau campaign, cari data, periksa duplikasi, dan perbarui informasi."],
  ["05","Client & Workspace Management","Atur klien, organisasi, anggota tim, dan peran akses dalam workspace."],
  ["06","Reports Center","Konsolidasikan data publikasi dan hasil monitoring untuk mendukung pelaporan PR."],
  ["07","Keyword Monitoring","Pantau artikel berdasarkan keyword organisasi atau klien dan tinjau hasil pencocokan."],
  ["08","PR Activities & Calendar","Catat aktivitas PR, rencanakan agenda, dan kelola pekerjaan komunikasi dalam satu alur."]
];

const steps = [
  ["01","Pilih campaign","Hubungkan publikasi dengan press release atau campaign yang relevan."],
  ["02","Paste URL artikel","Masukkan satu atau beberapa URL, satu URL per baris. Hingga 100 URL per batch."],
  ["03","Ekstraksi otomatis","CorePR mengambil metadata artikel dan mencocokkan domain media dengan database."],
  ["04","Review hasil","Periksa judul, tanggal, media, tier, sentimen, dan tandai data yang perlu diperbaiki."],
  ["05","Simpan & laporkan","Simpan publikasi ke workspace dan gunakan data yang tersedia untuk monitoring serta laporan."]
];

export default function CorePRPage() {
  return (
    <main className="corepr-page">
      <section className="corepr-hero">
        <div className="corepr-shell corepr-hero-grid">
          <div className="corepr-hero-copy">
            <div className="corepr-eyebrow"><span></span> PR INTELLIGENCE PLATFORM BY BRANDCORE</div>
            <h1>Kurangi pekerjaan PR manual. <em>Fokus pada strategi dan hasil.</em></h1>
            <p className="corepr-lead">CorePR adalah Tools Manajemen PR yang membantu tim dan agensi mengubah pekerjaan operasional yang repetitif menjadi alur kerja yang lebih efisien. Tempel URL artikel untuk mengambil data publikasi secara otomatis, kelola coverage, tinjau sentimen, dan rapikan pelaporan dalam satu workspace.</p>
            <div className="corepr-actions">
              <a className="corepr-btn primary" href="https://apps.brandcore.id/register">Mulai Gunakan CorePR ↗</a>
              <a className="corepr-btn secondary" href="#fitur">Jelajahi Fitur</a>
            </div>
            <div className="corepr-trustline"><span>BY BRANDCORE INDONESIA</span><i></i><span>BUILT FOR PR TEAMS & AGENCIES</span></div>
          </div>
          <div className="corepr-hero-visual" aria-label="Ilustrasi dashboard CorePR">
            <div className="corepr-orbit"></div>
            <div className="corepr-dashboard">
              <div className="corepr-dash-top"><div><b>CorePR</b><small>PR INTELLIGENCE WORKSPACE</small></div><span><i></i> LIVE WORKSPACE</span></div>
              <div className="corepr-dash-title">Publication overview</div>
              <div className="corepr-stat-grid">
                <div><small>TOTAL PUBLICATIONS</small><b>1,284</b><span>Tracked coverage</span></div>
                <div><small>UNIQUE MEDIA</small><b>326</b><span>Media outlets</span></div>
                <div><small>POSITIVE SENTIMENT</small><b>68.4%</b><span>AI-assisted analysis</span></div>
              </div>
              <div className="corepr-dash-lower">
                <div className="corepr-feed"><small>RECENT PUBLICATIONS</small>{["Brand mention detected","New article indexed","Media coverage updated"].map((x,i)=><div className="corepr-feed-row" key={x}><span>{["N","M","P"][i]}</span><div><b>{x}</b><small>{["Online media · Today","Business · Today","National · Yesterday"][i]}</small></div><i></i></div>)}</div>
                <div className="corepr-chart"><small>MEDIA COVERAGE</small><div>{[34,49,42,66,56,76,61,88,73,96].map((h,i)=><i key={i} style={{height:h+"%"}} />)}</div><span>Coverage trend · Illustration</span></div>
              </div>
            </div>
            <div className="corepr-float-tag tag-extract"><span>↗</span><div><b>URL extraction</b><small>Metadata detected</small></div></div>
            <div className="corepr-float-tag tag-sentiment"><span className="corepr-pulse"></span><div><b>Sentiment analysis</b><small>Review-ready results</small></div></div>
          </div>
        </div>
      </section>

      <section className="corepr-proof">
        <div className="corepr-shell corepr-proof-grid"><div><b>ONE WORKSPACE</b><span>Data PR terpusat</span></div><div><b>AUTOMATED INPUT</b><span>Ekstraksi URL artikel</span></div><div><b>AI-ASSISTED</b><span>Analisis sentimen</span></div><div><b>REPORT-READY</b><span>Data siap ditinjau</span></div></div>
      </section>

      <section className="corepr-section corepr-automation">
        <div className="corepr-shell corepr-two-col">
          <div><div className="corepr-eyebrow">LESS MANUAL WORK · MORE STRATEGIC PR</div><h2>Tinggalkan input publikasi satu per satu. <em>Biarkan CorePR mengerjakan bagian repetitifnya.</em></h2><p className="corepr-body">Pekerjaan PR sering tersita untuk membuka artikel, menyalin judul, mencatat tanggal, mencari nama media, mengelompokkan coverage, dan menyusun rekap. CorePR menyederhanakan proses tersebut: tempel URL publikasi, jalankan ekstraksi otomatis, lalu tinjau hasilnya sebelum disimpan.</p><ul className="corepr-checks"><li>Ekstraksi judul dan tanggal artikel</li><li>Identifikasi media dari domain dan pencocokan database</li><li>Pengisian tier media jika outlet tersedia di database</li><li>Analisis sentimen berbantuan AI bila konten dapat dianalisis</li><li>Pemeriksaan duplikasi sebelum penyimpanan</li></ul></div>
          <div className="corepr-workflow-card"><div className="corepr-workflow-head"><span>URL INPUT WORKFLOW</span><b>COREPR AUTOMATION</b></div><div className="corepr-url-box"><small>PASTE ARTICLE URLS</small><p>https://news-example.id/brand-update...</p><p>https://media-example.id/company-news...</p><p>https://portal-example.id/industry...</p></div><div className="corepr-process"><span>↓</span> Extracting article metadata</div><div className="corepr-result"><div><small>MEDIA</small><b>Matched outlet</b></div><div><small>ARTICLE TITLE</small><b>Title extracted from article</b></div><div><small>PUBLISHED DATE</small><b>Detected publication date</b></div><div><small>SENTIMENT</small><b className="corepr-sentiment">AI-assisted · Review</b></div><div><small>STATUS</small><b className="corepr-ready">Ready for review</b></div></div><div className="corepr-workflow-foot">Illustrasi alur ekstraksi — hasil bergantung pada akses dan metadata sumber artikel.</div></div>
        </div>
      </section>

      <section className="corepr-section" id="fitur">
        <div className="corepr-shell"><div className="corepr-section-heading"><div><div className="corepr-eyebrow">AUTOMATE · ORGANIZE · ANALYZE</div><h2>Kurangi tugas administratif. <em>Satukan alur kerja PR.</em></h2></div><p>Mulai dari input publikasi hingga pengelolaan data dan pelaporan, CorePR membantu tim mengurangi pekerjaan manual agar lebih banyak waktu tersedia untuk analisis, koordinasi, dan strategi komunikasi.</p></div><div className="corepr-feature-grid">{features.map(([n,t,d])=><article className="corepr-feature" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div>
      </section>

      <section className="corepr-section corepr-dark">
        <div className="corepr-shell"><div className="corepr-section-heading"><div><div className="corepr-eyebrow">HOW IT WORKS</div><h2>Otomatisasi pekerjaan repetitif. <em>Keputusan tetap di tangan tim.</em></h2></div><p>CorePR mengambil alih langkah administratif yang bisa diotomatisasi. Tim tetap memeriksa hasil ekstraksi dan menentukan data yang siap disimpan atau dilaporkan.</p></div><div className="corepr-steps">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div>
      </section>

      <section className="corepr-section">
        <div className="corepr-shell"><div className="corepr-section-heading"><div><div className="corepr-eyebrow">WHO IT'S FOR</div><h2>Dibangun untuk tim yang bekerja dengan media dan reputasi.</h2></div><p>Platform Manajemen PR untuk berbagai model organisasi dan kebutuhan komunikasi.</p></div><div className="corepr-audience-grid"><article><span>01 / AGENCY</span><h3>PR & Digital Agency</h3><p>Kelola banyak klien, campaign, publikasi, dan laporan dalam workspace yang terstruktur.</p></article><article><span>02 / CORPORATE</span><h3>Corporate Communication</h3><p>Pantau eksposur media, dokumentasikan aktivitas PR, dan susun insight untuk kebutuhan internal.</p></article><article><span>03 / INSTITUTION</span><h3>Government & Institutions</h3><p>Organisasikan data pemberitaan, monitoring isu, dan pelaporan komunikasi institusi.</p></article></div></div>
      </section>

      <section className="corepr-section corepr-security">
        <div className="corepr-shell corepr-two-col"><div><div className="corepr-eyebrow">WORKSPACE & ACCESS</div><h2>Kolaborasi tim dengan pengaturan akses yang jelas.</h2><p className="corepr-body">Setiap organisasi bekerja dalam workspace masing-masing. CorePR menyediakan peran Owner, Admin, Project Admin, Editor, dan Viewer untuk membantu mengatur tanggung jawab anggota.</p></div><div className="corepr-role-list">{["Owner","Admin","Project Admin","Editor","Viewer"].map((role,i)=><div key={role}><span>0{i+1}</span><b>{role}</b><small>{["Workspace ownership","Organization administration","Project coordination","Content & publication work","Read-only access"][i]}</small></div>)}</div></div>
      </section>

      <section className="corepr-cta">
        <div className="corepr-shell"><div className="corepr-eyebrow">START WITH COREPR</div><h2>Kurangi pekerjaan manual. Beri tim PR lebih banyak ruang untuk berpikir strategis.</h2><p>Gunakan CorePR untuk mengotomatisasi input publikasi, merapikan data media, mengelola coverage, dan mendukung pelaporan PR dalam satu workspace.</p><div className="corepr-actions"><a className="corepr-btn light" href="https://apps.brandcore.id/register">Mulai Gunakan CorePR ↗</a><a className="corepr-btn cta-outline" href="https://wa.me/6281286897880?text=Halo%20BrandCore%2C%20saya%20ingin%20konsultasi%20tentang%20CorePR.">Konsultasi dengan Tim</a></div></div>
      </section>
      <section className="corepr-faq"><div className="corepr-shell"><div className="corepr-eyebrow">FREQUENTLY ASKED QUESTIONS</div><h2>Pertanyaan tentang CorePR</h2><div className="corepr-faq-grid">
        <details><summary>Apa itu CorePR?</summary><p>CorePR adalah Tools Manajemen PR dan Platform Manajemen PR yang membantu tim mengurangi pekerjaan operasional PR yang repetitif melalui otomatisasi input publikasi, pengelolaan data media, monitoring, dan pelaporan dalam satu workspace.</p></details>
        <details><summary>Bagaimana input publikasi otomatis bekerja?</summary><p>Pengguna menempelkan URL artikel, satu URL per baris. CorePR mencoba mengekstrak judul, tanggal, dan identitas media, lalu mencocokkan domain dengan Media Database. Hasilnya dapat diperiksa dan diperbaiki sebelum disimpan.</p></details>
        <details><summary>Apakah CorePR dapat memproses banyak URL sekaligus?</summary><p>Modul publikasi saat ini mendukung hingga 100 URL dalam satu batch. URL diproses bertahap dan hasil ekstraksi ditampilkan untuk ditinjau.</p></details>
        <details><summary>Apakah sentimen artikel otomatis dianalisis?</summary><p>CorePR memiliki alur analisis sentimen berbantuan AI untuk artikel yang berhasil diproses. Hasil yang gagal, tidak lengkap, atau perlu verifikasi tetap membutuhkan pemeriksaan pengguna.</p></details>
        <details><summary>Siapa yang dapat menggunakan CorePR?</summary><p>CorePR dirancang untuk PR agency, tim corporate communication, dan organisasi atau institusi yang mengelola publikasi serta aktivitas komunikasi.</p></details>
        <details><summary>Apakah data antarorganisasi terpisah?</summary><p>CorePR menggunakan struktur workspace organisasi dan kontrol akses berbasis keanggotaan. Konfigurasi database dan kebijakan keamanan tetap perlu diaktifkan dan diuji sebelum penggunaan produksi.</p></details>
      </div></div></section>
    </main>
  );
}
