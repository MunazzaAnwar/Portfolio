# 🌟 Personal Portfolio Website

An award-style personal portfolio built with React, Tailwind CSS, GSAP, Three.js, and Framer Motion — designed to attract recruiters, international clients, and internship opportunities.

🌐 **Live Demo:** [munazzaanwar.github.io/Portfolio](https://munazzaanwar.github.io/Portfolio/)

---

## 📌 Overview

This portfolio is inspired by the design philosophy of Awwwards, Apple, Stripe, and Tesla. It showcases skills, projects, experience, and services through immersive 3D animations, smooth transitions, and a premium UI that stands out from typical developer portfolios.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI architecture |
| Tailwind CSS | Utility-first styling |
| GSAP + ScrollTrigger | Scroll-driven animations and text reveals |
| Three.js | 3D animated hero background with interactive particles |
| Framer Motion | Page transitions and scroll-reveal effects |

---

## ✨ Features

### Hero Section
- 3D animated particle background (Three.js)
- Interactive particle system responding to mouse movement
- Animated introduction text with GSAP text reveal
- Social media links with hover effects

### About Section
- Professional story layout
- Animated cards with staggered reveal

### Skills Section
- Animated skill progress bars
- Circular progress indicators for key competencies

### Projects Section
- Dynamic filterable project cards
- Modal popup previews with project details
- Category-based filtering (Web, AI/ML, Software)

### Experience Timeline
- Interactive vertical timeline
- Smooth scroll-reveal for each milestone

### Certifications
- Animated showcase gallery

### Contact Section
- Functional contact form
- Interactive layout

### Global
- GSAP ScrollTrigger throughout
- Cursor animations and custom cursor
- Smooth page transitions via Framer Motion
- 3D hover tilt effects on cards
- Fully responsive across all screen sizes

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx          # Three.js 3D background
│   │   ├── About.jsx
│   │   ├── Skills.jsx        # Animated bars + circular indicators
│   │   ├── Projects.jsx      # Filterable cards + modals
│   │   ├── Experience.jsx    # Vertical interactive timeline
│   │   ├── Certifications.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/munazzaanwar/Portfolio.git

# Install dependencies
cd Portfolio
npm install

# Start development server
npm start
```

Build for production:
```bash
npm run build
```

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "tailwindcss": "^3.x",
  "gsap": "^3.x",
  "three": "^0.x",
  "framer-motion": "^10.x"
}
```

---

## 📸 Pages

| Page | Highlights |
|---|---|
| Home | 3D particle background, animated intro |
| About | Story timeline, animated cards |
| Skills | Progress bars, circular indicators |
| Experience | Interactive vertical timeline |
| Projects | Filter + modal previews |
| Certifications | Animated gallery |
| Services | Service cards |
| Contact | Form + interactive layout |

---

## 👩‍💻 Author

**Munazza Anwar**  
Frontend Developer · Python Developer · AI Enthusiast  
UMT Lahore · CGPA 3.35 / 4.0  
[LinkedIn](https://linkedin.com/in/munazza-anwar) · munazzanwar@gmail.com
