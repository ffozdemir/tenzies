# 🎲 Tenzies Game

A simple and fun dice game built with React! Roll the dice and try to get all ten dice to show the same number. Click on dice to "freeze" them between rolls.

![React](https://img.shields.io/badge/React-19+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6+-646CFF?style=flat-square&logo=vite)

## 🎯 How to Play

1. **Roll the dice** by clicking the "Roll" button
2. **Click on any die** to freeze it at its current value
3. **Keep rolling** the unfrozen dice until all dice show the same number
4. **Win the game** when all ten dice are frozen and show the same value
5. **Celebrate** with confetti! 🎉
6. **Start a new game** by clicking "New Game"

## ✨ Features

- **Click to Hold**: Click dice to freeze them at their current value
- **Visual Feedback**: Held dice turn green
- **Win Detection**: Game detects when all dice match
- **Confetti Animation**: Celebration effect when you win
- **New Game**: Reset button to start over
- **Accessibility**: Basic screen reader support with aria-labels

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tenzies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🏗️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **react-confetti** - Win celebration animation
- **nanoid** - Unique ID generation for dice
- **CSS** - Basic styling

## 📁 Project Structure

```
tenzies/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css          # Main app styles
│   ├── App.jsx          # Main app component
│   ├── Die.css          # Die component styles
│   ├── Die.jsx          # Individual die component
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 Game Logic

- Each die shows a random number (1-6)
- Click a die to hold/unhold it (held dice turn green)
- Rolling only affects unheld dice
- Win when all dice are held and show the same number
- Confetti plays on win, button changes to "New Game"

## 🎨 Current Styling

- Simple, clean design
- Green color for held dice
- Basic hover effects
- Responsive layout

## 💡 Possible Future Enhancements

- Roll counter to track attempts
- Timer to measure game speed
- Sound effects
- High score tracking
- Different difficulty levels (more/fewer dice)
- Animation effects for rolling dice

## 🔧 Customization

Simple modifications you can make:

- Change number of dice in `generateAllNewDice()`
- Modify die face range (currently 1-6)
- Update colors in CSS files
- Add new features from the enhancement list above

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 About

This project was created as part of the Scrimba React course. It's a beginner-friendly project that demonstrates:

- React state management
- Event handling
- Conditional rendering
- Component props
- useEffect hook

## 🙏 Credits

- [Scrimba](https://scrimba.com/) for the React course and project idea

---

**Happy Gaming! 🎲**
