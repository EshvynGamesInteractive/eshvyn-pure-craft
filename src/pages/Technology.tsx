import { motion } from "framer-motion";
import { Cpu, Code, Layers, Sparkles, Zap, Database } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Next-Gen Engines",
      description: "Built on Unity and Unreal Engine 5, leveraging cutting-edge rendering and physics systems.",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "AI-Driven Systems",
      description: "Advanced AI for dynamic storytelling, procedural generation, and intelligent NPCs.",
      color: "text-secondary",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Cloud-native infrastructure supporting millions of concurrent players worldwide.",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Utilizing C++, C#, and cutting-edge web technologies for seamless cross-platform experiences.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Real-Time Multiplayer",
      description: "Low-latency networking with advanced matchmaking and anti-cheat systems.",
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Player behavior analytics to continuously improve gameplay and balance.",
      color: "text-secondary",
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
              <span className="gradient-text glow-text-primary">Powering the</span>
              <br />
              <span className="text-muted-foreground">Future of Play</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Our technological foundation enables limitless creativity and unparalleled performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="holo-border rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <tech.icon className={`w-12 h-12 ${tech.color} mb-4 glow-primary`} />
                <h3 className={`text-2xl font-bold ${tech.color} mb-3`}>{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Our Technology Pillars
            </h2>
            <p className="text-xl text-muted-foreground">
              The foundation of every Eshvyn experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Visual Fidelity",
                description:
                  "Photorealistic graphics powered by ray tracing, global illumination, and advanced shader systems. Every frame is a masterpiece.",
              },
              {
                title: "Performance Optimization",
                description:
                  "120+ FPS on modern hardware with dynamic resolution scaling and intelligent LOD systems. Smooth gameplay is non-negotiable.",
              },
              {
                title: "Cross-Platform Excellence",
                description:
                  "Seamless experiences across PC, console, and cloud gaming platforms. Play anywhere, anytime, with full feature parity.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="holo-border rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Statement */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holo-border rounded-3xl p-12 text-center space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-primary">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold gradient-text">Continuous Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don't just adopt technology—we push it forward. Our R&D team continuously explores
              emerging tech like machine learning, procedural content generation, and neural rendering
              to ensure Eshvyn games remain at the cutting edge of what's possible.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
