# Portfolio-AI: 6th Generation 3D Portfolio

**🔗 Live Demo:** [https://share.google/arDwnNgEDXrmd0oUL](https://share.google/arDwnNgEDXrmd0oUL)

This is a premium, AI-powered portfolio website built for Chidanand M, a Full Stack AI/ML Engineer. The project features a stunning 6th-generation 3D glassmorphic UI and integrates a local Large Language Model (`llama3.2`) via FastAPI to intelligently explain skills and summarize projects.

---

## 🏗️ Architecture & Tech Stack

### Frontend (User Interface)
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS v3 with custom CSS for Glassmorphism
- **Animations**: Framer Motion
- **Icons**: Devicon (Official SVGs)

### Backend (AI Engine)
- **Framework**: Python FastAPI
- **LLM Engine**: Ollama (Running locally with `llama3.2`)
- **HTTP Client**: HTTPX (for async API calls to Ollama)
- **Routing & Validation**: Pydantic & Uvicorn

---

## 🚀 Step-by-Step Implementation Guide

### Phase 1: Environment & Setup
1. **Frontend Initialization**: Initialized a blazing-fast React application using Vite (`npm create vite@latest`).
2. **Tailwind CSS Configuration**: Installed and configured Tailwind CSS. We explicitly stuck to Tailwind v3 directives in `index.css` to maintain perfect compatibility with our complex 3D shadows and gradients.
3. **Backend Initialization**: Created a `backend` directory, set up a Python virtual environment, and installed `fastapi`, `uvicorn`, and `httpx`.

### Phase 2: Building the 6th-Gen 3D UI
1. **Global CSS & Tokens**: Modified `index.css` to include custom CSS variables for our color palette (`--primary: #4f46e5`, `--secondary: #ec4899`) and defined our signature `.glass-panel` and `.btn-3d` utility classes. 
2. **Layout & Sidebar**: Created a global `Layout.jsx` wrapper featuring a persistent, animated sidebar (using Framer Motion). The sidebar includes navigation links and dynamically tracks the user's recent AI queries.
3. **Routing**: Set up `react-router-dom` in `App.jsx` to navigate seamlessly between the Home, About, Skills, Projects, and Contact pages without reloading the browser.

### Phase 3: Authentication & Security
1. **Protected Routes**: Implemented a `ProtectedRoute.jsx` wrapper. The entire portfolio is locked behind a sleek `Login` / `Register` screen.
2. **Session State**: Used browser `localStorage` to manage authentication tokens, automatically redirecting unauthenticated users away from the main content.

### Phase 4: Integrating the Local AI (FastAPI + Ollama)
1. **Ollama Setup**: Configured the backend `main.py` to communicate asynchronously with a local Ollama daemon running the `llama3.2` model.
2. **Chatbot Endpoint (`/chat`)**: Created a persistent, floating AI chatbot that uses the system prompt to roleplay as the creator's personal AI assistant. Chat history is saved locally.
3. **Keyword Explanation Endpoint (`/explain`)**: Built a feature where clicking on technical skills (e.g., "React.js") triggers the AI to generate a 2-3 sentence, easy-to-understand explanation of that technology.
4. **Project Summarization Endpoint (`/explain_project`)**: Engineered a prompt specifically designed to take raw bullet points from a project (like "OvaCare") and dynamically generate a cohesive, professional paragraph summarizing its architecture.

### Phase 5: Refining the Pages
- **Skills Page**: Grouped technologies into logical categories. Integrated Devicon for official SVGs. Implemented a Z-index fix (`relative z-10 hover:z-50`) to ensure the AI explanation dropdowns neatly overlap adjacent panels.
- **Projects Page**: Replaced static bullet points with dynamic "Ask AI" buttons. Clicking a project title now fetches an AI-generated summary on the fly with a typing animation.
- **Contact Page**: Added direct functional links to Email, Phone, LinkedIn, and GitHub using 3D hover-responsive cards.

---

## 💻 How to Run & Deploy

### 1. Start the Backend (FastAPI + Groq)
Ensure you have activated your Python virtual environment and set up your `.env` file with `GROQ_API_KEY`.
```bash
cd backend
# Install dependencies
pip install -r requirements.txt
# Run the server
uvicorn main:app --reload --port 8000
```

### 2. Start the Frontend (Vite/React Web App)
```bash
# Install dependencies
npm install
# Start local development server
npm run dev
```

### 3. Build for Desktop (.exe)
```bash
# Test the Desktop app locally
npm run desktop
```

### 4. Build for Mobile (Android)
```bash
# Build the React files first
npm run build
# Sync files to native Android project
npm run mobile:sync
# Open in Android Studio to build APK
npx cap open android
```

---

## 🛠️ Git & Deployment Commands

When you make changes to your code, use these commands to save and push your updates to GitHub. Vercel and Render will automatically rebuild your application when you push!

```bash
# 1. Add all changed files to staging
git add .

# 2. Commit the changes with a message
git commit -m "Describe your changes here"

# 3. Push to GitHub
git push
```
