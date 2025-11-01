import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Games = () => {
  const games = [
    {
      title: "NEBULA ASCENDANT",
      genre: "Action RPG",
      description:
        "Explore vast galaxies in this epic sci-fi RPG. Command your ship, forge alliances, and uncover ancient mysteries in a universe on the brink of war.",
      status: "In Development",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "NEON VELOCITY",
      genre: "Racing / Multiplayer",
      description:
        "Race through cyber-enhanced cities at breakneck speeds. Customize your hovercraft and dominate the leaderboards in this adrenaline-fueled multiplayer racer.",
      status: "Coming 2025",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "SANCTUARY PROTOCOL",
      genre: "Survival Simulation",
      description:
        "Build and defend humanity's last sanctuary in a post-apocalyptic world. Manage resources, research technologies, and lead survivors to a new dawn.",
      status: "Pre-Production",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "CHRONO SHARDS",
      genre: "Puzzle / Adventure",
      description:
        "Manipulate time itself to solve intricate puzzles and uncover the truth behind a fractured timeline. Every choice ripples through past and future.",
      status: "Concept Phase",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              <span className="gradient-text glow-text-primary">Our Universes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore the immersive worlds we're crafting. Each game is a portal to new possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group holo-border rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Game Image/Placeholder */}
                <div
                  className="h-64 relative overflow-hidden"
                  style={{ background: game.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground hover:bg-primary">
                      {game.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full p-4 glow-primary">
                      <ExternalLink className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary group-hover:glow-text-primary transition-all">
                        {game.title}
                      </h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        {game.genre}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{game.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holo-border rounded-3xl p-12 text-center space-y-6"
          >
            <h2 className="text-4xl font-bold gradient-text">More Worlds Coming</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're constantly exploring new frontiers. Stay tuned for announcements about our next
              generation of gaming experiences.
            </p>
            <div className="pt-6">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <div className="text-6xl">🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Games;
