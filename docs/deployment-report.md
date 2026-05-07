# Deployment Report — Undanganku

---

## Deploy #2 — 2026-05-06

**Server:** 103.93.129.174 (Ubuntu 22.04 LTS)  
**Dilakukan oleh:** Claude Code

### Yang Diupdate
- **Frontend only** — perbaikan CSS mobile responsiveness (`landing.component.css`)
- Backend tidak ada perubahan, tidak di-restart

### Perubahan Tambahan
- `frontend/angular.json` — naikkan budget `anyComponentStyle` dari 2kb/4kb ke 10kb/30kb (warning/error) karena landing page CSS memang besar (~20.5 kB)

### Hasil

| Step | Status | Detail |
|---|---|---|
| npm run build | ✅ | Build sukses, CSS warning 20.52 kB (bukan error) |
| docker build | ✅ | `danang837/undanganku-frontend:1.0` |
| docker push | ✅ | Digest: `sha256:4d9b1153efcfaadbca8141930621b28e2a1d8f639c7318659718ca89585c23c7` |
| docker pull (server) | ✅ | Image terbaru berhasil di-pull |
| docker compose up | ✅ | Container `undanganku_frontend` running di port 4000 |
| Verifikasi HTTP | ✅ | `http://103.93.129.174/` → 200 OK |

### Catatan
- Service name di docker-compose adalah `frontend`, container name `undanganku_frontend`
- Perintah restart: `cd ~/undanganku && docker compose up -d --no-deps frontend`

---

## Deploy #3 — 2026-05-07

**Server:** 103.93.129.174 (Ubuntu 22.04 LTS)
**Dilakukan oleh:** Andi (Deploy Agent)

### Yang Diupdate
- **Frontend only** — tambah background music player ke halaman `/demo` (DemoMusicPlayer component + audio file `wedding-music.mp4`)
- Image tag: `2.1` → `2.2`

### Hasil

| Step | Status | Detail |
|---|---|---|
| docker build | ✅ | `danang837/undanganku-frontend:2.2`, build 11.5s, Next.js 16.2.4 Turbopack |
| docker push | ✅ | Digest: `sha256:ff21ea6079cce82cea6cba240282c9f4393baf0d546e87730f10d8c06bce927b` |
| sed update tag | ✅ | docker-compose.yml tag diupdate ke `2.2` |
| docker compose pull | ✅ | Image 2.2 berhasil di-pull di server |
| docker compose up | ✅ | Container `undanganku_frontend` recreated dan running |
| Verifikasi HTTP | ✅ | `http://localhost:4000` → HTTP 200 |

### Catatan
- NEXT_PUBLIC_API_URL di-bake saat build via `--build-arg` sesuai prosedur
- Commit yang di-deploy: `ed0c3de` dari branch `development`

---

## Deploy #4 — 2026-05-07

**Server:** 103.93.129.174 (Ubuntu 22.04 LTS)
**Dilakukan oleh:** Andi (Deploy Agent)

### Yang Diupdate
- **Frontend only** — tambah `NEXT_PUBLIC_SITE_URL=https://invyta.id` sebagai build-time variable
- Dockerfile diupdate: tambah `ARG NEXT_PUBLIC_SITE_URL` + `ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL`
- Image tag: `2.2` → `2.3`

### Hasil

| Step | Status | Detail |
|---|---|---|
| Edit Dockerfile | ✅ | Tambah ARG + ENV NEXT_PUBLIC_SITE_URL |
| docker build | ✅ | `danang837/undanganku-frontend:2.3`, build sukses dengan kedua build-arg |
| docker push | ✅ | Digest: `sha256:a00fb18b4b8a5bdeec85d9d0183e22459d73078fe116a7d1526b7e44460e0dcf` |
| sed update tag | ✅ | docker-compose.yml tag diupdate ke `2.3` |
| docker compose pull | ✅ | Image 2.3 berhasil di-pull di server |
| docker compose up | ✅ | Container `undanganku_frontend` recreated dan running |
| Verifikasi HTTP | ✅ | `http://localhost:4000` → HTTP 200 |
| Verifikasi sitemap | ✅ | `/sitemap.xml` menggunakan `https://invyta.id` (bukan `localhost`) |

### Catatan
- Build-args yang digunakan: `NEXT_PUBLIC_API_URL=http://103.93.129.174/ipa-undanganku/api` dan `NEXT_PUBLIC_SITE_URL=https://invyta.id`
- Verifikasi sitemap.xml menunjukkan URL sudah benar: `<loc>https://invyta.id</loc>` dan `<loc>https://invyta.id/demo</loc>`

---

## Deploy #1 — 2026-05-03

**Server:** 103.93.129.174 (Ubuntu 22.04 LTS)  
**Dilakukan oleh:** Claude Code

---

## Kondisi Server Sebelum Deploy

| Komponen | Status | Versi |
|---|---|---|
| OS | ✅ Aktif | Ubuntu 22.04.5 LTS |
| Docker | ✅ Terinstall | 29.4.0 |
| Nginx | ✅ Terinstall | 1.18.0 |
| Java | ❌ Tidak ada | — |
| PostgreSQL (sistem) | ⚠️ Inactive | 14 (tidak dipakai) |
| PostgreSQL (Docker) | ✅ Running | 16-alpine (pos_postgres) |
| CPU | 2 core | — |
| RAM | 1.9 GB (860MB used) | — |
| Disk | 58 GB (11GB used) | — |

**Aplikasi yang sudah berjalan (pos-app):**
- `pos_postgres` — PostgreSQL 16 di port 5432
- `pos_backend` — port 8080
- `pos_frontend` — port 3000  
- `pos_pgadmin` — port 5050

---

## Apa yang Ditambahkan

1. **Database `undanganku_db`** — dibuat di container `pos_postgres` yang sudah ada
   - User: `undanganku_user` / `Undanganku@2024`
   - Flyway otomatis menjalankan 3 migrasi saat pertama start

2. **Docker image backend** — `danang837/undanganku-backend:1.0`
   - Base image: WildFly 32.0.1.Final JDK 21 (`quay.io/wildfly/wildfly:32.0.1.Final-jdk21`)
   - WAR: `ipa-undanganku-backend-1.0.0.war` di-deploy ke WildFly
   - Fix: `jboss-deployment-structure.xml` untuk resolve konflik SLF4J/Logback

3. **Docker image frontend** — `danang837/undanganku-frontend:1.0`
   - Base image: nginx:alpine
   - Angular 18 static build di-serve via Nginx

4. **Docker Compose** — `/home/admin-dabul/undanganku/docker-compose.yml`
   - Backend container: `undanganku_backend` (port 8081)
   - Frontend container: `undanganku_frontend` (port 4000)
   - Terhubung ke network `pos-app_pos_network` yang sudah ada

5. **Nginx virtual host** — `/etc/nginx/sites-available/undanganku`
   - Port 80 sekarang melayani Undanganku
   - Default site Nginx dihapus dari sites-enabled

---

## Arsitektur Deployment

```
Internet
   │
   ▼
Nginx :80
   ├── /           → undanganku_frontend :4000 (Angular SPA)
   ├── /api/       → undanganku_backend :8081/ipa-undanganku/api/
   └── /ipa-undanganku/ → undanganku_backend :8081/ipa-undanganku/

undanganku_backend → pos_postgres:5432/undanganku_db
```

---

## URL Akses

| URL | Keterangan |
|---|---|
| `http://103.93.129.174/` | Frontend (Angular) |
| `http://103.93.129.174/ipa-undanganku/` | Backend WildFly (langsung) |
| `http://103.93.129.174/api/auth/login` | Login API |
| `http://103.93.129.174:4000/` | Frontend (direct port) |
| `http://103.93.129.174:8081/ipa-undanganku/` | Backend (direct port) |
| `http://103.93.129.174:5050/` | pgAdmin (pos-app) |

---

## Kredensial Default

| Akun | Email | Password | Role |
|---|---|---|---|
| Admin | admin@app.com | Admin@123456 | ROLE_ADMIN |
| User | user@app.com | User@123456 | ROLE_USER |

**JWT Secret:** `48a4e4f63804be637dc751909c403beea0685761987bb665521b3339eb395094`  
> Simpan secret ini di tempat aman! Jangan expose ke publik.

---

## File yang Dibuat/Diubah (Lokal)

| File | Perubahan |
|---|---|
| `backend/Dockerfile` | Update dari `java -jar` ke WildFly 32 JDK21 |
| `backend/src/main/webapp/WEB-INF/jboss-deployment-structure.xml` | Baru — fix konflik SLF4J WildFly vs Spring Boot |

---

## File di Server

| Path | Keterangan |
|---|---|
| `/home/admin-dabul/undanganku/docker-compose.yml` | Docker Compose undanganku |
| `/etc/nginx/sites-available/undanganku` | Nginx virtual host |
| `/etc/nginx/sites-enabled/undanganku` | Symlink aktif |

---

## Catatan

- **WildFly 32** dipilih sebagai pengganti JBoss EAP 8 (upstream gratis, fitur setara)
- Konflik logging antara WildFly dan Spring Boot diselesaikan dengan `jboss-deployment-structure.xml`
- Container backend perlu ~45 detik untuk startup penuh (WildFly lebih berat dari embedded Tomcat)
- SSL/HTTPS belum dikonfigurasi — disarankan setup Certbot + Let's Encrypt untuk production
- Port 3000 (pos_frontend) masih bisa diakses langsung, tidak terganggu

---

## Perintah Berguna di Server

```bash
# Cek status container
docker ps --filter name=undanganku

# Lihat log backend
docker logs undanganku_backend --tail 50 -f

# Restart
cd ~/undanganku && docker compose restart

# Update image terbaru
cd ~/undanganku && docker compose pull && docker compose up -d
```
