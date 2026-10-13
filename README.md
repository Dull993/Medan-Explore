# Medan Explore

Panduan lengkap untuk mengklon (*clone*) proyek ke komputer lokal dan mengunggah (*upload/push*) perubahan kembali ke repositori Git/GitHub.

---

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal software berikut di komputer Anda:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (disarankan versi LTS)

---

## 1. Cara Clone Proyek

Ikuti langkah-langkah ini untuk menyalin repositori ke komputer lokal Anda:

### Langkah 1: Clone Repositori
Buka terminal/command prompt, lalu jalankan perintah berikut:

```bash
git clone https://github.com/USERNAME/Medan-Explore.git
```
*(Ganti `https://github.com/USERNAME/Medan-Explore.git` dengan URL repositori Anda yang sebenarnya)*

### Langkah 2: Masuk ke Direktori Proyek
```bash
cd Medan-Explore
```

### Langkah 3: Install Dependensi
Jalankan perintah ini untuk menginstal dependensi (seperti Tailwind CSS) yang tertera di `package.json`:

```bash
npm install
```

### Langkah 4: Jalankan Mode Pengembangan (Development)
Untuk menjalankan Tailwind CSS watcher saat mengembangkan proyek:

```bash
npm run dev
```

---

## 2. Cara Upload / Push Perubahan Proyek

Setelah Anda selesai membuat perubahan atau menambahkan fitur baru, ikuti langkah-langkah berikut untuk mengunggah perubahan ke GitHub:

### Langkah 1: Cek Status Perubahan
Jalankan perintah ini untuk melihat berkas apa saja yang telah diubah atau ditambahkan:

```bash
git status
```

### Langkah 2: Tambahkan Perubahan ke Staging Area
Tambahkan semua perubahan file ke dalam Git:

```bash
git add .
```
*(Atau gunakan `git add nama-file` jika hanya ingin menambahkan file tertentu)*

### Langkah 3: Commit Perubahan
Buat pesan commit yang jelas yang menjelaskan perubahan yang Anda buat:

```bash
git commit -m "feat: menambahkan fitur baru"
```

### Langkah 4: Upload / Push ke Remote Repository
Kirim commit Anda ke repositori utama di GitHub (biasanya pada branch `main` atau `master`):

```bash
git push origin main
```
*(Jika cabang utama Anda bernama `master`, gunakan `git push origin master`)*

---

## Tambahan (Opsional)

### Mengambil Perubahan Terbaru dari Server
Sebelum mulai mengerjakan fitur baru, selalu disarankan untuk mengambil update terbaru dari repositori remote:

```bash
git pull origin main
```

### Build untuk Produksi
Sebelum mengunggah proyek ke server hosting, minifikasi file CSS menggunakan perintah:

```bash
npm run build
```