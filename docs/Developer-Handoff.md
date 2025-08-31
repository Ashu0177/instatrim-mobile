# 🛠️ Instatrim Developer Handoff  

This document defines the **technical expectations, assets, and APIs** for Instatrim developers.  
It ensures consistency and quality across mobile, web, and backend teams.  

---

## 📐 Coding Philosophy
- Write code as if it will run on **a billion devices**.  
- Build like it should **last 2 years without urgent updates**.  
- Keep it **clean, modular, and testable**.  

---

## 📂 Project Structure
- `/mobile` → Android (Kotlin), iOS (Swift)  
- `/web` → React/Next.js  
- `/backend` → Node.js/Express, Database, APIs  
- `/docs` → Documentation, features, roadmap  

---

## 🔑 Key Assets
- **Branding**: Logos, watermarks, UI theme  
- **Watermark System**: Mandatory core module  
  - Center watermark (SVG, semi-transparent)  
  - Paid unlock to remove watermark  
  - Anti-removal via steganography + token verification  
- **Demo Media Pack**: Sample videos & audio for testing  

---

## ⚡ Performance Targets
- Mobile app startup < **3 seconds**  
- Export 1 min 1080p clip < **15 seconds** (mid-range device)  
- AI tasks optimized for on-device (TFLite/CoreML) where possible  
- Memory usage optimized for 3GB RAM devices  

---

## 🌐 APIs (to be defined in backend)
- `POST /upload` → Upload video with watermark token  
- `GET /export/:id` → Export processed video  
- `POST /ai/process` → Run AI features (remove object, add captions, etc.)  
- `POST /auth/login` → Authentication  
- `POST /auth/subscribe` → Subscription & licensing  

---

## ✅ QA & Testing
- Unit tests mandatory for core modules  
- Automated build + test pipeline (GitHub Actions) planned  
- Manual test checklist for camera, editing, exports  

---

📌 *This file will evolve as the project moves from scaffolding → MVP → Beta.*
