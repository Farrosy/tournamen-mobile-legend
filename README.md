# MLBB Arena - Tournament Central 🏆

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)
![n8n](https://img.shields.io/badge/n8n-AI_Chat-FF6D5B?style=for-the-badge&logo=n8n)

**MLBB Arena** is a modern and responsive web application designed specifically for Mobile Legends: Bang Bang tournament management. This project features a clean "gaming" aesthetic with glassmorphism effects, interactive toast notifications, and an integrated AI-powered assistant.

---

## 🚀 Key Features

* **Responsive Design**: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.
* **Glassmorphism UI**: High-quality frosted glass effects for the navigation and card components.
* **Interactive Toasts**: Custom-built notification system for "Tournament Closed" and "Feature Not Available" states.
* **AI Assistant**: Integrated with **n8n Chat** for real-time user inquiries and Q&A.
* **Optimized Performance**: CSS is compiled and minified via Tailwind CLI to ensure maximum loading speed.

---

## 🛠️ Tech Stack

* **HTML5 & JavaScript (ES6)**: Core structure and interactive UI logic.
* **Tailwind CSS (v3 via CLI)**: Utility-first CSS framework for rapid custom design.
* **Font Awesome**: Premium icon collection for the gaming interface.
* **n8n**: Automation tool used for AI Chat Assistant integration.

---

## 📂 Project Structure

```text
tournamen-mobile-legend/
├── assets/
│   ├── css/
│   │   ├── style.css    # Source CSS (Input)
│   │   └── output.css   # Compiled & Minified CSS (Production)
│   └── js/
│       └── script.js    # UI Logic & Toast Notifications
├── index.html           # Main entry point
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Automated scripts & Dependencies
```

---

## 🏁 Getting Started

Follow the steps below to run the project on your local environment.

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.
> **For CachyOS/Arch users:** `sudo pacman -S nodejs npm`

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Farrosy/tournamen-mobile-legend.git
    cd tournamen-mobile-legend
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

---

## 💻 Development & Production

Use the following scripts configured in your `package.json`:

### Development Mode (Live Watch)
To automatically watch for CSS changes while you code:
```bash
npm run dev
```

### Production Mode (Minify)
To generate a lightweight and optimized CSS file before deployment:
```bash
npm run build
```

---

## 👤 Author

**Sayyid Syuja Farrosy**
* **GitHub**: [@Farrosy](https://github.com/Farrosy)
* **LinkedIn**: [Sayyid Syuja Farrosy](https://www.linkedin.com/in/sayyid-syuja-farrosy/)

---
*Developed as part of my Computer Science Portfolio.*
