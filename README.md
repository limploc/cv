  # CV — Personal Website

  Deskripsi singkat
  ------------------

  Ini adalah situs personal / CV yang dibuat dengan React, TypeScript dan Vite. Proyek ini berisi komponen untuk `Hero`, `About`, `Projects`, `TechStack`, dan beberapa komponen UI kecil. Data proyek dan sosial disimpan di folder `src/data` sehingga konten mudah diperbarui.
  https://cv-enall.vercel.app/

  Fitur utama
  -----------

  - Halaman berorientasi portofolio/CV.
  - Struktur komponen modular di `src/components`.
  - Dibangun dengan Vite untuk pengembangan cepat (HMR).

  Teknologi
  ---------

  - React 19
  - TypeScript
  - Vite
  - lucide-react (ikon)

  Struktur proyek 
  -------------------------

  - `index.html` — entry HTML.
  - `src/main.tsx` — titik masuk aplikasi.
  - `src/App.tsx` — komponen utama.
  - `src/components/` — kumpulan komponen UI (Hero, About, Projects, TechStack, dll.).
  - `src/data/` — data untuk projects, socials, techStack.
  - `vite.config.ts`, `tsconfig.*.json`, `package.json` — konfigurasi build dan dev.

  Prasyarat
  ---------

  - Node.js v16 atau lebih baru (direkomendasikan v18+)
  - npm (atau `pnpm` / `yarn` jika Anda pilih)

  Instalasi & Menjalankan (lokal)
  ------------------------------

  1. Clone repository

  ```bash
  git clone <url-repo-anda>
  cd cv
  ```

  2. Pasang dependensi

  ```bash
  npm install
  ```

  3. Jalankan server pengembangan

  ```bash
  npm run dev
  ```

  4. Build untuk produksi

  ```bash
  npm run build
  ```

  5. Preview hasil build (opsional)

  ```bash
  npm run preview
  ```

  Catatan: `package.json` pada proyek ini menyediakan script berikut:

  - `dev` — menjalankan Vite di mode pengembangan.
  - `build` — menjalankan `tsc -b` lalu `vite build`.
  - `preview` — menjalankan `vite preview` untuk melihat hasil build.
  - `lint` — jalankan ESLint.

  File: `package.json` berisi skrip yang relevan untuk instalasi dan menjalankan proyek.
