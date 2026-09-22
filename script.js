// ==========================================================================
// MUHAMMAD FAHMI ALFARIZI — CLEAN MODERN PORTFOLIO INTERACTIVE SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCopyEmail();
  initCvDownload();
  initScrollReveal();
});

// --------------------------------------------------------------------------
// SCROLL REVEAL ANIMATION CONTROLLER
// --------------------------------------------------------------------------
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// 1. PROJECT DATA FROM CV
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// 1. PROJECT DATA FROM CV & REAL WORKSPACE FILES
// --------------------------------------------------------------------------
const projectData = {
  'food-order': {
    tag: 'NEXT.JS 16 & REACT 19 FULL STACK APP',
    title: 'Sistem Pemesanan Makanan Berbasis Web',
    techStack: ['Next.js 16 (App Router)', 'React 19', 'Tailwind CSS v4', 'Shadcn UI', 'Prisma ORM', 'MySQL', 'JWT Auth', 'RBAC Middleware'],
    images: [
      { src: 'Food Order/Dashboard.webp', title: 'Dashboard Utama & Katalog Makanan' },
      { src: 'Food Order/Menu.webp', title: 'Tampilan Katalog Menu Interaktif' },
      { src: 'Food Order/Cart.webp', title: 'Keranjang Belanja (Live Invoice Panel)' },
      { src: 'Food Order/Checkout.webp', title: 'Proses Checkout & Transaksi' },
      { src: 'Food Order/Order Success.webp', title: 'Konfirmasi Pesanan Berhasil' },
      { src: 'Food Order/Recent.webp', title: 'Riwayat & Status Pesanan Realtime' },
      { src: 'Food Order/Login.webp', title: 'Halaman Login & Autentikasi User' },
      { src: 'Food Order/Admin Dashboard.webp', title: 'Dashboard Pengelolaan Admin' },
      { src: 'Food Order/Admin Menu.webp', title: 'Manajemen Data Menu Makanan (CRUD)' },
      { src: 'Food Order/Admin Payment.webp', title: 'Konfirmasi & Status Pembayaran' }
    ],
    description: `
      <p>Sistem aplikasi pemesanan makanan berbasis web modern yang dirancang untuk memberikan pengalaman transaksi yang cepat, intuitif, dan responsif bagi pelanggan maupun administrator resto.</p>
      <ul>
        <li><strong>Modernisasi Codebase:</strong> Memodernisasi dan merefaktor codebase dari PHP Native ke arsitektur Next.js 16 (App Router) dan React 19.</li>
        <li><strong>Autentikasi & Authorization:</strong> Mengembangkan fitur registrasi, login, dan autentikasi pengguna berbasis JWT serta Next.js Middleware (RBAC).</li>
        <li><strong>Katalog Interaktif:</strong> Fitur katalog makanan interaktif dengan pencarian cepat dan filter kategori berbasis Tailwind CSS v4.</li>
        <li><strong>Live Invoice Panel:</strong> Mengimplementasikan keranjang belanja real-time (Live Invoice Panel) dan proses checkout otomatis.</li>
        <li><strong>Order Status Tracker:</strong> Pengelolaan pesanan dan perubahan status pesanan secara real-time.</li>
        <li><strong>Multi-Metode Pembayaran:</strong> Riwayat pesanan dan konfirmasi pembayaran multi-metode (QRIS, Transfer Bank, Tunai).</li>
        <li><strong>Dashboard Admin CRUD:</strong> Dashboard administrator untuk mengelola menu (CRUD), pengguna, dan pesanan.</li>
        <li><strong>Prisma ORM & MySQL:</strong> Pengelolaan stok dan ketersediaan menu berbasis Prisma ORM dan database MySQL.</li>
      </ul>
    `
  },
  'spk-band': {
    tag: 'DECISION SUPPORT SYSTEM (AHP & TOPSIS)',
    title: 'Sistem Pendukung Keputusan Pemilihan Band Lokal',
    techStack: ['Python', 'Django Framework', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Spotify Web API'],
    images: [
      { src: 'Web/SPK EO/3 Dashboard Admin.webp', title: 'Dashboard Utama Administrator' },
      { src: 'Web/SPK EO/8 Dashboard User.webp', title: 'Dashboard Antarmuka Pengguna' },
      { src: 'Web/SPK EO/1 - Login.webp', title: 'Halaman Login Akun Pengguna' },
      { src: 'Web/SPK EO/2 - Registrasi.webp', title: 'Halaman Pendaftaran Akun Baru' },
      { src: 'Web/SPK EO/4 Data Band Admin.webp', title: 'Kelola Data Band & Integrasi Spotify API' },
      { src: 'Web/SPK EO/5 Kriteria Admin.webp', title: 'Pengaturan Kriteria Penilaian AHP' },
      { src: 'Web/SPK EO/6 Perbandingan Admin.webp', title: 'Matriks Perbandingan Berpasangan AHP' },
      { src: 'Web/SPK EO/7 Rekomendasi Admin.webp', title: 'Hasil Perankingan Metode TOPSIS (Admin)' },
      { src: 'Web/SPK EO/9 Data Band User.webp', title: 'Katalog Data Band Lokal (User)' },
      { src: 'Web/SPK EO/10 Rekomendasi Admin.webp', title: 'Laporan Rekomendasi Band Terbaik' }
    ],
    description: `
      <p>Sistem pengambil keputusan cerdas untuk menentukan perankingan band lokal secara objektif berbasis kombinasi metode AHP (Analytical Hierarchy Process) dan TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) terintegrasi dengan Spotify Web API.</p>
      <ul>
        <li><strong>Manajemen Data Band:</strong> Sistem pengelolaan data band, kriteria, perbandingan AHP, dan hasil perankingan.</li>
        <li><strong>Metode AHP:</strong> Mengimplementasikan AHP untuk menentukan bobot prioritas setiap kriteria melalui matriks perbandingan berpasangan dan pengujian konsistensi.</li>
        <li><strong>Metode TOPSIS:</strong> Mengimplementasikan TOPSIS untuk melakukan normalisasi, pembobotan, perhitungan solusi ideal, jarak alternatif, dan nilai preferensi.</li>
        <li><strong>Spotify Web API Integration:</strong> Mengintegrasikan Spotify Web API untuk memperoleh data band seperti jumlah followers, popularity, genre, jumlah album, jumlah lagu, dan tahun perilisan terakhir.</li>
        <li><strong>Kriteria Benefit & Cost:</strong> Menerapkan penanganan kriteria Benefit dan Cost secara akurat dalam proses perhitungan.</li>
      </ul>
    `
  },
  'spk-siswa': {
    tag: 'DECISION SUPPORT SYSTEM (MOORA METHOD)',
    title: 'Sistem Pendukung Keputusan Penentuan Siswa Berprestasi',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    images: [
      { src: 'SPK MOORA/Dashboard.webp', title: 'Dashboard Ringkasan Sistem MOORA' },
      { src: 'SPK MOORA/Login.webp', title: 'Halaman Autentikasi Login' },
      { src: 'SPK MOORA/Data siswa.webp', title: 'Manajemen Master Data Siswa' },
      { src: 'SPK MOORA/Data Kriteria.webp', title: 'Kelola Kriteria & Bobot Assessment' },
      { src: 'SPK MOORA/Data Nilai.webp', title: 'Input & Pemrosesan Data Nilai Siswa' },
      { src: 'SPK MOORA/MOORA.webp', title: 'Matriks Decision & Calculation MOORA' },
      { src: 'SPK MOORA/Hasil MOORA.webp', title: 'Hasil Perankingan Siswa Berprestasi' },
      { src: 'SPK MOORA/Kelola User.webp', title: 'Manajemen Pengguna & Role Access' }
    ],
    description: `
      <p>Sistem berbasis web untuk membantu sekolah menentukan siswa berprestasi secara otomatis, sistematis, dan objektif berbasis metode MOORA (Multi-Objective Optimization on the basis of Ratio Analysis).</p>
      <ul>
        <li><strong>Manajemen Data & Kriteria:</strong> Mengembangkan sistem untuk mengelola data siswa, kriteria penilaian, bobot kriteria, dan perankingan.</li>
        <li><strong>Metode MOORA:</strong> Mengimplementasikan perhitungan MOORA meliputi pembentukan matriks keputusan, normalisasi, normalisasi terbobot, perhitungan nilai optimasi, dan perankingan.</li>
        <li><strong>Benefit & Cost Multi-Kriteria:</strong> Menerapkan pembobotan kriteria Benefit dan Cost sesuai kebutuhan penilaian.</li>
        <li><strong>Rincian Perhitungan:</strong> Menyediakan rincian hasil perhitungan matematika secara terperinci agar proses pengambilan keputusan dapat ditelusuri.</li>
      </ul>
    `
  },
  'presensi-mts': {
    tag: 'ATTENDANCE MANAGEMENT SYSTEM',
    title: 'Sistem Informasi Presensi Siswa MTs',
    techStack: ['Python', 'Django Framework', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    images: [
      { src: 'Presensi MTs/Dashboard.webp', title: 'Dashboard Statistik & Overview Presensi' },
      { src: 'Presensi MTs/Login.webp', title: 'Halaman Login Admin & Guru' },
      { src: 'Presensi MTs/Presensi.webp', title: 'Modul Pencatatan Kehadiran Siswa Per Kelas' },
      { src: 'Presensi MTs/Rekap.webp', title: 'Rekapitulasi Kehadiran & Ekspor Excel' }
    ],
    description: `
      <p>Sistem Informasi Manajemen Presensi Siswa dirancang khusus untuk mempermudah guru dan sekolah dalam mencatat, memantau, dan merekapitulasi data kehadiran siswa secara akurat dan real-time.</p>
      <ul>
        <li><strong>Autentikasi Multi-Role:</strong> Hak akses khusus untuk Admin Sekolah dan Guru Mata Pelajaran.</li>
        <li><strong>Pencatatan Kehadiran Cepat:</strong> Modul presensi interaktif per kelas dan mata pelajaran (Hadir, Izin, Sakit, Alpa).</li>
        <li><strong>Rekapitulasi Otomatis:</strong> Perhitungan kehadiran otomatis per siswa, kelas, dan periode.</li>
        <li><strong>Ekspor Laporan Excel:</strong> Memungkinkan ekspor rekap presensi langsung ke file format .xlsx untuk arsip sekolah.</li>
      </ul>
    `
  }
};

// --------------------------------------------------------------------------
// 2. NAVBAR & NAVIGATION CONTROLLER
// --------------------------------------------------------------------------
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll background effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active link highlighter on scroll
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// --------------------------------------------------------------------------
// 3. PROJECT DETAIL MODAL CONTROLLER & GALLERY SWITCHER
// --------------------------------------------------------------------------
function switchModalGalleryImage(projectId, index) {
  const data = projectData[projectId];
  if (!data || !data.images || !data.images[index]) return;

  const targetImg = data.images[index];
  const mainImg = document.getElementById('galleryMainImg');
  const caption = document.getElementById('galleryCaption');
  const counter = document.getElementById('galleryCounter');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  if (mainImg) {
    mainImg.style.opacity = '0.4';
    setTimeout(() => {
      mainImg.src = targetImg.src;
      mainImg.alt = targetImg.title;
      mainImg.style.opacity = '1';
    }, 150);
  }

  if (caption) {
    caption.textContent = targetImg.title;
  }

  if (counter) {
    counter.textContent = `Tampilan Screenshot ${index + 1} dari ${data.images.length}`;
  }

  thumbBtns.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.classList.remove('active');
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const data = projectData[projectId];
  
  if (!data) return;
  
  document.getElementById('modalTag').textContent = data.tag;
  document.getElementById('modalTitle').textContent = data.title;
  
  const techBadgesHtml = data.techStack.map(t => `<span class="tech-chip">${t}</span>`).join('');
  
  let galleryHtml = '';
  if (data.images && data.images.length > 0) {
    const firstImg = data.images[0];
    const thumbsHtml = data.images.map((img, idx) => `
      <button type="button" class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchModalGalleryImage('${projectId}', ${idx})">
        <img src="${img.src}" alt="${img.title}">
        <span class="thumb-title">${img.title}</span>
      </button>
    `).join('');

    galleryHtml = `
      <div class="modal-gallery">
        <div class="gallery-main-view">
          <img id="galleryMainImg" src="${firstImg.src}" alt="${firstImg.title}">
          <div class="gallery-overlay">
            <span class="gallery-caption" id="galleryCaption">${firstImg.title}</span>
            <span class="gallery-counter" id="galleryCounter">Tampilan Screenshot 1 dari ${data.images.length}</span>
          </div>
        </div>
        <div class="gallery-thumbnails">
          ${thumbsHtml}
        </div>
      </div>
    `;
  }

  document.getElementById('modalBody').innerHTML = `
    ${galleryHtml}
    <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.25rem;">
      ${techBadgesHtml}
    </div>
    ${data.description}
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('projectModal');
  if (e.target === modal) {
    closeProjectModal();
  }
});

// --------------------------------------------------------------------------
// 4. COPY EMAIL CONTROLLER
// --------------------------------------------------------------------------
function initCopyEmail() {
  const emailText = 'fahmimal99@gmail.com';
  const copyHeroBtn = document.getElementById('copyEmailHeroBtn');
  const copyContainer = document.getElementById('emailCopyContainer');

  async function performCopy(btnElement) {
    try {
      await navigator.clipboard.writeText(emailText);
      const originalText = btnElement.innerHTML;
      btnElement.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;"></i> Tersalin!';
      setTimeout(() => {
        btnElement.innerHTML = originalText;
      }, 2000);
    } catch (err) {
      alert(`Email: ${emailText}`);
    }
  }

  if (copyHeroBtn) {
    copyHeroBtn.addEventListener('click', () => performCopy(copyHeroBtn));
  }

  if (copyContainer) {
    copyContainer.addEventListener('click', () => {
      const copyIconBtn = document.getElementById('copyEmailIconBtn');
      performCopy(copyIconBtn || copyContainer);
    });
  }
}

// --------------------------------------------------------------------------
// 5. CV DOWNLOAD CONTROLLER
// --------------------------------------------------------------------------
function initCvDownload() {
  const downloadBtns = [
    document.getElementById('quickCvBtn'),
    document.getElementById('downloadCvContactBtn')
  ];

  downloadBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const cvText = `
=====================================================
MUHAMMAD FAHMI ALFARIZI
Mahasiswa Teknik Informatika | Full Stack Developer
Email: fahmimal99@gmail.com | Telepon: 0812-8984-2670
GitHub: https://github.com/Fahmizzy
LinkedIn: linkedin.com/in/muhammad-fahmi-alfarizi
=====================================================

RINGKASAN PROFIL:
Mahasiswa Teknik Informatika Universitas Pamulang yang memiliki minat dalam bidang pengembangan website, sistem informasi, dan teknologi digital. Memiliki pengalaman dalam pembuatan sistem berbasis web, mulai dari perancangan alur sistem, pembuatan tampilan frontend, pengelolaan database, hingga proses deployment.

HARD SKILLS:
- HTML, CSS, JavaScript, PHP, Python, Java
- Django Framework, Next.js 16 (App Router), Node.js, React 19, Tailwind CSS v4, Bootstrap
- MySQL, SQL, Prisma ORM, JWT Auth, Spotify Web API
- Visual Studio Code, Git, AI Tools (ChatGPT, Gemini, Claude)

SOFT SKILLS:
- Disiplin dan bertanggung jawab, Manajemen waktu, Komunikasi yang baik, Kerja sama tim, Cepat belajar, Mudah beradaptasi, Bekerja mandiri/tim.

PENGALAMAN KERJA:
Full Stack Developer - Perancangan Aplikasi Presensi Siswa (Februari - Juli 2025)
- Mengembangkan fitur autentikasi dan hak akses pengguna untuk Admin dan Guru.
- Mengembangkan modul presensi kelas & rekapitulasi kehadiran.
- Ekspor data presensi ke Excel & dashboard Tailwind CSS.
- Pemodelan basis data MySQL dengan ERD & UML.

PROYEK UNGGULAN:
1. Sistem Pemesanan Makanan Berbasis Web (Next.js 16 + React 19 + Prisma ORM + MySQL + JWT)
2. SPK Pemilihan Band Lokal (AHP & TOPSIS + Spotify Web API + Django Framework)
3. SPK Penentuan Siswa Berprestasi (MOORA Method + PHP + MySQL + Bootstrap)

PENDIDIKAN:
Universitas Pamulang - Teknik Informatika (2022 - 2026) | IPK: 3.47 / 4.00

SERTIFIKASI:
- Sertifikasi Kompetensi Okupasi Pemrogram BNSP (Juli 2026)
- Fundamental Course Software Engineering - RevoU (September 2024)
- Intro to Data Analytics - RevoU (November 2024)
- Tes Kemahiran Bahasa Inggris (TOEFL) - Lembaga Bahasa UNPAM (November 2025)
=====================================================
        `.trim();

        const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV_Muhammad_Fahmi_Alfarizi.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  });
}

