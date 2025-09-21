# 🎮 ArcadeNexus

A modern, interactive game hub built with React, TypeScript, and Vite. ArcadeNexus provides an immersive gaming experience with a sleek dark theme and smooth animations.

## ✨ Features

### 🎯 Game Selection Hub
- **Interactive Game Cards**: Four unique games with hover effects and animations
- **Dynamic Backgrounds**: Color-changing backgrounds based on selected game
- **Smooth Transitions**: Framer Motion animations for a polished experience
- **Keyboard Navigation**: Arrow keys for game selection, Enter to start

### 🎮 Individual Game Pages
- **Modern Design**: Glassmorphism effects with dark theme
- **Game Details**: Comprehensive information including rules and objectives
- **Visual Stats**: Player count and duration with gradient cards
- **Interactive Elements**: Hover effects and smooth animations

### 🎨 Visual Design
- **Dark Theme**: Professional dark slate gradient background
- **Glassmorphism**: Modern glass effects with backdrop blur
- **Color-Coded Games**: Each game has its unique color theme
- **Responsive Design**: Works perfectly on all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ArcadeNexus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎯 Available Games

### 1. Escape The Lava
- **Type**: Solo/Team
- **Players**: 1-8 Players
- **Description**: Race against time as the ground beneath you turns to molten rock
- **Theme**: Primary (Blue)

### 2. Find The Color
- **Type**: Competition
- **Players**: 2-12 Players
- **Description**: Test your visual perception in this fast-paced color matching challenge
- **Theme**: Secondary (Purple)

### 3. Red Light Green Light
- **Type**: Team
- **Players**: 3-20 Players
- **Description**: Classic childhood game reimagined with futuristic twists and challenges
- **Theme**: Accent (Green)

### 4. Sharp Shooter
- **Type**: Solo/Competition
- **Players**: 1-6 Players
- **Description**: Precision targeting game that tests your accuracy and reflexes
- **Theme**: Primary (Blue)

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Wouter**: Lightweight routing library
- **Lucide React**: Beautiful icons

### Backend
- **Express.js**: Web framework
- **Node.js**: Runtime environment
- **TypeScript**: Type-safe server code

### UI Components
- **Radix UI**: Accessible component primitives
- **Custom Components**: Tailored UI components
- **Glassmorphism**: Modern glass effects

## 📁 Project Structure

```
ArcadeNexus/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   └── ui/        # Base UI components (buttons, cards, etc.)
│   │   ├── pages/         # Page components
│   │   │   ├── game-selection.tsx
│   │   │   ├── game-page.tsx
│   │   │   └── not-found.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎮 How to Use

### Game Selection
1. **Browse Games**: View the four available games on the homepage
2. **Select Game**: Click on any game card to select it (it will highlight)
3. **Start Game**: Click the "Start Game" button to navigate to the game page
4. **Keyboard Navigation**: Use arrow keys to navigate between games, Enter to start

### Game Pages
1. **Game Information**: View detailed game information, rules, and objectives
2. **Visual Stats**: See player count and duration in attractive gradient cards
3. **Action Buttons**: 
   - **Start Game**: Begin the game (ready for implementation)
   - **Settings**: Access game settings
   - **Leaderboard**: View game leaderboard
4. **Navigation**: Use the back button to return to the game hub

## 🎨 Design System

### Color Themes
- **Primary**: Blue gradient (`from-blue-500 to-blue-600`)
- **Secondary**: Purple gradient (`from-purple-500 to-purple-600`)
- **Accent**: Green gradient (`from-green-500 to-green-600`)

### Typography
- **Headings**: Bold, large text with gradient effects
- **Body Text**: Clean, readable text with proper contrast
- **Code**: Monospace font for technical content

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Glass Effects**: Backdrop blur with transparency
- **Animations**: Smooth transitions using Framer Motion

## 🚀 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check

# Database operations
npm run db:push
```

### Adding New Games

1. **Update Game Data**: Add new game to `gameData` object in `game-page.tsx`
2. **Add Game Card**: Include new game in `games` array in `game-selection.tsx`
3. **Customize Theme**: Choose appropriate color theme for the new game
4. **Add Rules & Objectives**: Define game-specific rules and objectives

### Customizing Styles

- **Colors**: Modify color themes in the `getColorClass` function
- **Animations**: Adjust Framer Motion animations in component props
- **Layout**: Update Tailwind classes for different layouts
- **Glass Effects**: Modify backdrop blur and transparency values

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Server port (default: 5000)

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and sizing
- Custom animations
- Glassmorphism utilities

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted grid layouts
- **Mobile**: Stacked layout with optimized spacing

## 🎯 Future Enhancements

### Planned Features
- **Game Implementation**: Actual playable games
- **User Authentication**: User accounts and profiles
- **Score Tracking**: Persistent score storage
- **Multiplayer Support**: Real-time multiplayer games
- **Sound Effects**: Audio feedback and music
- **Game Statistics**: Detailed analytics and progress tracking

### Technical Improvements
- **State Management**: Redux or Zustand for complex state
- **API Integration**: Backend API for game data
- **Database**: Persistent data storage
- **Testing**: Unit and integration tests
- **PWA Support**: Progressive Web App features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion**: For smooth animations
- **Tailwind CSS**: For utility-first styling
- **Radix UI**: For accessible components
- **Lucide React**: For beautiful icons
- **Unsplash**: For high-quality game images

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed description
3. Contact the development team

---

**Built with ❤️ by the ArcadeNexus Team**
