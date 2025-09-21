import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, CheckIcon, PlayIcon, TrophyIcon, BookOpenIcon } from "lucide-react";

interface Game {
  id: string;
  name: string;
  type: string;
  players: string;
  description: string;
  thumbnail: string;
  color: 'primary' | 'secondary' | 'accent';
}

const games: Game[] = [
  {
    id: "escape-lava",
    name: "Escape The Lava",
    type: "Solo/Team",
    players: "1-8 Players",
    description: "Race against time as the ground beneath you turns to molten rock",
    thumbnail: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    color: 'primary'
  },
  {
    id: "find-color",
    name: "Find The Color",
    type: "Competition",
    players: "2-12 Players",
    description: "Test your visual perception in this fast-paced color matching challenge",
    thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    color: 'secondary'
  },
  {
    id: "red-light-green",
    name: "Red Light Green Light",
    type: "Team",
    players: "3-20 Players",
    description: "Classic childhood game reimagined with futuristic twists and challenges",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    color: 'accent'
  },
  {
    id: "sharp-shooter",
    name: "Sharp Shooter",
    type: "Solo/Competition",
    players: "1-6 Players",
    description: "Precision targeting game that tests your accuracy and reflexes",
    thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    color: 'primary'
  }
];

const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full opacity-40"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-50"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full opacity-30"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

const GameCard = ({ game, isSelected, onSelect }: { 
  game: Game; 
  isSelected: boolean; 
  onSelect: () => void; 
}) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'group-hover:text-primary group-hover:border-primary group-hover:bg-primary/20';
      case 'secondary': return 'group-hover:text-secondary group-hover:border-secondary group-hover:bg-secondary/20';
      case 'accent': return 'group-hover:text-accent group-hover:border-accent group-hover:bg-accent/20';
      default: return 'group-hover:text-primary group-hover:border-primary group-hover:bg-primary/20';
    }
  };

  const getSelectedColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary text-white';
      case 'secondary': return 'bg-secondary text-white';
      case 'accent': return 'bg-accent text-white';
      default: return 'bg-primary text-white';
    }
  };

  const getTextColorClass = (color: string, isSelected: boolean) => {
    if (isSelected) {
      switch (color) {
        case 'primary': return 'text-primary';
        case 'secondary': return 'text-secondary';
        case 'accent': return 'text-accent';
        default: return 'text-primary';
      }
    }
    return 'text-white group-hover:text-primary group-hover:text-secondary group-hover:text-accent';
  };

  const getBorderColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary/30';
      case 'secondary': return 'border-secondary/30';
      case 'accent': return 'border-accent/30';
      default: return 'border-primary/30';
    }
  };

  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      default: return 'text-primary';
    }
  };

  return (
    <motion.div
      className={`game-card neon-border rounded-xl p-6 cursor-pointer group ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      data-testid={`card-game-${game.id}`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <motion.img 
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute top-3 right-3">
          <span className="type-badge px-3 py-1 rounded-full text-xs font-medium text-white">
            {game.type}
          </span>
        </div>
        {isSelected && (
          <motion.div 
            className="absolute top-3 left-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
              <CheckIcon className="w-3 h-3 text-white" />
            </div>
          </motion.div>
        )}
      </div>
      <h3 className={`font-space text-xl font-bold mb-2 transition-colors ${getTextColorClass(game.color, isSelected)}`}>
        {game.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-3">
        {game.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-accent font-medium text-sm">{game.players}</span>
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
          isSelected 
            ? getSelectedColorClass(game.color)
            : `${getBorderColorClass(game.color)} ${getColorClass(game.color)}`
        }`}>
          {isSelected ? (
            <CheckIcon className="w-4 h-4 text-white" />
          ) : (
            <ChevronRightIcon className={`w-4 h-4 ${getIconColorClass(game.color)}`} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function GameSelection() {
  const [selectedGame, setSelectedGame] = useState<string>("red-light-green");
  const [isStarting, setIsStarting] = useState(false);

  const handleStartGame = () => {
    if (selectedGame) {
      setIsStarting(true);
      // Simulate game start
      setTimeout(() => {
        setIsStarting(false);
        console.log('Starting game:', selectedGame);
      }, 2000);
    }
  };

  const handleShowMoreGames = () => {
    console.log('Showing more games');
  };

  const handleShowRules = () => {
    console.log('Showing game rules');
  };

  const handleShowLeaderboard = () => {
    console.log('Showing leaderboard');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selectedGame) {
        handleStartGame();
      }
      
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = games.findIndex(game => game.id === selectedGame);
        let nextIndex;
        
        if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : games.length - 1;
        } else {
          nextIndex = currentIndex < games.length - 1 ? currentIndex + 1 : 0;
        }
        
        setSelectedGame(games[nextIndex].id);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedGame]);

  return (
    <div className="min-h-screen text-foreground">
      <FloatingParticles />
      
      {/* Header Section */}
      <header className="relative z-10 pt-12 pb-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.h1 
              className="font-space text-6xl font-bold mb-4 glow-text text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              GAME HUB
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Select your next gaming adventure from our collection of immersive experiences
            </motion.p>
          </div>
        </div>
      </header>

      {/* Game Selection Section */}
      <main className="container mx-auto px-6 pb-20">
        <div className="relative">
          {/* Primary Games Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.1 }}
          >
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <GameCard
                  game={game}
                  isSelected={selectedGame === game.id}
                  onSelect={() => setSelectedGame(game.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* More Games Indicator */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center">
              <div className="neon-border rounded-xl p-8 text-center backdrop-blur-md bg-muted/50">
                <motion.div 
                  className="animate-pulse-glow w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary/50 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronRightIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-space text-xl font-bold mb-2 text-primary">More Games Available</h3>
                <p className="text-muted-foreground text-sm mb-4">Discover additional gaming experiences</p>
                <motion.button 
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:from-secondary hover:to-accent transition-all duration-300 neon-glow"
                  onClick={handleShowMoreGames}
                  data-testid="button-more-games"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse All Games
                </motion.button>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 more-games-indicator w-32 h-full pointer-events-none flex items-center justify-end pr-6">
              <motion.div 
                className="animate-float"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronRightIcon className="w-6 h-6 text-primary/60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-space font-bold text-lg hover:from-primary hover:to-secondary transition-all duration-300 neon-glow group disabled:opacity-50"
              onClick={handleStartGame}
              disabled={isStarting || !selectedGame}
              data-testid="button-start-game"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isStarting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Loading...
                  </motion.span>
                ) : (
                  <motion.span
                    key="start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    Start Game
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <PlayIcon className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="px-6 py-2 rounded-lg border border-border text-muted-foreground hover:text-white hover:border-primary transition-all"
                onClick={handleShowRules}
                data-testid="button-game-rules"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpenIcon className="w-4 h-4 inline mr-2" />
                Game Rules
              </motion.button>
              <motion.button 
                className="px-6 py-2 rounded-lg border border-border text-muted-foreground hover:text-white hover:border-secondary transition-all"
                onClick={handleShowLeaderboard}
                data-testid="button-leaderboard"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrophyIcon className="w-4 h-4 inline mr-2" />
                Leaderboard
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
