# 🌿 GreenNest — Single-Page Plant Care & Store Application (React + Firebase)

GreenNest is a clean, modern, and user-friendly single-page web application designed for plant lovers.  
Users can explore indoor plants, read care tips, book consultations, and manage their profiles using Firebase Authentication.

This project was developed as part of **My React Projects**.

---

## 🚀 Live Demo  
👉 [https://green-nest-indoor-plant-care-store.vercel.app/]

## 📦 GitHub Repository  
👉 [https://github.com/mdtajrianrashid/GreenNest-Indoor-Plant-Care-Store]
---

# 📌 Features Overview

## 🌐 Public Pages  
- **Home Page (Multiple Sections)**  
  - Hero Slider  
  - Top-Rated Plants  
  - Plant Care Tips  
  - Our Experts  
  - Optional Eco-Decor Section  
- **All Plants Page** (data from `plants.json`)  
- Clean navigation with responsive design

## 🔐 Authentication (Firebase Auth)  
- Email + Password Registration  
- Login with Email & Password  
- **Google Login**  
- Forgot Password (Reset via Email)  
- Password validation rules  
- Show/Hide password toggle  

## 🔒 Protected Features  
- **Plant Details** page is protected  
- Users must be authenticated to view full details  
- Includes a **Book Consultation** form

## 🌟 Key Features Implemented According to Assignment Requirements

- ✔ Firebase Authentication (Email/Password + Google)
- ✔ Forgot Password
- ✔ Profile Update Page with Firebase updateProfile()
- ✔ Protected Plant Details Route
- ✔ plants.json with required fields
- ✔ Booking Consultation form
- ✔ Responsive UI
- ✔ Tailwind CSS + Animations
- ✔ Fully working SPA
- ✔ Hosted on Netlify

## 👤 Profile Page  
- Update Display Name  
- Update Profile Photo  
- Persistent user session  
- Firebase `updateProfile()` integration  

## 🎨 UI / UX  
- Fully responsive layout  
- Tailwind CSS styling  
- Smooth, clean card designs  
- Swiper.js / Framer Motion slider  
- Minimal, nature-inspired theme  
- Proper navbar/footer behavior across all pages  

---

# 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite) |
| Authentication | Firebase Auth |
| State Handling | React Hooks + Context API |
| Styling | Tailwind CSS |
| Utilities | Swiper.js / Framer Motion (for sliders/animations) |
| Deployment | Netlify (Client) |

---

# 📦 Dependencies

"dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "aos": "^2.3.4",
    "daisyui": "^5.3.8",
    "firebase": "^12.4.0",
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.15"
  }

# ⚙️ Local Setup & Installation

## 1️⃣ Clone the Repository

```bash
git clone your_repo_link_here
cd your_project_name
npm install
npm run dev

The app will run on:
👉 http://localhost:5173

(or whichever port Vite shows)
```

## 🎉 Thank You!