# MLBB Arena - Tournament Central 🏆

MLBB Arena is a modern, responsive web application designed for Mobile Legends: Bang Bang tournament management. This project features a clean "gaming" aesthetic with glassmorphism effects, interactive toast notifications, and an AI-powered assistant.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.
- **Glassmorphism UI**: High-quality frosted glass effects for the navigation and components.
- **Interactive Toasts**: Custom-built notification system for "Tournament Closed" and "Feature Not Available" states.
- **AI Assistant**: Integrated with **n8n Chat** for real-time user inquiries.
- **Optimized Performance**: CSS is compiled via Tailwind CLI to ensure minimal file size.

## 🛠️ Tech Stack

- **HTML5** & **JavaScript (ES6)**
- **Tailwind CSS** (via CLI)
- **Font Awesome** (Icons)
- **n8n** (AI Chat Integration)

## 📂 Project Structure
```text
portofolio-sayyid-syuja-farrosy/
├── assets/
│   ├── css/
│   │   ├── style.css    # Source CSS with @apply directives
│   │   └── output.css   # Compiled CSS for production
│   └── js/
│       └── script.js    # Interactive UI logic
├── index.html           # Main entry point
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies
```

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system (for CachyOS users, run `sudo pacman -S nodejs npm`).

### Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Farrosy/tournamen-mobile-legend.git](https://github.com/Farrosy/tournamen-mobile-legend.git)
   cd tournamen-mobile-legend
   ```

2. **Install dependencies**:
   
```bash
   npm install
   ```

### Development (Running the project)

To start developing and see your changes in real-time:

1. **Run Tailwind CLI Watcher**:
   Open your terminal and run the following command:
   ```bash
   npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --watch
   ```

2. **Open the Project**:
   Open `index.html` in your web browser.

### Building for Production

To generate a minified and optimized CSS file:
```bash
npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --minify
```

## 👤 Author

**Sayyid Syuja Farrosy**
- GitHub: [@Farrosy](https://github.com/Farrosy)
- LinkedIn: [Sayyid Syuja Farrosy](https://www.linkedin.com/in/sayyid-syuja-farrosy/)

---
*Developed as part of my Computer Science Portfolio.*
