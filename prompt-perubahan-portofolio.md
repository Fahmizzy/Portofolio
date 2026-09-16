# Prompt Perbaikan Portofolio — Muhammad Fahmi Alfarizi

> Gunakan file ini sebagai instruksi untuk agent coding (Antigravity) pada project
> portofolio statis (HTML + CSS + JS vanilla). Kerjakan sesuai urutan prioritas.
> Sebelum mengubah apapun, baca dulu `index.html`, `style.css`, dan `script.js`
> secara menyeluruh agar konteks class/id yang sudah ada tidak dirusak.

---

## Konteks Project
- Struktur: `index.html`, `style.css`, `script.js` (vanilla, tanpa framework/bundler).
- Desain sistem: tema monokrom (hitam-putih) dengan aksen coklat/amber, gaya card
  "window chrome" (dot merah-kuning-hijau) dipakai konsisten di semua section.
- Section utama: `#hero`, `#about`, `#skills`, `#projects`, `#experience`,
  `#certifications`, `#contact`.

---

## TUGAS 1 — Aktifkan Animasi Scroll Reveal (Prioritas Tinggi)

**Masalah:** `script.js` sudah punya fungsi `initScrollReveal()` yang membuat
`IntersectionObserver` untuk elemen dengan class `.reveal-on-scroll`, dan
menambahkan class `is-visible` saat elemen masuk viewport. Tapi class
`.reveal-on-scroll` **tidak dipasang di elemen manapun** pada `index.html`, dan
tidak ada rule CSS untuk `.reveal-on-scroll` maupun `.is-visible` di `style.css`.
Akibatnya fungsi ini berjalan tapi tidak menghasilkan efek apapun.

**Instruksi:**
1. Di `style.css`, tambahkan rule dasar:
   ```css
   .reveal-on-scroll {
     opacity: 0;
     transform: translateY(24px);
     transition: opacity 0.6s ease, transform 0.6s ease;
   }
   .reveal-on-scroll.is-visible {
     opacity: 1;
     transform: translateY(0);
   }
   ```
2. Tambahkan **stagger delay** untuk grid berisi banyak item sejenis (skill
   badges, project cards, certification cards) supaya muncul satu-satu, bukan
   serentak. Gunakan `transition-delay` bertingkat (mis. anak ke-1: 0s, ke-2:
   0.1s, ke-3: 0.2s, dst) via nth-child atau via JS saat menambahkan class.
3. Di `index.html`, tambahkan class `reveal-on-scroll` ke:
   - Setiap `.graphical-window` di section Tentang, Keahlian, Proyek,
     Pengalaman, Sertifikasi.
   - `.section-header` di tiap section (judul + subtitle).
   - Card kontak (`.contact-window`).
4. **Jangan** tambahkan class ini ke konten di dalam `#hero` — hero harus tampil
   langsung saat halaman dibuka (lihat Tugas 1b), bukan menunggu scroll.
5. Uji: scroll dari atas ke bawah, pastikan tiap section muncul dengan efek
   fade + slide-up saat masuk viewport, dan animasi tidak berulang-ulang saat
   discroll bolak-balik (karena `obs.unobserve()` sudah ada di kode, cukup
   pastikan tidak dihapus).

### TUGAS 1b — Animasi Masuk untuk Hero (saat halaman pertama dibuka)
Tambahkan animasi fade-in + sedikit translateY untuk elemen hero saat DOM
selesai dimuat (bukan scroll-triggered): judul dulu, lalu foto, lalu kartu
kanan, dengan jeda singkat antar elemen (mis. 0.15s). Bisa memakai CSS
`@keyframes` + `animation-delay` per elemen, dipicu langsung tanpa
IntersectionObserver.

---

## TUGAS 2 — Tambahkan Favicon & Open Graph Meta Tags (Prioritas Tinggi)

**Masalah:** Tidak ada `<link rel="icon">` maupun meta `og:title` / `og:image`
/ `og:description` di `<head>` pada `index.html`. Saat link portofolio dibagikan
di WhatsApp/LinkedIn, tidak muncul preview kartu (gambar + judul).

**Instruksi:**
1. Tambahkan favicon (boleh pakai emoji sederhana sebagai placeholder jika
   belum ada file ikon, atau gunakan crop dari `hero-foto.png`).
2. Tambahkan ke `<head>`:
   ```html
   <meta property="og:type" content="website">
   <meta property="og:title" content="Muhammad Fahmi Alfarizi — Full Stack Web Developer">
   <meta property="og:description" content="Portofolio Muhammad Fahmi Alfarizi, Mahasiswa Teknik Informatika Universitas Pamulang & Full Stack Web Developer.">
   <meta property="og:image" content="hero-foto.png">
   <meta name="twitter:card" content="summary_large_image">
   ```
3. Sesuaikan path `og:image` ke gambar yang representatif (disarankan foto
   yang landscape/rasio 1.91:1, bukan potrait, agar preview tidak terpotong —
   boleh dibuat gambar baru khusus untuk keperluan ini jika `hero-foto.png`
   kurang pas).

---

## TUGAS 3 — Optimasi Gambar (Prioritas Tinggi)

**Masalah:** Semua screenshot proyek (`Food Order/*.png`, `SPK MOORA/*.png`,
`Web/SPK EO/*.png`, `Presensi MTs/*.png`) berukuran 1360×768px dalam format PNG
mentah, dengan berat 200–570 KB per file. Tidak ada atribut `loading="lazy"`
pada tag `<img>` manapun di `index.html`.

**Instruksi:**
1. Kompres seluruh gambar screenshot ke format WebP (target: turun ke kisaran
   30–100 KB per file tanpa penurunan kualitas visual yang terlihat).
2. Update semua referensi `src="....png"` menjadi `.webp` di `index.html` dan
   `script.js` (khususnya object `projectData` yang berisi path gambar untuk
   modal galeri).
3. Tambahkan `loading="lazy"` pada semua `<img>` yang tidak tampil di viewport
   pertama (semua gambar proyek boleh lazy load; gambar hero di `#hero`
   sebaiknya tetap tanpa lazy load karena langsung terlihat).
4. Tambahkan `width` dan `height` eksplisit pada tag `<img>` (sesuai rasio asli)
   untuk mencegah layout shift saat gambar dimuat.

---

## TUGAS 4 — Hapus Folder Aset yang Tidak Terpakai

**Masalah:** Folder `assets/` (berisi `hero_portrait*.jpg`,
`project_food_order*.jpg`, `project_spk_band*.jpg`, `project_spk_siswa*.jpg`,
total ±4.8 MB) **tidak direferensikan** di `index.html`, `style.css`, maupun
`script.js`. Ini sisa file yang tidak lagi dipakai.

**Instruksi:**
1. Konfirmasi ulang dengan pencarian penuh (`grep -r "assets/"`) bahwa memang
   tidak ada referensi ke folder ini di seluruh project.
2. Jika benar tidak dipakai, hapus folder `assets/` untuk mengurangi ukuran
   repository.

---

## TUGAS 5 — Tambahkan Link Repo GitHub per Proyek

**Masalah:** Ketiga project card di `#projects` (Food Order, SPK Band Lokal,
SPK Siswa Berprestasi) dan project di `#experience` (Presensi MTs) hanya bisa
dilihat lewat screenshot/modal. Tidak ada tombol/link langsung ke source code
di GitHub. Saat ini hanya ada satu link profil GitHub umum
(`github.com/Fahmizzy`) di section Kontak.

**Catatan:** Project belum di-hosting/live-demo, jadi **hanya tambahkan link
ke repository GitHub**, bukan link live demo.

**Instruksi:**
1. Di setiap `.project-body-content` (dalam `.project-window`), tambahkan satu
   tombol/link tambahan di samping tombol "Detail Proyek Complete" yang sudah
   ada, contoh:
   ```html
   <a href="[ISI_LINK_REPO_GITHUB]" target="_blank" class="btn btn-creatix-outline btn-block">
     <i class="fa-brands fa-github"></i> Lihat Kode di GitHub
   </a>
   ```
2. Ganti `[ISI_LINK_REPO_GITHUB]` dengan URL repo GitHub yang sesuai untuk
   masing-masing proyek:
   - Sistem Pemesanan Makanan Berbasis Web → `https://github.com/Fahmizzy/foodorder-next`
   - SPK Pemilihan Band Lokal → `https://github.com/Fahmizzy/SPK-Pemilihan-Band-Lokal-`
   - SPK Penentuan Siswa Berprestasi → `https://github.com/Fahmizzy/spk-moora`
   - Sistem Informasi Presensi Siswa MTs → `https://github.com/Fahmizzy/Presensi-Mts-Peradaban-Insani`
   > Jika repo untuk salah satu proyek bersifat privat atau belum di-push ke
   > GitHub, sembunyikan tombol untuk proyek tersebut saja (jangan tampilkan
   > link mati/404).
3. Pastikan style tombol baru ini konsisten dengan tombol lain di card yang
   sama (gunakan class `.btn-creatix-outline` yang sudah ada agar tidak perlu
   CSS baru).

---

## TUGAS 6 — Kurangi Redundansi Statistik IPK

**Masalah:** Angka "3.47 IPK" muncul 3 kali: kartu kanan hero
(`.creatix-rating-card`), metrics bar bawah hero (`.hero-metrics-bar`), dan
progress bar di section Tentang (`.graphical-progress-pill`).

**Instruksi:**
1. Pertahankan IPK di kartu hero kanan dan di metrics bar (dua tempat ini
   berfungsi sebagai ringkasan cepat, wajar berulang).
2. Di section Tentang → Pendidikan Akademik, ubah fokus info: selain angka
   IPK, tambahkan detail yang belum muncul di hero, misalnya: target periode
   kelulusan, jumlah SKS ditempuh, atau highlight mata kuliah/skripsi terkait
   bidang web development. Tujuannya supaya bagian ini menambah informasi
   baru, bukan mengulang angka yang sama persis.

---

## Catatan Umum untuk Agent
- Jangan mengubah struktur/ID/class yang sudah dipakai oleh `script.js`
  (terutama `openProjectModal()`, `projectData`, dan id-id modal) kecuali
  memang diminta pada tugas di atas.
- Setelah setiap tugas, jalankan pengecekan visual manual (buka `index.html`
  di browser) untuk memastikan tidak ada layout yang rusak di breakpoint
  mobile (`max-width: 768px`) dan tablet (`max-width: 1024px`) yang sudah ada
  di `style.css`.
- Kerjakan Tugas 1, 2, dan 3 terlebih dahulu (dampak besar, effort kecil),
  baru lanjut ke Tugas 4–6.
