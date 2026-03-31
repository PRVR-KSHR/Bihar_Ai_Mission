# 🚀 Quick Start Guide - Bihar AI Mission

## ⚡ 5 Minute Setup

### Prerequisites
- Node.js v18+ (https://nodejs.org/)
- npm (comes with Node.js)

### Step 1: Install & Run Backend (Terminal 1)

```bash
cd backend
npm install
npm run dev
```

**Wait for this message:**
```
🚀 Bihar AI Mission Backend Server is running on port 5000
```

### Step 2: Install & Run Frontend (Terminal 2)

```bash
cd frontend
npm install
npm run dev
```

**Wait for this message:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

### Step 3: Open in Browser

Go to **http://localhost:3000** 🎉

---

## 📁 Folder Structure

```
bihar-ai-mission/
├── frontend/          ← Next.js React App
├── backend/           ← Express API Server
├── README.md          ← Full Documentation
└── QUICKSTART.md      ← This file
```

---

## 🌐 Available URLs

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Frontend Application |
| http://localhost:5000 | Backend API |
| http://localhost:5000/health | API Health Check |

---

## 📚 Frontend Pages

- `/` - Home (Hero Section with 3D)
- `/ai-tools` - AI Tools Directory
- `/ai-tools/[tool]` - Tool Details (Example: ChatGPT)
- `/prompt-guide` - Prompt Engineering Guide
- `/learning` - AI Learning Hub
- `/about` - About Bihar AI Mission

---

## 🔌 API Endpoints

### Get All Tools
```
GET http://localhost:5000/api/tools
```

### Search Tools
```
GET http://localhost:5000/api/search?q=chatgpt
```

### Get All Categories
```
GET http://localhost:5000/api/categories
```

### Get Learning Resources
```
GET http://localhost:5000/api/content/learning
```

---

## 🎯 Next Steps

1. ✅ Frontend running on port 3000?
2. ✅ Backend running on port 5000?
3. ✅ Can you see the AI Mission landing page?

**Explore:**
- Click "Explore AI Tools"
- Read "Prompt Engineering Guide"
- Check "Learning Hub"
- View "About Bihar AI Mission"

---

## 🛠️ Common Issues

### Port Already in Use?
```bash
# Find and kill process on port 5000
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Dependencies Not Installing?
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### CORS Error?
- Frontend must be on http://localhost:3000
- Backend must be on http://localhost:5000

---

## 📖 Full Documentation

See **README.md** for complete documentation including:
- Detailed setup instructions
- API reference
- Deployment guide
- Customization options
- Technology stack details

---

## 🎨 Technology Used

**Frontend:**
- Next.js 14 + React
- Three.js (3D Graphics)
- Framer Motion (Animations)
- TailwindCSS (Styling)

**Backend:**
- Express.js
- Node.js + TypeScript
- RESTful API

**Design:**
- Dark futuristic theme
- Neon blue/cyan highlights
- Glassmorphism UI
- 3D animations

---

## 📞 Need Help?

1. Check the troubleshooting section above
2. Review browser console for errors (F12)
3. Check terminal output for backend logs
4. See full README.md for detailed guide

---

**Happy Hacking! 🚀**
