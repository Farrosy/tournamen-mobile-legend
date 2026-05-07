# MLBB Arena - Tournament Central 🏆

MLBB Arena is a modern, responsive web application designed for Mobile Legends: Bang Bang tournament management. This project features a clean "gaming" aesthetic with glassmorphism effects, interactive toast notifications, and an AI-powered assistant.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.
- **Glassmorphism UI**: High-quality frosted glass effects for the navigation and components.
- **Interactive Toasts**: Custom-built notification system for "Tournament Closed" and "Feature Not Available" states.
- **AI Assistant**: Integrated with n8n Chat for real-time user inquiries.
- **Optimized Performance**: CSS is compiled and minified via Tailwind CLI to ensure minimal file size.

## 🛠️ Tech Stack

- **HTML5** & **JavaScript (ES6)**
- **Tailwind CSS** (v3 via CLI)
- **Font Awesome** (Icons)
- **n8n** (AI Chat Integration)

## 📂 Project Structure

tournamen-mobile-legend/
├── assets/
│   ├── css/
│   │   ├── style.css    # Source CSS with @apply directives
│   │   └── output.css   # Compiled CSS for production
│   └── js/
│       └── script.js    # Interactive UI logic
├── index.html           # Main entry point
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies & scripts

## 🏁 Getting Started

Follow ini untuk menjalankan project di lokal machine Anda.

### Prerequisites

Pastikan Anda sudah menginstall Node.js dan npm (untuk pengguna CachyOS/Arch, jalankan `sudo pacman -S nodejs npm`).

### Installation

1. **Clone the repository**:
   git clone https://github.com/Farrosy/tournamen-mobile-legend.git
   cd tournamen-mobile-legend

2. **Install dependencies**:
   npm install

### Development (Running the project)

Untuk mulai melakukan perubahan dan melihat hasilnya secara real-time:

1. **Jalankan Tailwind Watcher**:
   npm run dev

2. **Buka Project**:
   Buka file index.html di browser Anda.

### Building for Production

Untuk menghasilkan file CSS yang terkompresi dan ringan sebelum di-deploy:
npm run build

## 👤 Author

Sayyid Syuja Farrosy
- GitHub: @Farrosy (https://github.com/Farrosy)
- LinkedIn: Sayyid Syuja Farrosy (https://www.linkedin.com/in/sayyid-syuja-farrosy/)

---
*Developed as part of my Computer Science Portfolio.*