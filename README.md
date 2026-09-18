# ADIL MAULANA CHASYI — Premium Portfolio

Website portfolio premium, mobile responsive, dengan halaman publik dan `/admin/`.

## Isi
- `index.html` — website publik
- `admin/index.html` — control room editor
- `assets/` — CSS + JavaScript

## Jalankan
Tidak perlu build system. Buka `index.html` untuk preview.

## Publish ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `adil-portfolio`.
2. Upload semua file/folder dari project ini ke repository.
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Simpan dan tunggu deployment.
6. URL umumnya: `https://USERNAME.github.io/adil-portfolio/`
7. Halaman admin: `https://USERNAME.github.io/adil-portfolio/admin/`

## PENTING — Admin aman
Versi starter ini memakai `localStorage`, sehingga perubahan hanya tersimpan di browser yang digunakan. Ini BUKAN sistem login admin yang aman untuk produksi.

Untuk admin online yang benar-benar private:
- gunakan Supabase Auth untuk login email/password,
- Supabase Storage untuk foto,
- Supabase Database untuk konten/theme,
- aktifkan Row Level Security (RLS),
- batasi policy agar hanya user admin tertentu yang dapat UPDATE/INSERT,
- frontend tetap bisa dipublish di GitHub Pages.

Jangan pernah menaruh password admin di HTML/JavaScript GitHub Pages.

## Skala 100 juta pengguna
GitHub Pages cocok untuk frontend statis dan CDN caching, tetapi tidak ada cara jujur untuk menjamin 100 juta pengguna *sekaligus* tanpa error. Untuk skala ekstrem, gunakan arsitektur CDN + edge caching + object storage + backend autoscaling + database yang dirancang untuk beban tersebut. Beban aktual harus diuji dengan load testing.

## Kustomisasi
Warna utama ada di `assets/style.css` pada `:root`.
Konten admin lokal dapat diubah dari `/admin/`.
Foto dapat dipilih dari halaman admin; mode starter menyimpannya di browser.

## Data yang sudah dimasukkan
Nama: Adil Maulana Chasyi
Profesi: Programmer
Pendidikan: S1 Informatika — UNIKI
Karya: AZORA — Brand Owner
Email: adilmaulana706@gmail.com
Instagram: @adilmaulana7_
