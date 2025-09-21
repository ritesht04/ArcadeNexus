import { motion } from "framer-motion";
import { ArrowLeftIcon, PlayIcon, SettingsIcon, TrophyIcon, UsersIcon, ClockIcon } from "lucide-react";
import { useLocation, useRoute, useParams } from "wouter";

interface GameInfo {
  id: string;
  name: string;
  type: string;
  players: string;
  description: string;
  thumbnail: string;
  color: 'primary' | 'secondary' | 'accent';
  rules: string[];
  objectives: string[];
}

const gameData: Record<string, GameInfo> = {
  "escape-lava": {
    id: "escape-lava",
    name: "Escape The Lava",
    type: "Solo/Team",
    players: "1-8 Players",
    description: "Race against time as the ground beneath you turns to molten rock",
    thumbnail: "https://github.com/ritesht04/ArcadeNexus/blob/main/attached_assets/escapeTheLava.jpg?raw=true",
    color: 'primary',
    rules: [
      "Stay on safe platforms - avoid the lava!",
      "Platforms disappear after 3 seconds",
      "Work together in team mode",
      "Last player standing wins"
    ],
    objectives: [
      "Survive as long as possible",
      "Reach the highest platform",
      "Help teammates in team mode",
      "Collect power-ups for advantages"
    ]
  },
  "find-color": {
    id: "find-color",
    name: "Find The Color",
    type: "Competition",
    players: "2-12 Players",
    description: "Test your visual perception in this fast-paced color matching challenge",
    thumbnail: "https://github.com/ritesht04/ArcadeNexus/blob/main/attached_assets/findTheColor.jpg?raw=true",
    color: 'secondary',
    rules: [
      "Match the displayed color quickly",
      "Wrong answers eliminate you",
      "Speed increases each round",
      "Most accurate player wins"
    ],
    objectives: [
      "Identify colors correctly",
      "React as fast as possible",
      "Survive elimination rounds",
      "Achieve highest accuracy score"
    ]
  },
  "red-light-green": {
    id: "red-light-green",
    name: "Red Light Green Light",
    type: "Team",
    players: "3-20 Players",
    description: "Classic childhood game reimagined with futuristic twists and challenges",
    thumbnail: "https://github.com/ritesht04/ArcadeNexus/blob/main/attached_assets/redLightGreenLight.jpg?raw=true",
    color: 'accent',
    rules: [
      "Move only on 'Green Light'",
      "Stop immediately on 'Red Light'",
      "Caught moving = eliminated",
      "First to finish line wins"
    ],
    objectives: [
      "Reach the finish line first",
      "Avoid being caught moving",
      "Work with your team",
      "Master the timing"
    ]
  },
  "sharp-shooter": {
    id: "sharp-shooter",
    name: "Sharp Shooter",
    type: "Solo/Competition",
    players: "1-6 Players",
    description: "Precision targeting game that tests your accuracy and reflexes",
    thumbnail: "https://github.com/ritesht04/ArcadeNexus/blob/main/attached_assets/sharpShooter.jpg?raw=true",
    color: 'primary',
    rules: [
      "Hit targets with precision",
      "Different targets have different points",
      "Time limit for each round",
      "Highest score wins"
    ],
    objectives: [
      "Hit all targets accurately",
      "Score maximum points",
      "Complete rounds quickly",
      "Master different weapon types"
    ]
  }
};

export default function GamePage() {
  const [location, setLocation] = useLocation();
  const [match, params] = useRoute('/game/:gameId');
  
  // Try to get gameId from params first, then from location
  let gameId = params?.gameId;
  if (!gameId && location.startsWith('/game/')) {
    gameId = location.split('/game/')[1];
  }

  console.log('GamePage - location:', location, 'match:', match, 'params:', params, 'gameId:', gameId);
  console.log('Available game IDs:', Object.keys(gameData));

  if (!gameId || !gameData[gameId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Game Not Found</h1>
          <button
            onClick={() => setLocation('/')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Back to Game Hub
          </button>
        </div>
      </div>
    );
  }

  const game = gameData[gameId];

  const handleBackToHub = () => {
    setLocation('/');
  };

  const handleStartGame = () => {
    console.log(`Starting ${game.name}`);
    // Here you would implement the actual game logic
  };

  const handleShowSettings = () => {
    console.log('Opening game settings');
  };

  const handleShowLeaderboard = () => {
    console.log('Showing leaderboard');
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'from-primary to-primary/80';
      case 'secondary': return 'from-secondary to-secondary/80';
      case 'accent': return 'from-accent to-accent/80';
      default: return 'from-primary to-primary/80';
    }
  };

  const getBorderColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary';
      case 'secondary': return 'border-secondary';
      case 'accent': return 'border-accent';
      default: return 'border-primary';
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToHub}
              className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Game Hub
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handleShowSettings}
                className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
              >
                <SettingsIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleShowLeaderboard}
                className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
              >
                <TrophyIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Game Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
              {game.name}
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {game.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Game Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${getColorClass(game.color)}`}>
                    {game.type}
                  </span>
                </div>
                {/* Game name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                    {game.name}
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Game Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Game Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-500/30 rounded-lg mr-3">
                      <UsersIcon className="w-6 h-6 text-blue-300" />
                    </div>
                    <span className="font-semibold text-white">Players</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-200">{game.players}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-green-500/30 rounded-lg mr-3">
                      <ClockIcon className="w-6 h-6 text-green-300" />
                    </div>
                    <span className="font-semibold text-white">Duration</span>
                  </div>
                  <p className="text-3xl font-bold text-green-200">5-15 min</p>
                </div>
              </div>

              {/* Rules */}
              <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border border-red-400/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-red-300 flex items-center">
                  <div className="w-8 h-8 bg-red-500/30 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-red-300 font-bold">!</span>
                  </div>
                  Game Rules
                </h3>
                <ul className="space-y-3">
                  {game.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                      <span className="text-gray-200 leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Objectives */}
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center">
                  <div className="w-8 h-8 bg-cyan-500/30 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-cyan-300 font-bold">✓</span>
                  </div>
                  Objectives
                </h3>
                <ul className="space-y-3">
                  {game.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 shadow-lg"></div>
                      <span className="text-gray-200 leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="text-center mt-16 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={handleStartGame}
              className={`inline-flex items-center px-12 py-6 rounded-2xl bg-gradient-to-r ${getColorClass(game.color)} text-white font-bold text-xl hover:opacity-90 transition-all duration-300 shadow-2xl hover:shadow-3xl`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayIcon className="w-8 h-8 mr-3" />
              Start Game
            </motion.button>
            
            <div className="flex justify-center space-x-6">
              <button
                onClick={handleShowSettings}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
              >
                <SettingsIcon className="w-5 h-5 inline mr-2" />
                Settings
              </button>
              <button
                onClick={handleShowLeaderboard}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
              >
                <TrophyIcon className="w-5 h-5 inline mr-2" />
                Leaderboard
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}

