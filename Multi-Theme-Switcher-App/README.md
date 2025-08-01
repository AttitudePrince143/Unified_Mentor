# 🌈 Multi-Theme Switcher React App

This is a React-based responsive web application featuring a **theme switcher** that dynamically changes the entire layout, color palette, font styles, and structure across three distinct themes. Users can explore a product listing page, an about section, and a contact form, all styled differently under each theme.

---

## 🔥 Features

- 🖌️ **Three Unique Themes**
  - **Theme 1:** Minimalist Light UI with sans-serif font
  - **Theme 2:** Dark Mode with Sidebar + bold serif font
  - **Theme 3:** Colorful Card-based UI with Pacifico font

- 🧠 **Global Theme Management**
  - Built with **Context API**
  - **Theme persists** across reloads via `localStorage`

- 🛒 **Product List**
  - Data fetched from [Fake Store API](https://fakestoreapi.com/products)
  - Product list **shuffles** on theme change

- 🌐 **Pages**
  - `/` → Home (Cards, Button, Text)
  - `/about` → App description (styled per theme)
  - `/contact` → Dummy contact form

- 📱 **Responsive Design**
  - Built with **Tailwind CSS**
  - Optimized for desktop & mobile

- ⚙️ **Routing**
  - Uses **React Router v6**
  - Compatible with **GitHub Pages** (via `HashRouter`)

- 🎞️ **Page Transitions**
  - Uses **Framer Motion** for smooth animations

- ✅ **TypeScript**
  - Fully typed components and context

---

## 🧪 Tech Stack

- React (TypeScript)
- Tailwind CSS
- React Router v6
- Framer Motion (for animations)
- Context API
- Fake Store API

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/multi-theme-app.git
cd multi-theme-app


2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
npm run dev
Then open http://localhost:5173 in your browser.

Built using Vite – fast and modern React setup!

📦 Build for Production
bash
Copy
Edit
npm run build
To Preview Production Build
bash
Copy
Edit
npm run preview
🌍 GitHub Pages Deployment
Make sure to:

Use HashRouter in App.tsx

Set "homepage": "./" in package.json

Use gh-pages package if you want automated deployment

📁 Folder Structure
arduino
Copy
Edit
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── theme/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
👨‍💻 Author
Syed Adil
Frontend Developer | React Enthusiast

📜 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

✅ Just paste that into `README.md`  
📝 Then customize the `git clone` URL and author details if needed.

Let me know if you also want:
- 🖼️ Screenshots added to README  
- 🌐 GitHub Pages deployment script  
- 📦 Final ZIP with the README included