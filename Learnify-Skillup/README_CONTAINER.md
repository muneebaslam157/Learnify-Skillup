
# Learnify – Local run & Docker deployment (starter pack)

This pack contains only the *new* files you need to add to your Learnify-Skillup project so you can:
1) run the React app locally,
2) add a tiny Express API + MongoDB (with a Docker volume), and
3) deploy with Docker Compose (works locally and on AWS EC2).

> Place these files into the **root** of your project exactly as shown in the tree below.

```
Learnify-Skillup/
  ├─ (your existing files: src/, public/, package.json, .env, etc.)
  ├─ README_CONTAINER.md
  ├─ nginx.conf
  ├─ Dockerfile
  ├─ .dockerignore
  ├─ docker-compose.yml
  └─ api/
      ├─ package.json
      ├─ index.js
      ├─ Dockerfile
      └─ .env
```

---

## A) Run locally (no Docker)

### 1) Prereqs
- Install Node.js 18 or 20 LTS.
- In a terminal, check:
  ```bash
  node -v
  npm -v
  ```

### 2) Install & run
```bash
# in the project root (Learnify-Skillup)
npm ci           # or: npm install
npm run dev
```
Open the printed **http://localhost:5173** URL in your browser.

> If you see Vite errors about Firebase env vars, copy `.env.example` to `.env` (already included in your project) so Vite gets the `VITE_APP_FIREBASE_*` values.

### 3) Production build (optional)
```bash
npm run build
npm run preview
```

---

## B) Docker (web + API + MongoDB with persistent volume)

> This part satisfies the assignment requirement to "attach a volume to the database container". We add a tiny API and a MongoDB service (with a named volume). Your React app stays the same and is served by Nginx. The `/api/*` paths are proxied to the API container.

### Commands
```bash
# build and start everything
docker compose build
docker compose up -d

# check containers
docker ps

# test API (should return an array; after POST it shows items)
curl -X POST http://localhost/api/notes -H "Content-Type: application/json" -d '{"text":"hello"}'
curl http://localhost/api/notes

# see the named volume for Mongo persistence
docker volume ls
```

Open your browser at **http://localhost**.

---

## C) Deploy to AWS EC2 (Ubuntu quick notes)

1. Open port **80** in the instance Security Group.
2. SSH and install Docker + Compose:
   ```bash
   sudo apt update
   sudo apt install -y docker.io docker-compose
   sudo usermod -aG docker $USER && newgrp docker
   ```
3. Copy your project to the server (or `git clone`). From the project root:
   ```bash
   # if you use .env for Firebase, export its variables so build args are present
   export $(cat .env | xargs 2>/dev/null || true)

   docker compose build
   docker compose up -d
   docker ps
   ```
4. Visit **http://EC2_PUBLIC_IP** and test **/api/notes**.

---

## D) What to submit

- `Dockerfile`, `api/Dockerfile`, and `docker-compose.yml`.
- Screenshot of `docker ps` on EC2.
- Browser screenshot of app at EC2 IP.
- `curl` output of `/api/notes`.
- `docker volume ls` showing `mongo_data`.
- Link to images on Docker Hub (optional).
