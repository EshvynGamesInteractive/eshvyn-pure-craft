import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Animated particles background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight">
              <span className="block gradient-text glow-text-primary">ESHVYN GAMES</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-muted-foreground font-normal">
                INTERACTIVE
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-primary font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Pure Innovation. Infinite Worlds.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Crafting immersive gaming experiences that merge creativity with cutting-edge technology.
              Welcome to the future of interactive entertainment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
                >
                  About Us
                </Button>
              </Link>
              <Link to="/mission">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl glow-primary transition-all hover:scale-105"
                >
                  Our Mission
                </Button>
              </Link>

            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

    </div>
  );
};

export default Home;
