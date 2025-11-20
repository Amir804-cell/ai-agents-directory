# AI Agents Directory 🤖

A modern, visually stunning web application to discover and explore AI agents, tools, and assistants. Features comprehensive information about pricing, capabilities, and use cases for 18+ popular AI tools.

## ✨ Features

- **Beautiful Dark Theme**: Modern glassmorphism design with gradient accents
- **Smart Filtering**: Search by name, description, or capabilities
- **Category Filters**: Browse by category (General Purpose, Development, Creative, etc.)
- **Pricing Filters**: Filter by Free, Paid, or Freemium options
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Featured Agents**: Highlighted top AI tools
- **Rich Information**: Detailed descriptions, capabilities, and direct links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

Due to PowerShell execution policy restrictions, you have two options:

#### Option 1: Using Command Prompt (Recommended)

1. Open **Command Prompt** (not PowerShell)
2. Navigate to the project directory:
   ```cmd
   cd c:\Users\Amela\Desktop\kids-game\ai-agents-directory
   ```
3. Install dependencies:
   ```cmd
   npm install
   ```
4. Start the development server:
   ```cmd
   npm run dev
   ```

#### Option 2: Using the Batch File

1. Double-click `run-dev.bat` in the project folder
2. The app will automatically install dependencies and start

#### Option 3: Fix PowerShell Execution Policy

Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then you can use PowerShell normally:
```powershell
npm install
npm run dev
```

### Accessing the App

Once running, open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🎨 Design Features

- Custom color palette with HSL values
- Glassmorphism effects
- Smooth animations and transitions
- Gradient text and buttons
- Hover effects and micro-interactions
- Responsive grid layout

## 📊 Included AI Agents

The app includes information about 18 popular AI agents:

- ChatGPT (Freemium)
- Claude (Freemium)
- GitHub Copilot (Paid)
- Midjourney (Paid)
- DALL-E 3 (Paid)
- Perplexity AI (Freemium)
- Jasper (Paid)
- Grammarly (Freemium)
- Cursor (Freemium)
- Notion AI (Paid)
- Stable Diffusion (Free)
- ElevenLabs (Freemium)
- Runway ML (Freemium)
- Otter.ai (Freemium)
- Copy.ai (Freemium)
- Hugging Face (Freemium)
- Synthesia (Paid)
- Fireflies.ai (Freemium)

## 🛠️ Development

### Build for Production

```cmd
npm run build
```

### Preview Production Build

```cmd
npm run preview
```

## 📝 Project Structure

```
ai-agents-directory/
├── src/
│   ├── components/
│   │   ├── Header.tsx/css
│   │   ├── Filters.tsx/css
│   │   ├── AgentCard.tsx/css
│   │   └── AgentGrid.tsx/css
│   ├── data/
│   │   └── agents.ts
│   ├── types.ts
│   ├── App.tsx/css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Future Enhancements

- Add more AI agents
- User authentication
- Save favorites
- Compare agents side-by-side
- User reviews and ratings
- API integration for real-time data
- Dark/Light theme toggle

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ to help you discover the best AI tools
