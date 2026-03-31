# Bihar AI Mission - Complete Setup Guide

## 🚀 Overview

Bihar AI Mission is a modern, futuristic AI education and tools platform built with:
- **Frontend**: Next.js 14, React, Three.js, Framer Motion, TailwindCSS
- **Backend**: Express.js, TypeScript, Node.js
- **Design**: Dark futuristic theme with neon blue/cyan highlights, glassmorphism, 3D animations

## 📁 Project Structure

```
bihar-ai-mission/
├── frontend/              # Next.js frontend application
│   ├── src/
│   │   ├── app/          # Next.js app directory
│   │   ├── components/   # React components
│   │   ├── 3d/           # Three.js 3D components
│   │   ├── utils/        # Utility functions (API client)
│   │   └── data/         # Static data
│   ├── public/           # Static assets
│   ├── package.json
│   └── tsconfig.json
│
├── backend/               # Express.js backend API
│   ├── src/
│   │   ├── index.ts      # Entry point
│   │   ├── routes/       # API routes
│   │   └── data/         # Data/mock database
│   ├── package.json
│   └── tsconfig.json
│
└── docs/                  # Documentation
```

## 🔧 Prerequisites

Before you start, ensure you have:

- **Node.js** v18 or higher (Download from https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** (for version control)
- A code editor (VS Code recommended)

### Verify Installation

```bash
node --version
npm --version
```

---

## 📦 Installation & Setup

### Step 1: Clone or Download the Project

```bash
# If you have git
git clone <repository-url>
cd bihar-ai-mission

# Or if you downloaded as zip
cd bihar-ai-mission
```

### Step 2: Setup Backend API Server

#### 2.1 Navigate to backend directory
```bash
cd backend
```

#### 2.2 Install dependencies
```bash
npm install
```

#### 2.3 Configure environment variables
```bash
# Copy example env file
cp .env.example .env

# Edit .env if needed (defaults work for local development)
```

#### 2.4 Start backend server
```bash
# Development mode (with auto-reload)
npm run dev

# Or build and start production
npm run build
npm start
```

**Expected output:**
```
🚀 Bihar AI Mission Backend Server is running on port 5000
📍 Environment: development
🌐 CORS Origin: http://localhost:3000
```

### Step 3: Setup Frontend Application

Open a **new terminal** and navigate to frontend:

#### 3.1 Navigate to frontend directory
```bash
cd frontend
```

#### 3.2 Install dependencies
```bash
npm install
```

#### 3.3 Configure environment variables
```bash
# Create .env.local file with:
# (Already created with default values)
cat .env.local
```

#### 3.4 Start frontend development server
```bash
npm run dev
```

**Expected output:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

---

## 🌐 Access the Application

Once both servers are running:

1. **Frontend**: Open http://localhost:3000 in your browser
2. **Backend API**: http://localhost:5000
3. **Health Check**: http://localhost:5000/health

---

## 📚 Available Pages

### Frontend Routes

| Page | URL | Description |
|------|-----|-------------|
| Home | http://localhost:3000 | Hero section with 3D animations |
| AI Tools Directory | http://localhost:3000/ai-tools | Browse all AI tools |
| ChatGPT (Example Tool) | http://localhost:3000/ai-tools/[tool] | Detailed tool page |
| Prompt Guide | http://localhost:3000/prompt-guide | Prompt engineering guide |
| Learning Hub | http://localhost:3000/learning | AI learning paths |
| About | http://localhost:3000/about | About Bihar AI Mission |

### Backend API Endpoints

#### Tools
```bash
# Get all tools
GET http://localhost:5000/api/tools

# Get tools by category
GET http://localhost:5000/api/tools?category=Chatbots%20&%20Research

# Get specific tool
GET http://localhost:5000/api/tools/chatgpt

# Get tools by category (alternative)
GET http://localhost:5000/api/tools/category/Chatbots%20&%20Research
```

#### Categories
```bash
# Get all categories
GET http://localhost:5000/api/categories

# Get specific category
GET http://localhost:5000/api/categories/chatbots
```

#### Content
```bash
# Get prompt examples
GET http://localhost:5000/api/content/prompts

# Get learning resources
GET http://localhost:5000/api/content/learning

# Get specific learning resource
GET http://localhost:5000/api/content/learning/beginner-ai
```

#### Search
```bash
# Search tools
GET http://localhost:5000/api/search?q=chatgpt
GET http://localhost:5000/api/search?q=image
```

#### Health
```bash
# Check server status
GET http://localhost:5000/health
```

---

## 🚀 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
npm start  # Serves production build
```

### Backend Build
```bash
cd backend
npm run build
npm start  # Serves production build
```

---

## 🎨 Key Features

### Frontend Features
- ✨ **3D Neural Network Animation** - Animated neural network in hero section
- 🌊 **Particle Background** - Floating particle effects with Three.js
- 🎯 **Interactive UI** - Hover effects, smooth transitions, glassmorphism
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Custom Animations** - Framer Motion & GSAP animations
- 🌙 **Dark Theme** - Professional dark AI theme with neon accents

### Backend Features
- 🔒 **CORS Enabled** - Safe cross-origin requests
- 📊 **JSON API** - RESTful API design
- 🔍 **Search Functionality** - Full-text search across tools
- 📦 **Structured Data** - Well-organized tool and category data
- ⚡ **Error Handling** - Comprehensive error responses

---

## 📝 Development Commands

### Frontend
```bash
cd frontend

# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

### Backend
```bash
cd backend

# Development (with hot-reload)
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

---

## 🔌 API Response Format

All API responses follow this format:

### Success Response
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

---

## 🎯 Customization

### Change Site Domain/URL
Edit in `frontend/.env.local` and `backend/.env`:
```
NEXT_PUBLIC_API_URL=http://your-backend-domain:5000
CLIENT_URL=http://your-frontend-domain:3000
```

### Modify Colors
Edit `frontend/tailwind.config.js`:
```javascript
"ai-primary": "#2563EB",      // Blue
"ai-accent": "#06B6D4",       // Cyan
"ai-glow": "#38BDF8",         // Light Blue
"ai-bg": "#0B1120"            // Dark Background
```

### Add New Tools
Edit `backend/src/data/tools.ts` and add to `toolsData` array

### Modify Content
- Tools: `backend/src/data/tools.ts`
- Learning paths: `backend/src/routes/content.ts`
- Frontend data: `frontend/src/data/content.ts`

---

## 🐛 Troubleshooting

### Issue: Port Already in Use
```bash
# Kill process on port 5000 (backend)
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Issue: Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: CORS Error
Ensure backend is running on http://localhost:5000 and frontend on http://localhost:3000

### Issue: 3D Components Not Rendering
Ensure WebGL is enabled in browser (usually default)

---

## 📚 Technology Stack

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **TailwindCSS** - Utility-first CSS
- **TypeScript** - Type safety

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime
- **TypeScript** - Type safety
- **Helmet** - Security
- **CORS** - Cross-origin support
- **Morgan** - Logging
- **Compression** - Response compression

---

## 📖 Resources & Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Three.js Docs](https://threejs.org)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Express.js Docs](https://expressjs.com)
- [TypeScript Docs](https://www.typescriptlang.org)

---

## 📞 Support & Contributing

For issues or questions:
1. Check the troubleshooting section above
2. Review error messages in browser console
3. Check backend logs in terminal
4. Verify all prerequisites are installed

---

## 📄 License

Bihar AI Mission - All Rights Reserved

---

## 🎉 You're All Set!

Your Bihar AI Mission application is now ready. Start exploring AI tools, learning paths, and build amazing things!

**Happy Coding! 🚀**
